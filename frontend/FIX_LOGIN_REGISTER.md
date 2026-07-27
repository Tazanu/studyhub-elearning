# FIX: Unable to Login or Register

## Problem
The backend server is not running. Login and register forms call `http://localhost:5000/api/auth/*` but get no response.

## Solution

### 1. Start the Backend Server

**Open a NEW terminal window** (keep it separate from frontend):

```bash
cd c:\Users\donal\studyhub-v2\backend
npm run dev
```

**Expected output:**
```
Server running on port 5000
Database connected successfully
```

### 2. Start the Frontend (in a different terminal)

```bash
cd c:\Users\donal\studyhub-v2\frontend
npm run dev
```

**Expected output:**
```
VITE v8.0.16  ready in XXX ms
Local:   http://localhost:5173/
```

### 3. Test Login/Register

- Open http://localhost:5173
- Try to register a new account
- Should work now!

---

## Running Both Servers Simultaneously

You need **TWO terminal windows**:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Keep this running
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Keep this running
```

---

## Troubleshooting

### Backend won't start?

**Check if database is configured:**
```bash
cd backend
cat .env
```

Should see:
```
DATABASE_URL="postgresql://..."
JWT_SECRET="..."
PORT=5000
```

**If database not configured, check backend/.env and run:**
```bash
cd backend
npx prisma migrate dev
npx prisma generate
npm run dev
```

### Still getting errors?

**Check backend console for errors:**
- Database connection issues?
- Port 5000 already in use?
- Missing environment variables?

**Check browser console (F12):**
- Network tab should show requests to `http://localhost:5000/api/auth/login`
- If status is "failed" or "ERR_CONNECTION_REFUSED", backend is not running

---

## Quick Test Command

**Test if backend is running:**
```bash
curl http://localhost:5000/api/health
```

If backend is running, you'll get a response. If not, you'll get "connection refused".

---

**Status:** Backend server needs to be started before login/register will work!
