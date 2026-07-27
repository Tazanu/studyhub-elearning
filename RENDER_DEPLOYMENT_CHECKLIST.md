# Render Deployment Checklist (WebSocket Edition)

## 🎯 Objective
Deploy StudyHub with WebSocket support to Render.com (backend) with zero configuration changes needed for Socket.IO.

---

## ✅ Pre-Deployment Validation

Before deploying to Render, ensure Phase 1 is validated locally:
- [ ] Backend starts with "🔌 WebSocket server enabled" message
- [ ] `/socket-test` page shows "Connected" status
- [ ] Two-window test succeeds (instant message delivery)
- [ ] No CORS errors in browser console
- [ ] No authentication errors in backend logs

---

## 🔧 Backend Deployment (Render Web Service)

### 1. Create Web Service
1. Go to Render Dashboard → "New +" → "Web Service"
2. Connect your GitHub repo: `studyhub-v2`
3. Configure:
   - **Name**: `studyhub-backend` (or your choice)
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npx prisma generate`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for production)

### 2. Environment Variables
Add these in Render dashboard (Environment tab):

```bash
PORT=5000                                    # Render auto-assigns, but keep for clarity
DATABASE_URL=postgresql://user:pass@host/db  # From Render Postgres or external
JWT_SECRET=your-production-secret-key        # CHANGE THIS IN PRODUCTION
FRONTEND_URL=https://your-frontend.onrender.com  # Update after frontend deployed
MESOMB_APPLICATION_KEY=<your-key>
MESOMB_ACCESS_KEY=<your-key>
MESOMB_SECRET_KEY=<your-key>
```

**🔴 CRITICAL**: Update `FRONTEND_URL` to match your actual frontend URL (Vercel/Netlify/Render)

### 3. WebSocket Configuration
**Good news**: Render supports WebSocket out-of-the-box, no config needed!
- HTTP/1.1 upgrade automatically handled
- Socket.IO works natively
- No load balancer sticky session config required (Render handles it)

### 4. Health Check (Optional)
- **Path**: `/health`
- **Expected Status**: `200`
- **Response**: `{"status":"ok","timestamp":"..."}`

---

## 🌐 Frontend Deployment (Options)

### Option A: Vercel (Static)
**⚠️ Note**: Vercel doesn't support WebSocket on serverless functions, so backend MUST be on Render.

1. Deploy frontend to Vercel:
   ```bash
   cd frontend
   vercel
   ```

2. Add environment variable in Vercel dashboard:
   ```bash
   VITE_API_URL=https://studyhub-backend.onrender.com/api
   VITE_SOCKET_URL=https://studyhub-backend.onrender.com
   ```

3. Update `frontend/src/api/client.js`:
   ```javascript
   const api = axios.create({
       baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
   });
   ```

4. Update `frontend/src/pages/SocketTest.jsx` (line 49):
   ```javascript
   const socketInstance = io(
       import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000',
       { auth: { token }, transports: ['websocket', 'polling'] }
   );
   ```

### Option B: Render Static Site
1. Create Static Site in Render dashboard
2. **Build Command**: `npm install && npm run build`
3. **Publish Directory**: `dist`
4. Add environment variables (same as Vercel)

### Option C: Netlify (Static)
Same process as Vercel, use Netlify UI for env vars.

---

## 🔄 CORS Configuration

Once both are deployed, verify CORS is working:

1. **Backend `.env` on Render**:
   ```bash
   FRONTEND_URL=https://studyhub.vercel.app  # Your actual frontend URL
   ```

2. **Test**: Open browser console on frontend, check for CORS errors
3. **If errors**: Update `FRONTEND_URL` in Render dashboard, redeploy

---

## 🧪 Post-Deployment Validation

### 1. Backend Health Check
```bash
curl https://studyhub-backend.onrender.com/health
# Expected: {"status":"ok","timestamp":"2025-01-XX..."}
```

### 2. WebSocket Connection Test
1. Go to `https://your-frontend.com/socket-test`
2. Should see "Status: ✅ Connected"
3. Check browser console: `✅ Socket connected: <socket-id>`

