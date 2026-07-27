# GroupChat Tier 1 — Quick Reference Checklist

## ✅ Implementation Complete

**Date Completed**: Today
**Features Implemented**: 3 of 3 (File Sharing, Reply Threading, Edit Messages)
**Build Status**: ✅ Passing
**Documentation**: ✅ Complete (5 docs created)

---

## Files Modified Summary

```
✅ Backend (2 files)
   └─ src/routes/groups.js          (+70 lines)  Enhanced POST, GET, added PATCH
   
✅ Frontend (2 files)
   ├─ src/pages/GroupChat.jsx       (+300 lines) All three features
   └─ src/index.css                 (+10 lines)  Highlight animation

✅ Documentation (5 files)
   ├─ CHAT_TIER1_COMPLETE.md                     Full implementation details
   ├─ CHAT_UI_REFERENCE.md                       Visual UI guide
   ├─ CHAT_TIER2_TIER3_PROPOSALS.md              Next features specs
   ├─ CHAT_TESTING_GUIDE.md                      Test plan
   ├─ CHAT_EXECUTIVE_SUMMARY.md                  High-level overview
   └─ CHAT_ARCHITECTURE_DIAGRAM.md               System diagrams
```

---

## Pre-Testing Checklist

Before running tests, verify:

- [ ] Backend server running (`npm run dev` in backend/)
- [ ] Frontend dev server running (`npm run dev` in frontend/)
- [ ] `backend/uploads/` directory exists and is writable
- [ ] Database schema includes: `file_url`, `file_type`, `reply_to`, `is_edited` columns
- [ ] Two test users created and logged in (use different browsers)
- [ ] Both users are members of at least one common group

---

## Testing Priority Order

### 🔴 Critical Tests (Must Pass)
- [ ] 1A: Upload Image → renders as thumbnail
- [ ] 1C: Upload PDF → renders as download chip
- [ ] 2A: Reply to Message → shows quoted preview
- [ ] 2C: Click quoted preview → scrolls to original
- [ ] 3A: Edit Own Message → shows (edited) label
- [ ] 3C: Edit button disappears after 15min
- [ ] 4C: Send File + Text + Reply (combined feature)

### 🟡 Important Tests (Should Pass)
- [ ] 1B: Click thumbnail → full-size modal opens
- [ ] 1D: File appears correctly for other users
- [ ] 2B: Cancel reply → preview bar disappears
- [ ] 3B: Cancel edit → original text restored
- [ ] 3E: Edit keyboard shortcuts (Enter/Escape)
- [ ] 5A: Light theme → all elements visible
- [ ] 6A: Offline → attach button disabled

### 🟢 Nice-to-Have Tests (Can Defer)
- [ ] 1E: File-only message (no text)
- [ ] 4A: Reply to edited message
- [ ] 4B: Edit a reply message
- [ ] 5B: Keyboard navigation (Tab/Enter)
- [ ] 6B: Server error during edit
- [ ] 7A: Multiple files in chat (performance)

**Total Tests**: 25 scenarios
**Time Estimate**: 30-45 minutes for full test suite

---

## Bug Triage Guide

If you find bugs during testing, categorize by severity:

### 🔴 Critical (Blocks Release)
- App crashes or becomes unresponsive
- Data loss (messages disappear, edits corrupt data)
- Security issues (can edit others' messages, bypass auth)
- File uploads completely broken

### 🟡 High (Should Fix Before Release)
- Features don't work as designed (reply doesn't scroll, edit fails silently)
- UI broken in one theme (invisible buttons, unreadable text)
- Files don't display correctly (broken images, download fails)
- Performance issues (lag, memory leaks)

### 🟢 Medium (Can Fix Post-Launch)
- Minor UI inconsistencies (alignment, spacing)
- Missing hover states
- Non-critical keyboard shortcuts
- Edge cases (reply to deleted message)

### 🔵 Low (Enhancement / Future)
- Missing features from Tier 2/3 (typing indicators, search)
- Feature requests (nested replies, emoji reactions)
- Performance optimizations (image compression)
- Advanced accessibility (screen reader improvements)

