# GroupChat Tier 1 Architecture Diagram

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         FRONTEND (React)                             │
│                     GroupChat.jsx Component                          │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
         ┌──────────▼──────┐ ┌───▼────┐ ┌─────▼──────┐
         │ File Sharing    │ │ Reply  │ │   Edit     │
         │    Feature      │ │ Thread │ │  Message   │
         └──────────┬──────┘ └───┬────┘ └─────┬──────┘
                    │             │             │
                    └─────────────┼─────────────┘
                                  │
                    ┌─────────────▼──────────────┐
                    │      API Client (Axios)     │
                    │   http://localhost:5000     │
                    └─────────────┬───────────────┘
                                  │
┌─────────────────────────────────┼─────────────────────────────────┐
│                          BACKEND (Express)                          │
│                     routes/groups.js                                │
└─────────────────────────────────┬─────────────────────────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
  ┌─────▼────────┐      ┌────────▼──────┐      ┌─────────▼────────┐
  │ POST /groups │      │ GET /groups   │      │ PATCH /groups    │
  │ /:id/messages│      │ /:id/messages │      │ /:id/messages/   │
  │              │      │               │      │ :messageId       │
  │ + Multer     │      │ + Relations   │      │ + Time Check     │
  │   Middleware │      │   Include     │      │ + Ownership      │
  └──────┬───────┘      └───────┬───────┘      └─────────┬────────┘
         │                      │                        │
         └──────────────────────┼────────────────────────┘
                                │
                    ┌───────────▼────────────┐
                    │   Prisma ORM Client    │
                    └───────────┬────────────┘
                                │
┌─────────────────────────────────┼─────────────────────────────────┐
│                     DATABASE (PostgreSQL)                           │
│                    group_messages table                             │
│                                                                     │
│  Columns Used:                                                      │
│  • id               Int         (PK)                                │
│  • group_id         Int         (FK → groups)                       │
│  • user_id          Int         (FK → users)                        │
│  • message          String      (message text)                      │
│  • file_url         String?     ✅ NEW: File path                   │
│  • file_type        String?     ✅ NEW: Extension (png/pdf/etc)     │
│  • reply_to         Int?        ✅ NEW: FK → group_messages         │
│  • is_edited        Boolean?    ✅ NEW: Edit flag                   │
│  • created_at       DateTime    (for 15min window check)            │
│  • updated_at       DateTime    (auto-updated on edit)              │
└─────────────────────────────────────────────────────────────────────┘
```

## Feature 1: File Sharing Flow

```
User Action                    Frontend                     Backend
─────────────────────────────────────────────────────────────────────

1. Click paperclip
   button               →    Open file picker

2. Select file         →    setSelectedFile(file)
                             Show preview bar

3. (Optional) Type     →    setInput(text)
   message text

4. Click Send          →    Create FormData:
                             • append('message', text)
                             • append('file', file)
                             • append('reply_to', id)

5. Submit form         →    POST /groups/:id/messages
                             Content-Type: multipart/form-data
                                                        →   Multer middleware
                                                            extracts file

                                                        →   Save to uploads/
                                                            [timestamp]-[random].[ext]

                                                        →   Prisma create:
                                                            {
                                                              message: "...",
                                                              file_url: "/uploads/...",
                                                              file_type: "png"
                                                            }

                                                        ←   Return message object
                             Receive response      ←
                             Replace optimistic msg
                             Show thumbnail/chip

6. Other user polls    →    GET /groups/:id/messages
   (6s interval)                                   →   Prisma findMany
                                                        (includes file_url/type)

                                                   ←   Return all messages
                             Render file attachment ←
```

## Feature 2: Reply Threading Flow

```
User Action                    Frontend                     Backend
─────────────────────────────────────────────────────────────────────

1. Click Reply button  →    setReplyTo(message)
   on message                Show preview bar

2. Type response       →    setInput(text)