### 3. Two-Window Test (Production)
1. Open two incognito windows
2. Log in as different users
3. Both join same group
4. Send message in one window
5. Should appear instantly in other window (<1s)

**Success = Real-time chat works in production**

---

## 🐛 Common Deployment Issues

### Issue: "WebSocket connection failed" in production
**Cause**: CORS misconfiguration  
**Fix**: Double-check `FRONTEND_URL` in Render backend env vars matches actual frontend URL (include https://)

### Issue: Socket connects but disconnects immediately
**Cause**: JWT token invalid/expired  
**Fix**: Log out and log back in on production frontend

### Issue: Messages appear but with 5-10s delay (falling back to polling)
**Cause**: WebSocket handshake failing, using long-polling fallback  
**Fix**: Check Render logs for errors, verify no proxy/firewall blocking WS upgrade

### Issue: "Failed to load resource: net::ERR_CERT_COMMON_NAME_INVALID"
**Cause**: Mixed content (https frontend → http backend)  
**Fix**: Ensure backend URL uses `https://` in frontend env vars

---

## 📊 Performance Expectations (Production)

### WebSocket Connection
- **Initial handshake**: ~200ms (first load)
- **Message delivery**: <100ms (once connected)
- **Typing indicators**: <50ms (real-time)
- **Reconnection**: Automatic (Socket.IO handles it)

### Fallback Behavior
- If WebSocket fails → Auto-falls back to HTTP long-polling
- Long-polling: ~500ms delivery (still better than 6s polling)
- User sees no difference (transparent fallback)

---

## 🔐 Security Checklist (Production)

Before going live:
- [ ] Change `JWT_SECRET` to a strong random value (not the dev one)
- [ ] Ensure `DATABASE_URL` uses SSL (`?sslmode=require` for Postgres)
- [ ] Verify CORS only allows your actual frontend domain (not `*`)
- [ ] Test logout/login flow on production (token refresh works)
- [ ] Check Render logs for any authentication errors
- [ ] Rate-limit socket connections if needed (future: add rate limiter)

---

## 📈 Monitoring (Optional)

### Render Built-in Metrics
- CPU usage: Should stay <50% for free tier
- Memory: Socket.IO uses ~1KB per connection
- Logs: Check for connection/disconnection patterns

### Custom Logging
Add to `backend/src/socket.js` for production debugging:
```javascript
io.engine.on("connection_error", (err) => {
  console.error("Socket connection error:", err);
});
```

---

## 🎉 Deployment Complete Checklist

- [ ] Backend deployed to Render with WebSocket enabled
- [ ] Frontend deployed (Vercel/Netlify/Render)
- [ ] Environment variables configured correctly
- [ ] `/health` endpoint returns 200
- [ ] `/socket-test` shows "Connected" in production
- [ ] Two-window test succeeds in production
- [ ] Real GroupChat messages deliver instantly
- [ ] No CORS errors in browser console
- [ ] JWT authentication works in production
- [ ] Logs show clean connections (no repeated errors)

---

## 🆘 Rollback (If Production Breaks)

### Quick Rollback
1. Render dashboard → Service → "Manual Deploy"
2. Select previous working commit
3. Deploy → System reverts to old polling-only version

### Environment Variable Rollback
If socket causes issues but REST works:
1. Keep backend deployed as-is
2. Frontend: Remove socket.io-client listeners (they'll fail silently)
3. Old polling continues to work (no user-facing breakage)

---

## 📞 Support Checklist

If deployment fails, provide these details:
- [ ] Render backend logs (last 50 lines)
- [ ] Browser console errors (screenshot)
- [ ] Network tab showing WebSocket upgrade request
- [ ] Environment variables (sanitized, no secrets)
- [ ] Output of `curl https://backend.com/health`

---

**Deployment Readiness**: Wait for Phase 1 local validation before deploying!  
**Estimated Deployment Time**: 30 minutes (if env vars correct)  
**Risk Level**: Low (backend is backward compatible, can rollback in <5 min)
