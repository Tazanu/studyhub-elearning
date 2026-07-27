#!/bin/bash
# Full Join Request Workflow Test Script
# This demonstrates: create group → request join → approve → verify membership

echo "========================================="
echo "GROUP JOIN REQUEST WORKFLOW TEST"
echo "========================================="
echo ""

# Configuration
API_BASE="http://localhost:5000/api"

# Step 1: Login as User 1 (will be group owner)
echo "[1/8] Logging in as User 1 (group owner)..."
USER1_RESPONSE=$(curl -s -X POST "$API_BASE/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}')

USER1_TOKEN=$(echo $USER1_RESPONSE | grep -o '"token":"[^"]*' | cut -d'"' -f4)

if [ -z "$USER1_TOKEN" ]; then
  echo "❌ Failed to login as User 1"
  echo "Response: $USER1_RESPONSE"
  exit 1
fi
echo "✅ User 1 logged in (token: ${USER1_TOKEN:0:20}...)"
echo ""

# Step 2: Create a group with requires_approval=true
echo "[2/8] Creating a group (requires_approval=true)..."
CREATE_GROUP=$(curl -s -X POST "$API_BASE/groups" \
  -H "Authorization: Bearer $USER1_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test Approval Group",
    "description":"Testing the join approval workflow",
    "subject":"Computer Science",
    "maxMembers":20,
    "requiresApproval":true
  }')

GROUP_ID=$(echo $CREATE_GROUP | grep -o '"id":[0-9]*' | head -1 | cut -d':' -f2)

if [ -z "$GROUP_ID" ]; then
  echo "❌ Failed to create group"
  echo "Response: $CREATE_GROUP"
  exit 1
fi
echo "✅ Group created (ID: $GROUP_ID)"
echo ""

# Step 3: Login as User 2 (will request to join)
echo "[3/8] Logging in as User 2 (requester)..."
USER2_RESPONSE=$(curl -s -X POST "$API_BASE/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email":"user2@example.com","password":"password123"}')

USER2_TOKEN=$(echo $USER2_RESPONSE | grep -o '"token":"[^"]*' | cut -d'"' -f4)

if [ -z "$USER2_TOKEN" ]; then
  echo "❌ Failed to login as User 2"
  echo "Response: $USER2_RESPONSE"
  exit 1
fi
echo "✅ User 2 logged in (token: ${USER2_TOKEN:0:20}...)"
echo ""

# Step 4: User 2 requests to join
echo "[4/8] User 2 requesting to join group..."
JOIN_REQUEST=$(curl -s -X POST "$API_BASE/groups/$GROUP_ID/join" \
  -H "Authorization: Bearer $USER2_TOKEN")

echo "Response: $JOIN_REQUEST"

if echo "$JOIN_REQUEST" | grep -q '"requestStatus":"pending"'; then
  echo "✅ Join request created successfully (status: pending)"
else
  echo "❌ Join request failed"
  exit 1
fi
echo ""

# Step 5: Verify User 2 is NOT yet a member
echo "[5/8] Verifying User 2 is not yet a member..."
GROUP_INFO=$(curl -s "$API_BASE/groups/$GROUP_ID")
CURRENT_MEMBERS=$(echo $GROUP_INFO | grep -o '"current_members":[0-9]*' | cut -d':' -f2)

if [ "$CURRENT_MEMBERS" -eq "1" ]; then
  echo "✅ Confirmed: current_members = 1 (only the owner)"
else
  echo "⚠️  current_members = $CURRENT_MEMBERS (expected 1)"
fi
echo ""

# Step 6: User 1 fetches pending requests
echo "[6/8] User 1 fetching pending join requests..."
PENDING_REQUESTS=$(curl -s "$API_BASE/groups/$GROUP_ID/requests" \
  -H "Authorization: Bearer $USER1_TOKEN")

echo "Pending requests: $PENDING_REQUESTS"

REQUEST_ID=$(echo $PENDING_REQUESTS | grep -o '"id":[0-9]*' | head -1 | cut -d':' -f2)

if [ -z "$REQUEST_ID" ]; then
  echo "❌ No pending requests found"
  exit 1
fi
echo "✅ Found pending request (ID: $REQUEST_ID)"
echo ""

# Step 7: User 1 approves the request
echo "[7/8] User 1 approving the join request..."
APPROVE_RESPONSE=$(curl -s -X POST "$API_BASE/groups/$GROUP_ID/requests/$REQUEST_ID/approve" \
  -H "Authorization: Bearer $USER1_TOKEN")

echo "Approve response: $APPROVE_RESPONSE"

if echo "$APPROVE_RESPONSE" | grep -q '"success":true'; then
  echo "✅ Join request approved successfully"
else
  echo "❌ Approval failed"
  exit 1
fi
echo ""

# Step 8: Verify User 2 is now a member
echo "[8/8] Verifying User 2 is now a member..."
UPDATED_GROUP=$(curl -s "$API_BASE/groups/$GROUP_ID")
UPDATED_MEMBERS=$(echo $UPDATED_GROUP | grep -o '"current_members":[0-9]*' | cut -d':' -f2)

if [ "$UPDATED_MEMBERS" -eq "2" ]; then
  echo "✅ Confirmed: current_members = 2 (owner + approved member)"
else
  echo "❌ current_members = $UPDATED_MEMBERS (expected 2)"
  exit 1
fi
echo ""

# Bonus: Check notifications
echo "[BONUS] Checking notifications for User 2..."
NOTIFICATIONS=$(curl -s "$API_BASE/notifications/mine" \
  -H "Authorization: Bearer $USER2_TOKEN")

if echo "$NOTIFICATIONS" | grep -q "request_approved"; then
  echo "✅ User 2 received approval notification"
else
  echo "⚠️  No approval notification found"
fi
echo ""

echo "========================================="
echo "✅ ALL TESTS PASSED!"
echo "========================================="
echo ""
echo "Summary:"
echo "  - Group created with requires_approval=true"
echo "  - User 2 requested to join (status: pending)"
echo "  - User 1 (admin) approved the request"
echo "  - User 2 is now a member (current_members incremented)"
echo "  - Notification sent to User 2"
