# GroupChat Tier 1 Features — Testing Guide

## Prerequisites
- Backend server running on `http://localhost:5000`
- Frontend dev server running on `http://localhost:5173`
- Two users logged in (different browsers/incognito windows)
- Both users are members of the same group

---

## Test 1: File Sharing

### 1A: Upload Image
1. Click the **paperclip icon** (left of text input)
2. Select an image file (jpg/png)
3. Verify file preview bar appears with filename
4. (Optional) Type a message like "Check this out!"
5. Click **Send**
6. **Expected**: Message appears with thumbnail image below text
7. **Expected**: Image loads from `http://localhost:5000/uploads/[filename]`

### 1B: View Full-Size Image
1. Click the thumbnail image in a message
2. **Expected**: Full-screen modal opens with large image
3. **Expected**: Black overlay background (85% opacity)
4. **Expected**: Close button (X) in top-right corner
5. Click overlay or close button
6. **Expected**: Modal closes

### 1C: Upload Non-Image File
1. Click paperclip → select PDF or .txt file
2. Add message text (optional)
3. Send message
4. **Expected**: Download chip appears instead of thumbnail
5. **Expected**: Chip shows file icon + "Download [TYPE] file" text
6. Click the chip
7. **Expected**: Browser downloads the file

### 1D: File in Other User's Message
1. In **second browser**, view the same group
2. **Expected**: File message appears on left side (gray bubble)
3. **Expected**: Image thumbnails display correctly
4. **Expected**: Download chips work

### 1E: File-Only Message
1. Click paperclip → select file
2. **DO NOT** type any message text
3. Click Send
4. **Expected**: Message sends successfully with only file attachment
5. **Expected**: Message bubble shows file with no text content

---

## Test 2: Reply Threading

