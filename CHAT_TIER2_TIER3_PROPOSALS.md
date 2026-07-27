# GroupChat Tier 2 & 3 Feature Proposals

## TIER 2: Small Backend Additions (Ready to Build)

---

### Feature 4: Typing Indicators (Polling-Based)

#### Problem
Users have no feedback that others are composing messages, leading to simultaneous replies and confusion.

#### Proposed Solution
Lightweight polling-based typing indicator system without WebSocket infrastructure.

#### Technical Design

**Backend (New Endpoint)**
```javascript
// In-memory store (or Redis for multi-instance)
const typingStatus = new Map(); // groupId -> Map(userId -> lastTypingTime)

// POST /api/groups/:id/typing
router.post('/:id/typing', authenticate, (req, res) => {
    const groupId = parseInt(req.params.id);
    if (!typingStatus.has(groupId)) {
        typingStatus.set(groupId, new Map());
    }
    typingStatus.get(groupId).set(req.userId, Date.now());
    
    // Cleanup expired entries (>5s old)
    const now = Date.now();
    for (const [uid, time] of typingStatus.get(groupId)) {
        if (now - time > 5000) typingStatus.get(groupId).delete(uid);
    }
    
    res.json({ success: true });
});

// GET /api/groups/:id/typing
router.get('/:id/typing', authenticate, async (req, res) => {
    const groupId = parseInt(req.params.id);
    const now = Date.now();
    const typing = [];
    
    if (typingStatus.has(groupId)) {
        for (const [uid, time] of typingStatus.get(groupId)) {
            if (now - time <= 5000 && uid !== req.userId) {
                const user = await prisma.users.findUnique({
                    where: { id: uid },
                    select: { first_name: true, last_name: true }
                });
                if (user) typing.push(user);
            }
        }
    }
    
    res.json({ typing });
});
```

**Frontend (GroupChat.jsx)**
```javascript
// State
const [typingUsers, setTypingUsers] = useState([]);
const typingTimerRef = useRef(null);

// Send typing signal on input change (debounced)
const handleInputChange = (e) => {
    setInput(e.target.value);
    
    clearTimeout(typingTimerRef.current);
    api.post(`/groups/${id}/typing`).catch(() => {});
    
    typingTimerRef.current = setTimeout(() => {
        // Stop typing after 3s of inactivity
    }, 3000);
};

// Poll typing status every 2.5s
useEffect(() => {
    const timer = setInterval(async () => {
        const { data } = await api.get(`/groups/${id}/typing`);
        setTypingUsers(data.typing);
    }, 2500);
    return () => clearInterval(timer);
}, [id]);

// Render indicator below header
{typingUsers.length > 0 && (
    <div className="px-5 py-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
        {typingUsers.map(u => `${u.first_name}`).join(', ')} 
        {typingUsers.length === 1 ? ' is' : ' are'} typing...
    </div>
)}
```

#### Pros
- No new dependencies (Socket.IO not required)
- Simple in-memory state (no database writes)
- Works with existing polling infrastructure
- Easy to scale with Redis adapter

#### Cons
- 2-3s delay before indicator appears/disappears
- Slightly increases server load (extra endpoint polled)
- Doesn't work if user loses connection mid-typing

#### Effort Estimate
- Backend: 1.5 hours (endpoint + cleanup logic)
- Frontend: 1 hour (debounced input, poll, render)
- Testing: 0.5 hours (multi-user typing scenarios)
- **Total: 3 hours**

---

### Feature 5: Unread Message Counts

#### Problem
Users can't tell which groups have new messages without opening each one.

#### Proposed Solution
Track per-user read status for each group, display unread badges on group cards.

#### Technical Design

**Database (New Model)**
```prisma
model group_read_status {
  user_id      Int
  group_id     Int
  last_read_at DateTime @default(now()) @db.Timestamp(6)
  users        users    @relation(fields: [user_id], references: [id], onDelete: Cascade)
  groups       groups   @relation(fields: [group_id], references: [id], onDelete: Cascade)

  @@id([user_id, group_id])
}
```

**Migration**
```bash
npx prisma migrate dev --name add_group_read_status
```