3. Click Send          →    FormData.append('reply_to', msg.id)
                             POST /groups/:id/messages
                                                        →   Prisma create:
                                                            {
                                                              message: "...",
                                                              reply_to: 123
                                                            }

                                                        →   Include relation:
                                                            include: {
                                                              group_messages: {
                                                                include: { users }
                                                              }
                                                            }

                                                        ←   Return nested structure:
                             Receive response      ←      {
                             with nested original          id: 456,
                             message                       message: "Thanks!",
                                                           reply_to: 123,
                                                           group_messages: {
                                                             id: 123,
                                                             message: "Hello",
                                                             users: {...}
                                                           }
                                                         }

4. Render quote        →    Show blue border box
   preview in bubble         with original author + text

5. Click quote         →    scrollToMessage(reply_to)
   preview                   messageRefs.current[123]
                             .scrollIntoView({smooth})

6. Highlight           →    Add 'highlight-flash' class
   animation                 CSS animation plays (1.5s)
```

## Feature 3: Edit Message Flow

```
User Action                    Frontend                     Backend
─────────────────────────────────────────────────────────────────────

1. Click Edit button   →    Check canEdit(msg):
   (only if <15min)           age = (now - created_at) / 60000
                              if (age > 15) hide button

2. Button visible      →    startEdit(msg)
                             setEditingMsg(msg)
                             setEditText(msg.message)
                             Render inline input

3. Type changes        →    setEditText(newValue)

4. Press Enter or      →    PATCH /groups/:id/messages/456
   click ✓                   Body: { message: "new text" }
                                                        →   Verify ownership:
                                                            if (msg.user_id !== req.userId)
                                                              return 403

                                                        →   Check time window:
                                                            age = (now - created_at) / 60000
                                                            if (age > 15)
                                                              return 403 "Edit window expired"

                                                        →   Prisma update:
                                                            {
                                                              message: "new text",
                                                              is_edited: true
                                                            }

                                                        ←   Return updated message
                             Receive response      ←
                             Replace in messages array
                             setEditingMsg(null)
                             Show "(edited)" label

5. Other user polls    →    GET /groups/:id/messages
   (6s interval)                                   →   Prisma findMany
                                                        (includes is_edited flag)

                                                   ←   Return all messages
                             Render "(edited)" label ←
```

## Data Flow Summary

```
┌────────────────────────────────────────────────────────────────┐
│                     Message Object Structure                    │
└────────────────────────────────────────────────────────────────┘

{
  id: 456,                              // Message ID
  group_id: 10,                         // Group reference
  user_id: 22,                          // Author ID
  message: "Check this out!",           // Text content
  
  // ✅ NEW: File sharing
  file_url: "/uploads/1234567890-abc.png",
  file_type: "png",
  
  // ✅ NEW: Reply threading
  reply_to: 123,
  group_messages: {                     // Nested replied-to message
    id: 123,
    message: "Original message",
    users: {
      first_name: "John",
      last_name: "Doe"
    }
  },
  
  // ✅ NEW: Edit tracking
  is_edited: true,
  
  created_at: "2024-01-15T10:30:00Z",
  updated_at: "2024-01-15T10:32:00Z",   // Updated on edit
  
  users: {                              // Author info
    id: 22,
    first_name: "Jane",
    last_name: "Smith"
  }
}
```

## State Management (Frontend)

```
┌─────────────────────────────────────────────────────────────────┐
│                   GroupChat.jsx State Tree                       │
└─────────────────────────────────────────────────────────────────┘

useState
├─ group                   (Group metadata)
├─ messages                (Array of message objects)
├─ input                   (Text input value)
├─ sending                 (Boolean: submit in progress)
├─ loadingMs               (Boolean: initial load)
├─ refreshing              (Boolean: manual refresh)
├─ selectedFile            ✅ NEW: File object before send
├─ replyTo                 ✅ NEW: Message object being replied to
├─ editingMsg              ✅ NEW: Message object being edited
├─ editText                ✅ NEW: Edit input value
└─ fullImageView           ✅ NEW: Image URL for modal

