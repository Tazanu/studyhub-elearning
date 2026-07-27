# GroupChat Tier 1 Upgrades — Implementation Complete ✅

## Overview
Implemented all three Tier 1 features using the **existing schema columns** (file_url, file_type, reply_to, is_edited) — zero database migrations required.

---

## Feature 1: File/Image Sharing ✅

### Backend Changes (groups.js)
- Updated `POST /api/groups/:id/messages` to use `upload.single('file')` middleware
- Accepts optional `file` in FormData alongside `message` text
- Saves uploaded files to `backend/uploads/` directory (same pattern as notes)
- Populates `file_url` (e.g., `/uploads/1234567890-xyz.png`) and `file_type` (e.g., `png`) in database
- Includes reply_to relationship in GET messages query

### Frontend Changes (GroupChat.jsx)
- Added file input with **Paperclip button** next to message input
- File preview bar shows selected file name with remove button
- Sends files via FormData with `multipart/form-data` headers
- **Image attachments** (jpg/jpeg/png/gif/webp):
  - Rendered as inline thumbnails (max-w-xs, rounded corners)
  - Click to view full-size in modal overlay (black backdrop, close button)
- **Non-image attachments** (pdf/doc/txt/etc):
  - Rendered as download chip with file-type icon (FileText/File from lucide-react)
  - Styled with subtle background matching message bubble theme
- Works in both sent and received messages
- Supports message-only, file-only, or message+file combinations

### Design
- File chips use `rgba(255,255,255,0.15)` background on blue sent bubbles
- File chips use `var(--bg-main)` background on received bubbles
- Icons: ImageIcon for images, FileText for docs, File for generic files
- Full-size image modal: 85% black overlay, close button top-right, click outside to dismiss

---

## Feature 2: Reply-to-Message Threading ✅

### Backend Changes (groups.js)
- Updated `POST /api/groups/:id/messages` to accept optional `reply_to` (message ID) in FormData
- Includes `group_messages` relation in both GET and POST responses (nested user info)
- Self-referential join: `group_messages.group_messages` gives the replied-to message object

### Frontend Changes (GroupChat.jsx)
- **Reply button** on every message (Reply icon from lucide-react, 12px size)
- Click sets `replyTo` state → shows preview bar above input
- **Reply preview bar** (dismissible with X button):
  - Shows "Replying to [FirstName]"
  - Truncates replied-to message text
  - Blue accent color for name
- **Quoted preview in message bubble**:
  - Rendered above the new message content
  - Small border-left-2 with `var(--accent-blue)`
  - Shows original author name + message snippet
  - Clickable → scrolls to original message with highlight animation
- **Scroll-to-original**: Uses `messageRefs` to store DOM refs, scrollIntoView with smooth behavior, adds `highlight-flash` CSS class

### Design
- Quote preview uses `var(--bg-main)` background, blue left border, secondary text color
- Hoverable (opacity: 80% on hover) to indicate clickability
- Reply preview bar matches file preview bar styling (same dismissible pattern)

---

## Feature 3: Edit Messages with 15min Window ✅

### Backend Changes (groups.js)
- New endpoint: `PATCH /api/groups/:id/messages/:messageId`
- Validates ownership (`user_id === req.userId`)
- Enforces **15-minute edit window** server-side (calculates age from `created_at`)
- Returns 403 error if window expired: "Edit window expired (15 minutes)"
- Sets `is_edited: true` when update succeeds
- Returns updated message with relations

### Frontend Changes (GroupChat.jsx)
- **Edit button** on own messages (Edit2 icon, 12px, only shows if within 15min window)
- Client-side `canEdit()` helper checks ownership + age (prevents UI flicker)
- Click edit → replaces message bubble content with inline text input
- Input has border-bottom, matches bubble theme (white border on blue, subtle border on received)
- **Keyboard shortcuts**:
  - Enter → save edit
  - Escape → cancel edit
- Check/X buttons for save/cancel (hover scale animation)
- **(edited)** label shown in timestamp row after successful edit

### Design
- Edit input blends into message bubble (transparent background, themed border)
- Edit/Reply buttons shown in flex gap-1 next to timestamp
- Buttons: 12px icons, rounded, hover changes to blue-500 with white text
- All interactive elements have proper hover/focus states

---

## Additional Improvements

### CSS (index.css)
- Added `highlight-flash` keyframe animation (0 → 15% blue glow → 0, 1.5s duration)
- Applied via `.message-bubble.highlight-flash` class when scrolling to replied-to message

### Message Refs System
- `messageRefs.current[msg.id]` stores DOM reference for each message
- Used for scroll-to-message on reply quote click
- Cleanup happens automatically via React ref callback pattern

### Optimistic Updates Enhanced
- File uploads included in optimistic message (uses URL.createObjectURL for immediate preview)
- Reply_to relationship preserved in optimistic message
- Full rollback on error (removes optimistic, restores input, clears file)

---

## Testing Checklist ✅

### File Sharing
- [x] Upload image → renders as thumbnail
- [x] Click thumbnail → opens full-size modal
- [x] Upload PDF → renders as download chip with FileText icon
- [x] File shows in both sent (right, blue) and received (left, gray) bubbles
- [x] File-only message (no text) works
- [x] Message+file combo works
- [x] File preview bar dismissible before sending

### Reply Threading
- [x] Click Reply → preview bar appears
- [x] Preview bar shows correct author + message
- [x] Preview bar dismissible
- [x] Sent message shows quoted preview with border
- [x] Click quoted preview → scrolls to original + highlights
- [x] Highlight animation plays correctly
- [x] Reply-to relationship persists across refresh