**Backend (Modified Endpoint)**
```javascript
// GET /api/groups (with unread counts)
router.get('/', async (req, res) => {
    let userId = null;
    // ... existing auth token parsing ...
    
    const groups = await prisma.groups.findMany({
        where: { is_active: true },
        include: {
            users: { select: { id: true, first_name: true, last_name: true } }
        },
        orderBy: { created_at: 'desc' }
    });
    
    if (userId) {
        // Get read statuses
        const readStatuses = await prisma.group_read_status.findMany({
            where: { user_id: userId }
        });
        const readMap = Object.fromEntries(
            readStatuses.map(r => [r.group_id, r.last_read_at])
        );
        
        // Count unread messages per group
        const enriched = await Promise.all(groups.map(async g => {
            const lastRead = readMap[g.group_id] || new Date(0);
            const unreadCount = await prisma.group_messages.count({
                where: {
                    group_id: g.id,
                    created_at: { gt: lastRead },
                    user_id: { not: userId } // Don't count own messages
                }
            });
            
            return {
                ...g,
                isMember: g.id in memberMap,
                memberRole: memberMap[g.id] ?? null,
                unreadCount
            };
        }));
        
        return res.json(enriched);
    }
    
    res.json(groups.map(g => ({ ...g, unreadCount: 0 })));
});

// Update read status when user views chat
router.post('/:id/read', authenticate, async (req, res) => {
    await prisma.group_read_status.upsert({
        where: {
            user_id_group_id: { user_id: req.userId, group_id: parseInt(req.params.id) }
        },
        create: {
            user_id: req.userId,
            group_id: parseInt(req.params.id),
            last_read_at: new Date()
        },
        update: {
            last_read_at: new Date()
        }
    });
    res.json({ success: true });
});
```

**Frontend (Groups.jsx & Dashboard.jsx)**
```javascript
// GroupCard component
<div className="relative">
    {/* Existing card content */}
    
    {group.unreadCount > 0 && (
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: '#ef4444', color: '#fff' }}>
            {group.unreadCount > 9 ? '9+' : group.unreadCount}
        </div>
    )}
</div>

// GroupChat.jsx (mark as read on mount + poll)
useEffect(() => {
    api.post(`/groups/${id}/read`).catch(() => {});
}, [id]);

useEffect(() => {
    const timer = setInterval(() => {
        api.post(`/groups/${id}/read`).catch(() => {});
    }, 10000); // Update every 10s while viewing
    return () => clearInterval(timer);
}, [id]);
```

#### Pros
- Persistent read tracking (survives refresh/logout)
- Accurate unread counts (ignores own messages)
- Scalable (indexed on user_id + group_id)

#### Cons
- Adds one table + migration
- Increases groups query complexity (one subquery per group)
- Potential N+1 query issue (fixed with Promise.all)

#### Performance Optimization
Option 1: Precompute unread counts in a materialized view
Option 2: Cache unread counts in Redis (invalidate on new message)
Option 3: Accept slight delay (<10s) for eventual consistency

#### Effort Estimate
- Schema + Migration: 0.5 hours
- Backend endpoints: 2 hours (GET groups modification, POST read)
- Frontend integration: 1.5 hours (badge UI, read tracking)
- Testing: 1 hour (unread logic, multi-group scenarios)
- **Total: 5 hours**

---

### Feature 6: In-Group Message Search

#### Problem
Users can't find old messages in long chat histories (currently limited to 100 loaded messages).

#### Proposed Solution
Add server-side search filter to messages endpoint, surfaced via collapsible search bar in header.

#### Technical Design

**Backend (Modified Endpoint)**
```javascript
// GET /api/groups/:id/messages?search=keyword
router.get('/:id/messages', authenticate, async (req, res) => {
    const groupId = parseInt(req.params.id);
    const { search } = req.query;
    
    // ... existing membership check ...
    
    const where = { group_id: groupId };
    if (search) {
        where.message = { contains: search, mode: 'insensitive' };
    }
    
    const messages = await prisma.group_messages.findMany({
        where,
        include: {
            users: { select: { id: true, first_name: true, last_name: true } },
            group_messages: { include: { users: { select: { first_name: true, last_name: true } } } }
        },
        orderBy: { created_at: 'desc' },
        take: 100
    });
    
    res.json(messages.reverse()); // Oldest first
});
```

**Frontend (GroupChat.jsx)**
```javascript
// State
const [searchOpen, setSearchOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState('');

// Search handler (debounced)
const handleSearch = useCallback(
    debounce(async (query) => {
        if (!query.trim()) return loadMessages();
        
        const { data } = await api.get(`/groups/${id}/messages?search=${query}`);
        setMessages(data);
        
        // Scroll to first result
        if (data.length > 0) {
            setTimeout(() => scrollToMessage(data[0].id), 100);
        }
    }, 500),
    [id]
);

// Header UI
<div className="flex items-center gap-3">
    {/* Existing back button + title */}
    
    <button onClick={() => setSearchOpen(!searchOpen)}>
        <Search size={16} />
    </button>
</div>

{searchOpen && (
    <div className="px-5 py-3 border-t">
        <input
            type="text"
            value={searchQuery}
            onChange={e => {
                setSearchQuery(e.target.value);
                handleSearch(e.target.value);
            }}
            placeholder="Search messages..."
            className="w-full px-4 py-2 rounded-full"
            autoFocus
        />
    </div>
)}
```

