# Tier 2 Feature 1: Unread Message Counts ✅

**Status**: COMPLETE
**Time**: ~4 hours
**Complexity**: Medium (database migration required)

---

## What Was Built

Red badge showing unread message count on group cards in:
- Groups.jsx browse page
- Dashboard.jsx "My Content" tab

Badges show when user has unread messages in a group (messages created after their last_read_at timestamp).

---

## Database Changes

### New Table: `group_read_status`

```sql
CREATE TABLE "group_read_status" (
    "user_id" INTEGER NOT NULL,
    "group_id" INTEGER NOT NULL,
    "last_read_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT "group_read_status_pkey" PRIMARY KEY ("user_id", "group_id"),
    CONSTRAINT "group_read_status_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
    CONSTRAINT "group_read_status_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE
);

CREATE INDEX "idx_group_read_status_user" ON "group_read_status"("user_id");
CREATE INDEX "idx_group_read_status_group" ON "group_read_status"("group_id");
```

### Migration

Run manually:
```bash
psql -U your_user -d studyhub -f backend/migrations/001_add_group_read_status.sql
```

Then regenerate Prisma client:
```bash
cd backend
npx prisma generate
```

---

## Backend Changes

### Modified Endpoint: GET /api/groups

Added unread count calculation for authenticated users:

```javascript
// Get read statuses
const readStatuses = await prisma.group_read_status.findMany({
    where: { user_id: userId }
});

// Calculate unread per group
const unreadCount = await prisma.group_messages.count({
    where: {
        group_id: g.id,
        created_at: { gt: lastRead },
        user_id: { not: userId }  // Don't count own messages
    }
});
```

Returns:
```json
{
  "id": 1,
  "name": "Study Group",
  "unreadCount": 3,
  ...
}
```

### New Endpoint: POST /api/groups/:id/read

Marks group as read (upserts last_read_at to current timestamp):

```javascript
await prisma.group_read_status.upsert({
    where: {
        user_id_group_id: { user_id: req.userId, group_id: groupId }
    },
    create: {
        user_id: req.userId,
        group_id: groupId,
        last_read_at: new Date()
    },
    update: {
        last_read_at: new Date()
    }
});
```

---

## Frontend Changes

### GroupChat.jsx

Marks group as read:
- On mount (when entering chat)
- Every 6s during polling interval (while chat is open)

```javascript
useEffect(() => {
    api.post(`/groups/${id}/read`).catch(() => {});
}, [id]);

useEffect(() => {
    const timer = setInterval(() => {
        if (!inputFocused.current) {
            loadMessages(true);
            api.post(`/groups/${id}/read`).catch(() => {});
        }
    }, POLL_MS);
    return () => clearInterval(timer);
}, [loadMessages, id]);
```

### Groups.jsx - GroupCard

Added unread badge:

```jsx
{group.unreadCount > 0 && (
    <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
        style={{ background: '#ef4444', boxShadow: '0 2px 8px rgba(239,68,68,0.4)' }}
    >
        {group.unreadCount > 9 ? '9+' : group.unreadCount}
    </motion.div>
)}
```

### Dashboard.jsx - ContentCard

Same badge pattern for group cards in "My Content" tab.

---

## UI Design

### Badge Appearance
- **Position**: Absolute top-3 right-3
- **Size**: 6x6 (24px circle)
- **Color**: #ef4444 (red)
- **Shadow**: 0 2px 8px rgba(239,68,68,0.4)
- **Text**: White, bold, 12px font
- **Max display**: 9+ (caps at 9)

### Animation
- Scale from 0 to 1 on mount (pop effect)
- Framer Motion initial/animate

### Theme Support
- Red badge works in both dark and light themes
- High contrast ensures visibility

---

## How It Works

### Read Status Flow

1. **User enters group chat**:
   - POST /api/groups/:id/read
   - Updates last_read_at to current time

2. **User views chat (polling active)**:
   - Every 6s: POST /api/groups/:id/read
   - Keeps last_read_at up-to-date

3. **User browses groups**:
   - GET /api/groups returns unreadCount
   - Backend counts messages where created_at > last_read_at

4. **Badge displays**:
   - If unreadCount > 0, show red badge
   - If unreadCount === 0, no badge

### Unread Logic

```javascript
const lastRead = readMap[g.id] || new Date(0);  // Default to epoch if never read
const unreadCount = await prisma.group_messages.count({
    where: {
        group_id: g.id,
        created_at: { gt: lastRead },     // Messages after last read
        user_id: { not: userId }          // Exclude own messages
    }
});
```

