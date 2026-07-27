# Quick Start: PWA Testing

## 1. Generate Icons (Do This First!)
```bash
npm run dev
# Open http://localhost:5173/generate-icons.html in your browser
# Click "Generate All Icons"
# Icons will auto-download
# Move them to the /public folder
```

## 2. Test in Dev Mode
```bash
npm run dev
# Service worker is enabled in dev thanks to devOptions.enabled
# Open Chrome DevTools → Application tab
# Check Service Worker section (should show "activated")
```

## 3. Test Production Build
```bash
npm run build
npm run preview
# Open http://localhost:4173
# DevTools → Application → Manifest (verify no errors)
# DevTools → Application → Service Worker (verify active)
# Look for install icon in address bar
```

## 4. Test Offline Functionality
```bash
npm run preview
# Load the app once
# DevTools → Network tab → Check "Offline"
# Reload the page
# ✅ App shell should load
# ✅ Red offline banner should show
# ✅ Previously loaded groups/notes should still display
# ✅ Try to send a chat message (should be blocked with "offline" state)
```

## 5. Test Install Flow
```bash
npm run preview
# Look for install prompt banner at bottom
# Click "Install"
# App should add to your home screen/applications
# Open installed app → should run in standalone mode (no browser UI)
```

## 6. Test Update Flow
```bash
# With app running:
# Make a small change to App.jsx
npm run build
npm run preview
# Reload the app
# ✅ "New version available — Refresh" banner should appear
# ✅ Click "Refresh" to update
```

## 7. Lighthouse Audit
```bash
npm run build && npm run preview
# Open Chrome DevTools → Lighthouse tab
# Select "Progressive Web App" category
# Click "Analyze page load"
# Target score: 90+ (100 is ideal)
```

## Common Issues

### "Install" icon doesn't appear
- Make sure you're on HTTPS (or localhost)
- Check manifest has no errors in DevTools → Application
- Try incognito mode (previous dismissal might be cached)

### Service worker shows "waiting"
- Check "Update on reload" in DevTools → Application → Service Workers during dev
- Or click "skipWaiting" to force activation

### Icons not loading
- Make sure PNG files are in `/public` folder
- Check browser console for 404 errors
- SVG fallback will work but won't pass Lighthouse audit

### Offline mode not working
- Make sure you loaded the page at least once while online
- Check Network tab shows "Service Worker" in "Size" column for cached resources
- Try hard refresh (Ctrl+Shift+R) then go offline again