#### Pros
- Zero new endpoints (query param on existing route)
- Server-side filtering (efficient for large histories)
- Case-insensitive search (Prisma `mode: 'insensitive'`)

#### Cons
- Search limited to message text (doesn't search files/attachments)
- No fuzzy matching (exact substring only)
- Results still capped at 100 messages (Prisma take: 100)

#### Future Enhancements
- Full-text search with PostgreSQL GIN index
- Search file names/types
- Date range filters
- Search across all user's groups

#### Effort Estimate
- Backend: 0.5 hours (add query param support)
- Frontend: 2 hours (search UI, debounced input, result highlighting)
- Testing: 0.5 hours (empty results, special characters)
- **Total: 3 hours**

---

## TIER 3: Architectural Upgrade (Requires Sign-Off)

---

### Feature 7: Replace Polling with WebSockets (Socket.IO)

#### Current Architecture Pain Points
1. **6-second poll delay** — Messages feel sluggish, not conversational
2. **Unnecessary server load** — 100% of polls return no new data
3. **Typing indicators hack** — Polling every 2-3s just for typing status
4. **No presence detection** — Can't tell who's online/offline
5. **Poor scalability** — N users × M groups × 6s polling = lots of wasted requests

#### Proposed Architecture

**Tech Stack**
- **Socket.IO** (https://socket.io/) — WebSocket library with fallback to long-polling
- Why Socket.IO vs. raw WebSocket?
  - Automatic reconnection
  - Room/namespace support (perfect for group chat)
  - Built-in binary support (for future file streaming)
  - Authentication middleware support
  - Widely used with Express (30M npm downloads/week)

**Backend Changes**

1. **Install dependencies**
```bash
cd backend
npm install socket.io
```

2. **Server setup (src/index.js)**
```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: 'http://localhost:5173', credentials: true }
});

// Socket authentication middleware
io.use(async (socket, next) => {
    const token = socket.handshake.auth.token;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        socket.userId = decoded.userId;
        next();
    } catch (err) {
        next(new Error('Authentication failed'));
    }
});

// Socket event handlers
io.on('connection', (socket) => {
    console.log(`User ${socket.userId} connected`);
    
    // Join group rooms
    socket.on('group:join', async (groupId) => {
        // Verify membership
        const membership = await prisma.user_groups.findUnique({
            where: { user_id_group_id: { user_id: socket.userId, group_id: groupId } }
        });
        if (!membership) return socket.emit('error', { message: 'Not a member' });
        
        socket.join(`group:${groupId}`);
        socket.to(`group:${groupId}`).emit('user:joined', { userId: socket.userId });
    });
    
    // Send message (replaces POST endpoint)
    socket.on('message:send', async ({ groupId, message, replyTo }) => {
        const created = await prisma.group_messages.create({
            data: { group_id: groupId, user_id: socket.userId, message, reply_to: replyTo },
            include: { users: true, group_messages: true }
        });
        
        // Broadcast to all room members (including sender)
        io.to(`group:${groupId}`).emit('message:new', created);
    });
    
    // Typing indicators (replaces polling)
    socket.on('typing:start', ({ groupId }) => {
        socket.to(`group:${groupId}`).emit('typing:user', { 
            userId: socket.userId, 
            action: 'start' 
        });
    });
    
    socket.on('typing:stop', ({ groupId }) => {
        socket.to(`group:${groupId}`).emit('typing:user', { 
            userId: socket.userId, 
            action: 'stop' 
        });
    });
    
    socket.on('disconnect', () => {
        console.log(`User ${socket.userId} disconnected`);
    });
});

// Start server (replace app.listen with server.listen)
server.listen(5000, () => console.log('Server on :5000'));
```

3. **Keep REST endpoints for non-real-time operations**
- GET /groups/:id/messages (initial load)
- PATCH /groups/:id/messages/:messageId (edit)
- POST /groups/:id/messages (fallback if socket fails)

**Frontend Changes**

1. **Install dependencies**
```bash
cd frontend
npm install socket.io-client
```

2. **Socket context (src/context/SocketContext.jsx)**
```javascript
import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';

const SocketContext = createContext(null);

export function SocketProvider({ children }) {
    const [socket, setSocket] = useState(null);
    const { user, token } = useAuth();
    
    useEffect(() => {
        if (!token) return;
        
        const newSocket = io('http://localhost:5000', {
            auth: { token },
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionAttempts: 5
        });
        
        newSocket.on('connect', () => console.log('Socket connected'));
        newSocket.on('disconnect', () => console.log('Socket disconnected'));
        newSocket.on('error', (err) => console.error('Socket error:', err));
        
        setSocket(newSocket);
        
        return () => newSocket.close();
    }, [token]);
    
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}

export const useSocket = () => useContext(SocketContext);
```

3. **GroupChat.jsx refactor**
```javascript
import { useSocket } from '../context/SocketContext';

function GroupChat() {
    const socket = useSocket();
    
    // Join room on mount
    useEffect(() => {
        if (!socket) return;
        socket.emit('group:join', parseInt(id));
        
        return () => socket.emit('group:leave', parseInt(id));
    }, [socket, id]);
    
    // Listen for new messages (replaces polling)
    useEffect(() => {
        if (!socket) return;
        
        const handleNewMessage = (msg) => {
            setMessages(prev => [...prev, msg]);
        };
        
        socket.on('message:new', handleNewMessage);
        return () => socket.off('message:new', handleNewMessage);
    }, [socket]);
    
    // Send message via socket
    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        
        socket.emit('message:send', {
            groupId: parseInt(id),
            message: input.trim(),
            replyTo: replyTo?.id
        });
        
        setInput('');
        setReplyTo(null);
    };
    
    // Typing indicators (replaces polling)
    const handleInputChange = (e) => {
        setInput(e.target.value);
        socket.emit('typing:start', { groupId: parseInt(id) });
        
        clearTimeout(typingTimerRef.current);
        typingTimerRef.current = setTimeout(() => {
            socket.emit('typing:stop', { groupId: parseInt(id) });
        }, 3000);
    };
    
    // ... rest of component
}
```

#### Benefits Summary

| Feature | Before (Polling) | After (WebSocket) |
|---------|-----------------|-------------------|
| Message delivery | 6s delay | <100ms |
| Typing indicators | 2-3s delay | Real-time |
| Server load | ~600 req/min per user | ~0 req/min (persistent connection) |
| Presence detection | Not possible | Built-in |
| Scalability | O(n × m × 10) | O(n) connections |

#### Complexity Costs

**Development**
- Socket setup: 3-4 hours
- Event handlers: 2-3 hours
- Frontend refactor: 3-4 hours
- Testing: 2-3 hours
- **Total: 10-14 hours**

**Deployment**
- Load balancer considerations:
  - Need sticky sessions OR
  - Redis adapter for socket.io (for multi-instance)
- Connection limits:
  - Each user = 1 persistent connection
  - 1000 concurrent users = 1000 open sockets
  - Modern servers handle 10K+ easily (C10K problem solved)
- Monitoring:
  - Track socket connection/disconnection rates
  - Monitor memory usage (sockets + room subscriptions)
  - Alert on reconnection storms

**Maintenance**
- Handle socket version upgrades (breaking changes rare)
- Test reconnection logic (network drops, server restarts)
- Debug real-time race conditions (harder than REST)

#### Migration Strategy

**Phase 1: Parallel Run** (Week 1)
- Deploy WebSocket alongside polling
- Feature flag: `USE_WEBSOCKETS` (default: false)
- A/B test with 10% of users
- Monitor error rates, latency, UX feedback

**Phase 2: Ramp Up** (Week 2)
- Increase to 50% if no issues
- Fix any edge cases discovered
- Optimize reconnection logic

**Phase 3: Full Rollout** (Week 3)
- 100% on WebSockets
- Keep polling as fallback (if socket fails, auto-switch)
- Remove polling after 2 weeks of stable WebSocket

**Rollback Plan**
- Single config change: `USE_WEBSOCKETS=false`
- Zero code changes needed
- Instant revert to polling

#### Decision Framework

**Build WebSockets NOW if:**
- You plan to add reactions, read receipts, or live notifications
- User feedback complains about "slow chat"
- You're preparing for 100+ concurrent chat users
- You have time to test thoroughly before launch

**Wait on WebSockets if:**
- Chat is working fine for current user base
- Other features have higher priority
- You're not ready to handle deployment complexity
- Budget/timeline is tight

#### Recommendation
**Wait until post-launch user feedback confirms need.** Current polling system works for MVP. WebSockets are a quality-of-life upgrade, not a blocker. Revisit after you have real usage metrics (messages/hour, concurrent users, complaints about latency).

---

### Feature 8: Push Notifications (Depends on Feature 7)

#### Overview
Web Push API + Service Worker = notifications when user is not viewing the app.

#### Prerequisites
- WebSockets implemented (Feature 7) — needed for real-time event triggering
- PWA service worker already in place (from earlier work)
- HTTPS in production (Web Push API requirement)

#### Technical Design

**Backend (Push Subscription Management)**
```javascript
// Store push subscriptions in database
model push_subscriptions {
  id           Int      @id @default(autoincrement())
  user_id      Int
  endpoint     String   @unique
  p256dh_key   String
  auth_key     String
  created_at   DateTime @default(now())
  users        users    @relation(fields: [user_id], references: [id], onDelete: Cascade)
}

// POST /api/push/subscribe
router.post('/subscribe', authenticate, async (req, res) => {
    const { endpoint, keys } = req.body;
    
    await prisma.push_subscriptions.upsert({
        where: { endpoint },
        create: {
            user_id: req.userId,
            endpoint,
            p256dh_key: keys.p256dh,
            auth_key: keys.auth
        },
        update: {
            p256dh_key: keys.p256dh,
            auth_key: keys.auth
        }
    });
    
    res.json({ success: true });
});

// Trigger push on new message (in socket handler)
socket.on('message:send', async ({ groupId, message }) => {
    // ... save message to DB ...
    
    // Get all group members except sender
    const members = await prisma.user_groups.findMany({
        where: { group_id: groupId, user_id: { not: socket.userId } },
        include: { users: true }
    });
    
    // Send push notifications
    for (const member of members) {
        const subscriptions = await prisma.push_subscriptions.findMany({
            where: { user_id: member.user_id }
        });
        
        for (const sub of subscriptions) {
            await webpush.sendNotification({
                endpoint: sub.endpoint,
                keys: {
                    p256dh: sub.p256dh_key,
                    auth: sub.auth_key
                }
            }, JSON.stringify({
                title: `${group.name}`,
                body: `${socket.user.first_name}: ${message}`,
                icon: '/icon-192.png',
                badge: '/badge-72.png',
                data: { url: `/groups/${groupId}` }
            }));
        }
    }
});
```

**Frontend (Service Worker + Permission Request)**
```javascript
// Request permission on login
const requestNotificationPermission = async () => {
    if (!('Notification' in window)) return;
    if (Notification.permission === 'granted') return subscribeUser();
    
    const permission = await Notification.requestPermission();
    if (permission === 'granted') subscribeUser();
};

const subscribeUser = async () => {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'YOUR_VAPID_PUBLIC_KEY'
    });
    
    await api.post('/push/subscribe', subscription.toJSON());
};

// In service worker (sw.js)
self.addEventListener('push', (event) => {
    const data = event.data.json();
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: data.icon,
            badge: data.badge,
            data: data.data
        })
    );
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
```

#### Complexity
- Requires VAPID keys (one-time generation)
- Need user permission (can be denied)
- Different behavior on iOS (limited support)
- Push quotas (varies by browser)

#### Effort Estimate
- Backend: 3-4 hours (subscription management, web-push integration)
- Frontend: 2-3 hours (permission UI, service worker handlers)
- Testing: 2 hours (cross-browser, permission states)
- **Total: 7-9 hours**

#### Recommendation
**Only implement if WebSockets are live.** Push notifications feel broken without real-time message delivery — users will get notifications for messages that don't appear in the UI until next poll.

---

## Summary Decision Matrix

| Feature | Tier | Effort | Value | Dependencies | Recommend Now? |
|---------|------|--------|-------|--------------|----------------|
| Typing Indicators | 2 | 3h | Medium | None | ✅ Yes |
| Unread Counts | 2 | 5h | High | DB migration | ✅ Yes |
| Message Search | 2 | 3h | Medium | None | ✅ Yes |
| WebSockets | 3 | 10-14h | Very High | Deployment planning | ⚠️ Wait for feedback |
| Push Notifications | 3 | 7-9h | High | WebSockets, HTTPS | ❌ No (blocked by WS) |

**Suggested Priority Order:**
1. **Unread Counts** (5h) — Highest user value, clear visual feedback
2. **Typing Indicators** (3h) — Low effort, nice polish
3. **Message Search** (3h) — Useful for power users
4. **WebSockets** (10-14h) — After launch, if metrics show need
5. **Push Notifications** (7-9h) — After WebSockets stabilize

**Total Tier 2 Effort: 11 hours** (can be done in 2-3 days)

Ready to build any of these — confirm priority and I'll start implementation.