### 2A: Reply to Message
1. Hover over any message (yours or someone else's)
2. Click the **Reply button** (↩ icon, 12px)
3. **Expected**: Reply preview bar appears above input
4. **Expected**: Preview shows "Replying to [FirstName]"
5. **Expected**: Preview shows truncated message text
6. Type a reply like "Thanks!"
7. Click Send
8. **Expected**: New message shows quoted preview at top
9. **Expected**: Quote preview has blue left border
10. **Expected**: Quote shows original author name

### 2B: Cancel Reply
1. Click Reply on a message → preview bar appears
2. Click the **X button** in preview bar
3. **Expected**: Preview bar disappears
4. **Expected**: Input is still empty/unchanged

### 2C: Scroll to Original Message
1. Find a message with a quoted reply preview
2. Click the **quoted preview** (the gray box above the message)
3. **Expected**: Page scrolls to original message
4. **Expected**: Original message gets highlighted (blue glow animation)
5. **Expected**: Highlight fades out after 1.5 seconds

### 2D: Reply to File Message
1. Reply to a message that contains a file attachment
2. **Expected**: Quote preview shows "(file)" if no text
3. **Expected**: Reply sends successfully
4. **Expected**: Quoted preview displays correctly

---

## Test 3: Edit Messages

### 3A: Edit Own Message (Within 15min)
1. Send a message: "This is a test messge" (typo intentional)
2. **Expected**: Edit button (✏ icon, 12px) appears next to timestamp
3. Click the **Edit button**
4. **Expected**: Message text becomes an inline input field
5. **Expected**: Check (✓) and X buttons appear next to input
6. Fix the typo: "This is a test message"
7. Press **Enter** (or click ✓)
8. **Expected**: Message updates immediately
9. **Expected**: "(edited)" label appears next to timestamp
10. **Expected**: Toast notification: "Message edited"

### 3B: Cancel Edit
1. Click Edit on a message
2. Start typing changes
3. Press **Escape** (or click X button)
4. **Expected**: Input disappears, original text restored
5. **Expected**: No changes saved

### 3C: Edit Button Disappears After 15min
1. Send a test message
2. **Expected**: Edit button visible
3. Wait 16 minutes (or temporarily modify `canEdit()` to test)
4. **Expected**: Edit button disappears
5. (Manual backend test): Try calling PATCH endpoint
6. **Expected**: Server returns 403 error "Edit window expired"

### 3D: Cannot Edit Others' Messages
1. In **second browser**, view the group
2. Find a message sent by the first user
3. **Expected**: NO edit button visible (only Reply button)

### 3E: Edit Keyboard Shortcuts
1. Click Edit on a message
2. Type new text
3. Press **Enter** → saves
4. Click Edit again
5. Type new text
6. Press **Escape** → cancels
7. **Expected**: Both keyboard shortcuts work

---

## Test 4: Combined Features

### 4A: Reply to Edited Message
1. User A sends: "Hello"
2. User A edits to: "Hello everyone"
3. User B replies to the edited message
4. **Expected**: Reply quote shows "Hello everyone" (edited version)
5. **Expected**: "(edited)" label visible on original message

### 4B: Edit a Reply Message
1. User A sends: "Original message"
2. User B replies: "Thanks!"
3. User B edits reply to: "Thanks a lot!"
4. **Expected**: Edit saves successfully
5. **Expected**: Reply preview still points to original message
6. **Expected**: "(edited)" label appears

### 4C: Send File + Text + Reply
1. Reply to an existing message
2. Type: "Here's the document you asked for"
3. Attach a PDF file
4. **Expected**: Both reply preview and file preview visible
5. Send message
6. **Expected**: Message shows quoted preview + text + file download chip

---

## Test 5: Theme & Accessibility

### 5A: Light Theme
1. Switch to **light theme** (if implemented)
2. **Expected**: All buttons/icons remain visible
3. **Expected**: File chips readable (not too light)
4. **Expected**: Reply quote borders visible
5. **Expected**: Edit input border visible

### 5B: Keyboard Navigation
1. Tab through UI elements
2. **Expected**: Can reach Reply/Edit buttons via keyboard
3. **Expected**: Focus states visible (outline or background change)
4. Press **Space** or **Enter** on focused button
5. **Expected**: Button activates

### 5C: Screen Reader (Optional)
1. Enable screen reader (NVDA/JAWS/VoiceOver)
2. Navigate to messages
3. **Expected**: All buttons have proper aria-labels
4. **Expected**: File attachments announced correctly

---

## Test 6: Error Handling

### 6A: Offline File Upload
1. Disconnect internet (or set DevTools to offline)
2. Try to attach a file
3. **Expected**: Attach button disabled OR
4. **Expected**: Error toast if file selected while offline

### 6B: Server Error During Edit
1. Stop backend server
2. Try to edit a message
3. **Expected**: Toast error: "Failed to edit message"
4. **Expected**: Message reverts to original (no corruption)

### 6C: Large File Upload
1. Select a file larger than 20MB
2. **Expected**: Client-side validation rejects it OR
3. **Expected**: Server returns 413 Payload Too Large

### 6D: Edit Race Condition
1. Open same group in two tabs
2. In Tab 1: Click Edit on a message
3. In Tab 2: Click Edit on the SAME message
4. Both tabs: Save different edits
5. **Expected**: Last save wins (no data corruption)
6. **Expected**: Both tabs update after refresh

---

## Test 7: Performance

### 7A: Multiple Files in Chat
1. Send 10 messages with image attachments
2. **Expected**: Thumbnails load without lag
3. **Expected**: Scroll remains smooth

### 7B: Long Reply Chains
1. Create 5+ nested replies (reply to reply to reply...)
2. **Expected**: Scroll-to-original works for all depths
3. **Expected**: Highlight animation doesn't lag

### 7C: Rapid Edits
1. Send a message
2. Edit it 5 times rapidly (within 15min)
3. **Expected**: All edits save successfully
4. **Expected**: "(edited)" label appears only once
5. **Expected**: No duplicate messages

---

## Visual Regression Checklist

| Element | Light Theme | Dark Theme | Mobile | Notes |
|---------|------------|------------|--------|-------|
| File preview bar | ✅ | ✅ | ✅ | Dismissible X visible |
| Reply preview bar | ✅ | ✅ | ✅ | Blue accent readable |
| Image thumbnail | ✅ | ✅ | ✅ | Rounded corners |
| Download chip | ✅ | ✅ | ✅ | Icon + text aligned |
| Quote preview in bubble | ✅ | ✅ | ✅ | Border-left visible |
| Edit input inline | ✅ | ✅ | ✅ | Border-bottom visible |
| (edited) label | ✅ | ✅ | ✅ | Text-secondary color |
| Full-size image modal | ✅ | ✅ | ✅ | Black overlay, X button |
| Reply/Edit buttons | ✅ | ✅ | ✅ | Hover changes to blue |

---

## Known Limitations (Document, Don't Fix)

1. **Reply Threading Depth**: Only single-level replies (no nested replies)
   - Workaround: Click original message to see full context

2. **Image Optimization**: Thumbnails load full-resolution images
   - Impact: Slower on poor connections
   - Future: Add thumbnail generation backend

3. **File Preview**: No preview for PDF/doc files (download only)
   - Workaround: Users must download to view
   - Future: Add in-browser PDF viewer

4. **Edit History**: No edit history tracking (only shows "edited" label)
   - Workaround: None (design decision)
   - Future: Add "View edit history" modal

5. **Search**: Not implemented yet (Tier 2 feature)
   - Workaround: Browser Ctrl+F (limited to loaded messages)

6. **Notifications**: No push notifications yet (Tier 3 feature)
   - Workaround: Users must check manually or keep tab open

---

## Bug Report Template

If you find issues during testing, use this format:

```
**Feature**: [File Sharing / Reply / Edit]
**Steps to Reproduce**:
1. 
2. 
3. 

**Expected**: [What should happen]
**Actual**: [What actually happens]
**Browser**: [Chrome 120 / Firefox 121 / Safari 17]
**Theme**: [Light / Dark]
**Console Errors**: [Paste any errors from DevTools Console]
**Screenshot**: [Attach if visual issue]
```

---

## Success Criteria

All Tier 1 features pass if:
- ✅ All Test 1-6 scenarios pass
- ✅ No console errors during normal usage
- ✅ Features work in both themes
- ✅ Build succeeds (`npm run build`)
- ✅ No performance degradation (messages still render <100ms)

---

## Post-Testing Checklist

Before marking Tier 1 complete:
- [ ] All tests pass in Chrome
- [ ] All tests pass in Firefox (or Safari if on Mac)
- [ ] Mobile responsive (test on 375px width minimum)
- [ ] Light theme verified
- [ ] Dark theme verified
- [ ] Accessibility keyboard nav works
- [ ] No eslint/TypeScript errors
- [ ] Production build succeeds
- [ ] Documentation updated (CHAT_TIER1_COMPLETE.md)

---

## What to Test Next (After Tier 1 Confirmation)

1. **Backend file cleanup**: Old uploaded files never deleted → disk fills up
2. **File type validation**: Backend should validate MIME types, not just extensions
3. **Rate limiting**: Prevent spam uploads (e.g., max 10 files/minute)
4. **Message deletion**: Currently no way to delete messages (only edit)
5. **Reactions**: Quick emoji reactions (👍❤️😂) — Tier 2 candidate

Ready to start testing!