### Edit Messages
- [x] Edit button only shows on own messages
- [x] Edit button only shows within 15min window
- [x] Click edit → input appears inline
- [x] Enter key saves edit
- [x] Escape key cancels edit
- [x] Check/X buttons work
- [x] (edited) label appears after save
- [x] Server rejects edit after 15min window
- [x] Edit UI works in both light/dark themes

### Cross-Feature
- [x] Can reply to message with file attachment
- [x] Can edit message that was a reply (preserves reply_to)
- [x] Reply/Edit buttons don't conflict (edit hides reply button)
- [x] All features work offline-aware (buttons disabled when offline)

---

## API Endpoints Summary

### Modified Endpoints
1. **POST /api/groups/:id/messages**
   - Now accepts: `message` (optional), `file` (optional), `reply_to` (optional)
   - Uses multer middleware: `upload.single('file')`
   - Returns message with full relations (users, group_messages)

2. **GET /api/groups/:id/messages**
   - Now includes `group_messages` relation (for reply-to threading)
   - Returns nested user info for replied-to messages

### New Endpoints
3. **PATCH /api/groups/:id/messages/:messageId**
   - Body: `{ message: string }`
   - Validates ownership + 15min window server-side
   - Sets `is_edited: true`
   - Returns updated message with relations

---

## Design System Compliance ✅

- All new elements use existing CSS variables (--bg-card, --text-secondary, --accent-blue, --border-subtle)
- Icons from lucide-react match existing size/weight (12px for actions, 16-18px for main elements)
- Hover states use blue-500 background with white text (consistent with sidebar/buttons)
- File chips use theme-aware backgrounds (transparent white overlay on blue, bg-main on gray)
- Reply preview borders use accent-blue (matches existing link/badge colors)
- Edit input borders adapt to bubble theme (white on blue, subtle on gray)
- All animations use existing timing patterns (0.22s for micro-interactions, 1.5s for highlights)

---

## Known Constraints & Production Notes

### File Upload Limits
- **Max file size**: 20MB (enforced by multer, matches notes upload)
- **Allowed types**: Client accepts `image/*,.pdf,.doc,.docx,.txt`
- **Storage**: Files saved to `backend/uploads/` (same as notes)
- **Serving**: Accessed via `/uploads/[filename]` (requires static file serving in production)

### URL Hardcoded Values
- Image/file URLs use `http://localhost:5000` prefix (same pattern as notes)
- **TODO**: Replace with env variable for production deployment

### Edit Window
- 15-minute window enforced **server-side** (client checks are UI-only)
- Window calculated from `created_at` timestamp
- No grace period — after 15:00, server returns 403

### Reply Threading Depth
- System supports **single-level replies only** (no nested reply chains)
- Replied-to message stored as flat reference (reply_to → message ID)
- Could extend to multi-level threading with recursive queries if needed

### Performance Considerations
- Messages query limited to 100 most recent (existing behavior)
- Reply relation adds one JOIN per message (acceptable for 100 records)
- Image thumbnails NOT lazy-loaded (consider adding if chat gets heavy image traffic)
- Full-size image modal loads original file (no optimization/compression)

---

## Next Steps: Tier 2 Features (Ready to Propose)

### Typing Indicators
**Proposal**: Lightweight polling-based implementation (no WebSocket dependency yet)
- New endpoint: `POST /api/groups/:id/typing` (updates in-memory map: groupId → {userId: timestamp})
- Frontend polls `GET /api/groups/:id/typing` every 2-3s while input focused
- Shows "X is typing..." indicator below header when active typists exist
- Typing state expires after 5s of inactivity (server-side cleanup)
- **Tradeoff**: 2-3s delay vs. real-time, but avoids WebSocket infrastructure for now

### Unread Message Counts
**Proposal**: New small Prisma model + endpoint modification
- New table: `group_read_status { user_id, group_id, last_read_at }`
- Update `last_read_at` on message poll/send
- Modify `GET /api/groups` to include unread count (join + count where created_at > last_read_at)
- Show unread badges on GroupCard in Groups.jsx and Dashboard.jsx
- **Tradeoff**: Adds one table + one join to groups query, but provides persistent read tracking

### In-Group Message Search
**Proposal**: Simple query param on existing messages endpoint
- Extend `GET /api/groups/:id/messages?search=keyword` with Prisma `contains` filter
- Add search icon in chat header (expands to search bar when clicked)
- Highlight matching messages (scroll to first result)
- **Tradeoff**: Client-side search limited to loaded 100 messages, but zero new endpoints

**Ready to build any of these — confirm priority before implementing.**

---

## Tier 3 Proposal: WebSockets (Awaiting Sign-Off)

### What Changes
- Add Socket.IO dependency (server + client)
- Replace polling with persistent WebSocket connections
- Events: `message:new`, `message:edit`, `typing:start`, `typing:stop`, `user:joined`, `user:left`
- Room-based subscriptions (join room on entering chat, leave on exit)

### Complexity Cost
- New server setup (socket.io instance, authentication middleware for sockets)
- Connection state management (reconnection logic, fallback to polling if WS fails)
- Deployment considerations (load balancer sticky sessions or Redis adapter for multi-instance)
- Testing complexity (need to test real-time events, race conditions)

### Rough Effort
- **Backend**: 4-6 hours (socket setup, event handlers, room management, auth)
- **Frontend**: 3-4 hours (socket client, event listeners, optimistic update refactor)
- **Testing**: 2-3 hours (connection edge cases, multi-user scenarios)
- **Total**: ~10-13 hours for full implementation + testing

### Benefits
- **Instant message delivery** (0ms vs. 6s poll delay)
- **Real-time typing indicators** (no polling overhead)
- **Presence detection** (online/offline status)
- **Scalable foundation** for future features (reactions, read receipts, live notifications)

**Recommend: Wait until user feedback confirms need for real-time features before committing to WebSocket architecture change.**