useRef
├─ bottomRef               (Auto-scroll target)
├─ inputRef                (Text input focus)
├─ fileInputRef            ✅ NEW: Hidden file input
├─ inputFocused            (Pause polling when typing)
├─ latestMsgId             (Track newest message)
└─ messageRefs             ✅ NEW: Map of message IDs to DOM nodes
```

## File Storage Structure

```
backend/
└── uploads/                           (Static file directory)
    ├── 1705315200000-123456789.png    ← Image attachment
    ├── 1705315300000-987654321.pdf    ← PDF document
    └── 1705315400000-555555555.jpg    ← Another image

Served via: app.use('/uploads', express.static('uploads'))
Accessed as: http://localhost:5000/uploads/[filename]

Frontend URLs:
- Images: `http://localhost:5000${msg.file_url}`
- Downloads: <a href=`http://localhost:5000${msg.file_url}` download>
```

## Database Relationships

```
┌──────────────┐       ┌────────────────────┐       ┌──────────────┐
│    users     │       │  group_messages    │       │    groups    │
├──────────────┤       ├────────────────────┤       ├──────────────┤
│ id (PK)      │◄──────┤ user_id (FK)       │       │ id (PK)      │
│ first_name   │       │ group_id (FK)      ├──────►│ name         │
│ last_name    │       │ message            │       │ subject      │
│ ...          │       │ file_url      ✅   │       │ ...          │
└──────────────┘       │ file_type     ✅   │       └──────────────┘
                       │ reply_to (FK) ✅   │
         ┌─────────────┤ is_edited     ✅   │
         │             │ created_at         │
         │             │ updated_at         │
         │             └────────────────────┘
         │                       ▲
         │                       │
         └───────────────────────┘
           Self-referential join for reply threading
           (reply_to references same table's id)
```

## UI Component Hierarchy

```
GroupChat
├── Header
│   ├── Back Button
│   ├── Group Name/Info
│   └── Refresh Button
│
├── Messages Area (scrollable)
│   └── Message Bubble (for each message)
│       ├── Author Name (if not own)
│       ├── Reply Quote Preview ✅ NEW
│       │   └── Click → scrollToMessage()
│       ├── Message Text OR Edit Input ✅ NEW
│       ├── File Attachment ✅ NEW
│       │   ├── Image Thumbnail (if image)
│       │   │   └── Click → setFullImageView()
│       │   └── Download Chip (if non-image)
│       └── Timestamp Row
│           ├── Time
│           ├── "(edited)" Label ✅ NEW
│           ├── Reply Button ✅ NEW
│           └── Edit Button ✅ NEW (if own + <15min)
│
├── Input Area
│   ├── Reply Preview Bar ✅ NEW (if replyTo set)
│   ├── File Preview Bar ✅ NEW (if selectedFile set)
│   └── Input Row
│       ├── File Attach Button ✅ NEW
│       ├── Text Input
│       └── Send Button
│
└── Modals
    └── Full-Size Image Modal ✅ NEW
        ├── Black Overlay (85% opacity)
        ├── Large Image
        └── Close Button (X)
```

## Performance Characteristics

```
Operation                     Time/Cost              Notes
───────────────────────────────────────────────────────────────────

Message Send (text only)      ~50-100ms             Optimistic update: instant
Message Send (with file)      ~200-500ms            Depends on file size
Edit Message                  ~50-100ms             Network roundtrip only
Reply (scroll to original)    ~300ms                Smooth scroll animation
Image Thumbnail Load          ~100-500ms            Depends on image size
File Upload (1MB)             ~1-3s                 Network + server processing
Polling Interval              6000ms                Unchanged from before
Edit Window Check (client)    <1ms                  Simple timestamp math
Edit Window Check (server)    <5ms                  Database timestamp query

Memory Footprint:
- Message refs map:           ~100 bytes per message
- Selected file state:        File size (max 20MB)
- Image modal:                Duplicate image in memory
```

## Security Model

```
┌────────────────────────────────────────────────────────────────┐
│                       Security Checks                           │
└────────────────────────────────────────────────────────────────┘

File Upload (POST /groups/:id/messages)
├─ Authentication Required:     ✅ authenticate middleware
├─ Group Membership Check:      ✅ user_groups lookup
├─ File Size Limit:             ✅ Multer (20MB)
├─ File Type Validation:        ⚠️  Client-side only (TODO: backend MIME check)
└─ Rate Limiting:               ❌ None (TODO: prevent spam)

Edit Message (PATCH /groups/:id/messages/:messageId)
├─ Authentication Required:     ✅ authenticate middleware
├─ Ownership Check:             ✅ msg.user_id === req.userId
├─ Time Window Enforcement:     ✅ Server-side (15 minutes)
└─ Bypass Prevention:           ✅ Client check is UI-only, server always validates

Reply Threading (no new endpoint)
├─ Authentication Required:     ✅ authenticate middleware
├─ Group Membership Check:      ✅ user_groups lookup
├─ Reply Target Validation:     ⚠️  No check that reply_to exists (TODO: FK constraint)
└─ Cross-Group Reply:           ⚠️  No check that reply_to is in same group (TODO)
```

## Error Handling Paths

```
Scenario                       Frontend Behavior           Backend Response
──────────────────────────────────────────────────────────────────────────

File too large (>20MB)         Client validation rejects   413 Payload Too Large
                               OR shows error toast

Network offline                Button disabled             (No request sent)
                               Shows offline banner

Edit after 15 minutes          Button hidden (UI)          403 "Edit window expired"
                               Toast error if bypass

Not group member               (Should not occur)          403 "Not a member"

Edit someone else's msg        Button not shown (UI)       403 "Not authorized"

Invalid file type              Browser file picker         (No server validation yet)
                               filters by accept attr

Upload fails mid-transfer      Optimistic msg removed      500 "Failed to send"
                               Input text restored

Reply to deleted message       Quote shows "(deleted)"     (Relation returns null)
                               or "[Message unavailable]"

Image fails to load            Browser broken image icon   (Server 404 if file missing)
```

---

## Comparison: Before vs. After

```
┌─────────────────────────────────────────────────────────────────┐
│                    Feature Comparison Matrix                     │
└─────────────────────────────────────────────────────────────────┘

Feature                  Before (v1.0)       After (v1.1 - Tier 1)
─────────────────────────────────────────────────────────────────────

Text Messages            ✅                  ✅ (unchanged)
File Attachments         ❌                  ✅ Images + Documents
Image Thumbnails         ❌                  ✅ Inline + Full-size modal
Reply Threading          ❌                  ✅ Single-level with quotes
Edit Messages            ❌                  ✅ Within 15 minutes
Edit Indicator           ❌                  ✅ "(edited)" label
Typing Indicators        ❌                  ❌ (Tier 2)
Unread Counts            ❌                  ❌ (Tier 2)
Message Search           ❌                  ❌ (Tier 2)
Real-time Delivery       ❌ (6s polling)     ❌ (Tier 3 - WebSockets)
Push Notifications       ❌                  ❌ (Tier 3)

Lines of Code:
- GroupChat.jsx          ~150 lines          ~450 lines (+300)
- routes/groups.js       ~200 lines          ~270 lines (+70)
- Total Change           ---                 +370 lines

Database Schema:
- New tables             ---                 0 (used existing columns)
- New columns            ---                 0 (already existed)
- Migrations needed      ---                 0
```

---

This diagram visualizes the complete architecture of the Tier 1 chat upgrades,
showing data flow, component hierarchy, and system interactions.