---

## Edge Cases Handled

### New User Joins Group
- No read status exists (lastRead = epoch)
- All existing messages show as unread
- Badge appears immediately

### User Never Opened Chat
- No read status exists
- Badge shows total message count (excluding own messages)

### User Opens Chat
- First open: Creates read status entry
- Subsequent opens: Updates last_read_at
- Badge disappears on next groups page load

### Own Messages
- Not counted in unread
- Sending message doesn't increase badge

### Multiple Devices
- Read status stored server-side
- Opening chat on any device marks as read for all devices
- Requires page refresh to see updated badge

---

## Performance Considerations

### Query Cost
- GET /groups now runs N subqueries (one per group)
- Mitigated with Promise.all for parallel execution
- Indexes on group_read_status speed up lookups

### Optimization Options

**Option 1**: Cache unread counts in Redis
```javascript
// Set TTL 10s, invalidate on new message
redis.set(`unread:${userId}:${groupId}`, count, 'EX', 10);
```

**Option 2**: Denormalize into groups table
```sql
ALTER TABLE groups ADD COLUMN unread_count INTEGER DEFAULT 0;
-- Increment on new message, reset on read
```

**Option 3**: Use PostgreSQL materialized view
```sql
CREATE MATERIALIZED VIEW group_unread_counts AS
SELECT user_id, group_id, COUNT(*) as unread
FROM group_messages ...
GROUP BY user_id, group_id;
```

Current implementation is acceptable for <100 groups. Optimize if performance degrades.

---

## Testing

### Manual Tests

1. **Create group and send message**
   - Other user sees badge with count

2. **Open chat**
   - Badge should disappear on next groups page load

3. **Send own message**
   - Own badge should not increment

4. **Multiple unread messages**
   - Badge shows correct count (1, 2, 3... 9+)

5. **Mark as read via chat**
   - Badge clears after 6s (next poll)

6. **Leave chat open**
   - Badge stays at 0 while viewing

7. **Refresh groups page**
   - Badge appears if new messages since last read

### Database Verification

```sql
-- Check read status exists
SELECT * FROM group_read_status WHERE user_id = 1;

-- Check unread count calculation
SELECT COUNT(*)
FROM group_messages
WHERE group_id = 1
AND created_at > (SELECT last_read_at FROM group_read_status WHERE user_id = 2 AND group_id = 1)
AND user_id != 2;
```

---

## Files Changed

```
backend/
├── prisma/
│   └── schema.prisma              (+17 lines: group_read_status model)
├── migrations/
│   └── 001_add_group_read_status.sql  (NEW: SQL migration)
└── src/routes/
    └── groups.js                  (+55 lines: unread logic + /read endpoint)

frontend/src/pages/
├── GroupChat.jsx                  (+3 lines: mark as read calls)
├── Groups.jsx                     (+11 lines: unread badge)
└── Dashboard.jsx                  (+11 lines: unread badge)
```

---

## Known Limitations

1. **No real-time update**: Badge only updates on page refresh
   - Requires WebSocket for instant updates (Tier 3)

2. **Own messages don't count**: By design, but could add toggle

3. **No notification sound**: Just visual badge

4. **No unread message list**: Badge shows count only, not which messages

5. **Delete message edge case**: If someone deletes messages, count may be inaccurate until recalculated

---

## Future Enhancements

1. **Unread message preview**: Show snippet of latest unread message

2. **Per-conversation unread**: Badge on each message thread (if we add threads)

3. **Mark all as read**: Bulk endpoint to clear all badges

4. **Notification settings**: Let users disable badges per group

5. **Desktop notifications**: Browser Notifications API (requires permission)

---

## Deployment Checklist

- [x] Schema updated (schema.prisma)
- [x] Migration SQL created (001_add_group_read_status.sql)
- [ ] **Run migration on production database**
- [ ] **Run `npx prisma generate` on production**
- [x] Backend routes updated (groups.js)
- [x] Frontend components updated (3 files)
- [x] Build passes (npm run build)
- [ ] Manual testing (see Testing section)

**IMPORTANT**: Migration must run before deploying backend code, or Prisma queries will fail with "Table does not exist" error.

---

## Success Metrics (Post-Launch)

Track these to measure feature impact:

- % of users with at least one unread badge daily
- Average unread count per user
- Time-to-clear (how long until badge goes to 0)
- Groups page refresh rate (increased traffic?)
- Chat engagement (do badges drive more chat opens?)

---

Feature 1 (Unread Counts) is COMPLETE and ready for testing! ✅
