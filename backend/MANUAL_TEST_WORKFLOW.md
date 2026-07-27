# MANUAL CURL TEST - Join Request Approval Workflow

## Prerequisites
- Backend server running on http://localhost:5000
- Two test users available:
  - User 1 (ID: 1): test@example.com
  - User 2 (ID: 2): stanleytazanu262@gmail.com

---

## STEP 1: Login as User 1 (Group Owner)

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@example.com\",\"password\":\"password123\"}"
```

**Copy the `token` from the response** → Save as `USER1_TOKEN`

---

## STEP 2: Create Group (requires_approval = true)

```bash
curl -X POST http://localhost:5000/api/groups \
  -H "Authorization: Bearer USER1_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Approval Test Group\",\"description\":\"Testing join approval workflow\",\"subject\":\"Computer Science\",\"requiresApproval\":true}"
```

**Copy the `id` from the response** → Save as `GROUP_ID`

**Expected response:**
```json
{
  "success": true,
  "group": {
    "id": X,
    "name": "Approval Test Group",
    "requires_approval": true,
    "current_members": 1
  }
}
```

---

## STEP 3: Login as User 2 (Requester)

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"stanleytazanu262@gmail.com\",\"password\":\"password123\"}"
```

**Copy the `token` from the response** → Save as `USER2_TOKEN`

---

## STEP 4: User 2 Requests to Join

```bash
curl -X POST http://localhost:5000/api/groups/GROUP_ID_HERE/join \
  -H "Authorization: Bearer USER2_TOKEN_HERE"
```

**Expected response:**
```json
{
  "success": true,
  "requestStatus": "pending",
  "message": "Join request submitted. Waiting for admin approval."
}
```

✅ **Verify:** User 2 should NOT be a member yet (current_members should still be 1)

---

## STEP 5: Verify Group Still Has 1 Member

```bash
curl http://localhost:5000/api/groups/GROUP_ID_HERE
```

**Check:** `"current_members": 1` (only the owner)

---

## STEP 6: User 1 Views Pending Requests

```bash
curl http://localhost:5000/api/groups/GROUP_ID_HERE/requests \
  -H "Authorization: Bearer USER1_TOKEN_HERE"
```

**Expected response:**
```json
[
  {
    "id": X,
    "user_id": 2,
    "group_id": Y,
    "status": "pending",
    "users": {
      "first_name": "TAZANU",
      "last_name": "STANLEY",
      "university": "...",
      ...
    }
  }
]
```

**Copy the request `id`** → Save as `REQUEST_ID`

---

## STEP 7: User 1 Approves the Request

```bash
curl -X POST http://localhost:5000/api/groups/GROUP_ID_HERE/requests/REQUEST_ID_HERE/approve \
  -H "Authorization: Bearer USER1_TOKEN_HERE"
```

**Expected response:**
```json
{
  "success": true,
  "message": "TAZANU STANLEY added to group"
}
```

---

## STEP 8: Verify User 2 is Now a Member

```bash
curl http://localhost:5000/api/groups/GROUP_ID_HERE
```

**Check:** `"current_members": 2` (owner + approved member)

✅ **Success!** current_members incremented from 1 to 2

---

## STEP 9: Check Notifications

### User 1 should have received "join_request" notification:
```bash
curl http://localhost:5000/api/notifications/mine \
  -H "Authorization: Bearer USER1_TOKEN_HERE"
```

### User 2 should have received "request_approved" notification:
```bash
curl http://localhost:5000/api/notifications/mine \
  -H "Authorization: Bearer USER2_TOKEN_HERE"
```

**Expected for User 2:**
```json
{
  "notifications": [
    {
      "type": "request_approved",
      "message": "Your request to join Approval Test Group was approved",
      "is_read": false
    }
  ],
  "unreadCount": 1
}
```

---

## BONUS: Test Deny Flow

### Create another group and request, then deny:
```bash
# User 1 creates second group
curl -X POST http://localhost:5000/api/groups \
  -H "Authorization: Bearer USER1_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test Deny Group\",\"description\":\"Testing deny\",\"subject\":\"Math\",\"requiresApproval\":true}"

# User 2 requests
curl -X POST http://localhost:5000/api/groups/NEW_GROUP_ID/join \
  -H "Authorization: Bearer USER2_TOKEN"

# User 1 denies
curl -X POST http://localhost:5000/api/groups/NEW_GROUP_ID/requests/NEW_REQUEST_ID/deny \
  -H "Authorization: Bearer USER1_TOKEN"
```

**Expected:** User 2 gets "request_denied" notification, NOT added to group

---

## ✅ SUCCESS CRITERIA

1. User 2 cannot join immediately when requires_approval=true
2. Join request shows status "pending"
3. User 1 (admin) can see pending requests
4. User 1 can approve → User 2 becomes member → current_members increments
5. Both users receive appropriate notifications
6. Deny flow works correctly (user NOT added to group)

---

## 🐛 TROUBLESHOOTING

- **"Failed to login"**: Check password in database (might not be "password123")
- **"Only group admins can view"**: Token might be wrong or expired
- **"Request not found"**: Double-check REQUEST_ID from step 6
- **No notifications**: Check backend console for errors

---

**Please run this test and paste the results here!**