---

## Quick Smoke Test (5 Minutes)

If you only have 5 minutes, test these essentials:

```bash
1. Backend running?
   → curl http://localhost:5000/health
   → Should return: {"status":"ok", ...}

2. File upload works?
   → Click paperclip → select image → send
   → Should show thumbnail in chat

3. Reply works?
   → Click reply on message → type → send
   → Should show quoted preview

4. Edit works?
   → Click edit on own message → change text → Enter
   → Should show "(edited)" label

5. Build passes?
   → npm run build (in frontend/)
   → Should complete without errors
```

If all 5 pass → likely ready for full testing.

---

## Deployment Pre-Flight Checklist

Before deploying to production/staging:

### Environment
- [ ] Update API URLs from `localhost:5000` to production domain
  - [ ] GroupChat.jsx: Image URLs (`http://localhost:5000${msg.file_url}`)
  - [ ] API client base URL (likely in `src/api/client.js`)
- [ ] Set up CORS for production frontend domain
- [ ] Configure uploads directory permissions (writable by server process)
- [ ] Decide on file storage strategy (local disk vs. S3/CDN)

### Database
- [ ] Verify schema on production database matches dev
- [ ] Confirm `file_url`, `file_type`, `reply_to`, `is_edited` columns exist
- [ ] No migration needed (columns already in schema)

### Server Configuration
- [ ] Static file serving enabled: `app.use('/uploads', express.static('uploads'))`
- [ ] Multer file size limit set: 20MB
- [ ] File type validation (recommend adding MIME type check)
- [ ] Rate limiting on file uploads (recommend: 10 files/minute per user)
- [ ] Disk space monitoring (prevent uploads from filling disk)

### Client Build
- [ ] Run `npm run build` → should complete successfully
- [ ] PWA service worker generates (12 precached entries expected)
- [ ] Test production build locally: `npm run preview`
- [ ] Verify file uploads work in production build

### Monitoring
- [ ] Set up alerts for:
  - [ ] Disk usage (uploads directory)
  - [ ] Failed file uploads (500 errors)
  - [ ] Edit endpoint 403s (users hitting 15min window?)
  - [ ] Large file uploads (>10MB, may need compression)

---

## Rollback Plan

If critical bugs discovered post-deployment:

### Immediate Rollback (< 5 minutes)
```bash
# Option 1: Revert to previous Git commit
git revert HEAD
git push origin main

# Option 2: Deploy previous release tag
git checkout v1.0.0
npm run build
# Deploy build artifacts
```

### Feature Flag Rollback (no code deploy)
If you added feature flags (recommended):
```javascript
// In GroupChat.jsx
const ENABLE_FILE_SHARING = false;  // Set to false
const ENABLE_REPLIES = false;
const ENABLE_EDITS = false;
```

### Partial Rollback (keep some features)
```javascript
// Keep file sharing, disable edits
const ENABLE_EDITS = false;  // Only disable problematic feature
```

### Database Rollback
- No schema changes made → no database rollback needed
- Existing messages with `file_url`/`reply_to`/`is_edited` will still work
- Old code will just ignore those fields

---

## Post-Deployment Validation

After deploying, verify in production:

- [ ] Health check passes: `curl https://your-domain.com/health`
- [ ] Can log in as test user
- [ ] Can access group chat
- [ ] File upload button visible
- [ ] Can send text message (baseline functionality)
- [ ] Can upload small image (<1MB)
- [ ] Image displays as thumbnail
- [ ] Can reply to a message
- [ ] Can edit own message within 15min
- [ ] Check browser console for errors
- [ ] Check server logs for errors

**Time Estimate**: 10 minutes

---

## Metrics to Track Post-Launch

Set up analytics/logging for:

### Usage Metrics
```javascript
// What to track:
- Total messages sent (baseline)
- Messages with file attachments (% of total)
- Messages that are replies (% of total)
- Messages edited (% of total, avg time before edit)
- File types uploaded (images vs. docs, distribution)
- File sizes (avg, median, 95th percentile)
```

### Performance Metrics
```javascript
// What to monitor:
- File upload duration (avg, p95, p99)
- Message send latency (with/without files)
- Edit message latency
- Scroll-to-message animation smoothness (FPS)
- Memory usage (check for leaks over time)
- Disk usage growth rate (uploads directory)
```

### Error Metrics
```javascript
// What to alert on:
- File upload failures (count, error codes)
- Edit 403s (users hitting 15min window)
- Edit 403s (ownership violations - potential security issue!)
- PATCH endpoint 500s (server errors during edit)
- Missing file 404s (uploads not found)
```

### User Feedback
```javascript
// Questions to ask:
- "Did you find the file sharing feature useful?"
- "Would you like longer than 15min to edit messages?"
- "Did you use the reply feature?"
- "Any features missing from chat?"
```

---

## Success Criteria

Mark Tier 1 as **SUCCESSFUL** if:

✅ All 7 critical tests pass
✅ No critical or high severity bugs
✅ Build passes in production
✅ Performance acceptable (<3s for 1MB upload)
✅ No security issues found
✅ Works in both light and dark themes
✅ Accessible via keyboard navigation

Mark Tier 1 as **NEEDS WORK** if:

❌ Any critical test fails
❌ Critical or high severity bug found
❌ Build fails or crashes
❌ Performance unacceptable (>10s uploads, UI lag)
❌ Security vulnerability discovered
❌ Broken UI in one theme
❌ Keyboard navigation completely broken

---

## Next Steps After Tier 1

### Immediate (This Week)
1. ✅ Complete testing (this checklist)
2. 🔲 Fix any critical/high bugs found
3. 🔲 Deploy to staging environment
4. 🔲 Get 2-3 users to test on staging
5. 🔲 Gather initial feedback

### Short-Term (Next Week)
1. 🔲 Monitor metrics (usage, performance, errors)
2. 🔲 Fix any medium severity bugs
3. 🔲 Deploy to production
4. 🔲 Announce new features to users
5. 🔲 Decide on Tier 2 priority order

### Medium-Term (Next 2-4 Weeks)
1. 🔲 Analyze usage data (are features being used?)
2. 🔲 Build Tier 2 features based on feedback:
   - Unread message counts (5h) — highest value
   - Typing indicators (3h) — polish
   - Message search (3h) — power users
3. 🔲 Assess need for Tier 3 (WebSockets) based on:
   - User complaints about "slow chat"
   - Concurrent user count metrics
   - Business priority

---

## Contact / Support

If you need help during testing/deployment:

**Documentation References**:
- Implementation details → `CHAT_TIER1_COMPLETE.md`
- UI guide → `CHAT_UI_REFERENCE.md`
- Test plan → `CHAT_TESTING_GUIDE.md`
- Architecture → `CHAT_ARCHITECTURE_DIAGRAM.md`
- Next features → `CHAT_TIER2_TIER3_PROPOSALS.md`

**Common Issues**:
- "Uploads directory not found" → Run `mkdir -p backend/uploads`
- "File upload returns 500" → Check uploads directory permissions
- "Image 404 on other user" → Verify static file serving configured
- "Edit button not showing" → Check message age (must be <15min)
- "Reply doesn't scroll" → Check messageRefs populated (React DevTools)

---

## Final Checklist Before Declaring Complete

- [ ] All critical tests pass ✅
- [ ] Documentation reviewed and accurate
- [ ] Code committed to Git with clear commit message
- [ ] Team/stakeholders notified of new features
- [ ] Deployment plan reviewed and approved
- [ ] Rollback plan tested (can actually revert if needed)
- [ ] Monitoring/alerts configured
- [ ] User announcement prepared (changelog, help docs)

**Estimated Total Time**: 
- Testing: 45 minutes
- Bug fixes: 0-2 hours (depends on findings)
- Deployment: 30 minutes
- Validation: 10 minutes
- **Total: 2-3 hours**

Once this checklist is complete → Tier 1 is DONE ✅

Ready to move to Tier 2 upon your approval 🚀
