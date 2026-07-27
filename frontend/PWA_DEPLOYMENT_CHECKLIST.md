# PWA Production Deployment Checklist

## Pre-Deployment

### [ ] 1. Generate PWA Icons
- [ ] Open `http://localhost:5173/generate-icons.html`
- [ ] Click "Generate All Icons"
- [ ] Verify downloads: `pwa-192x192.png`, `pwa-512x512.png`, `apple-touch-icon.png`
- [ ] Move all PNG files to `/public` folder
- [ ] Verify no 404 errors for icons in DevTools

### [ ] 2. Update API URLs in vite.config.js
**CRITICAL: Update all localhost URLs to production API domain**

Find and replace:
```js
// BEFORE (localhost):
urlPattern: /^http:\/\/localhost:5000\/api\//

// AFTER (production):
urlPattern: /^https:\/\/api\.yourdomain\.com\/api\//
```

**Three locations to update:**
1. Line ~34: Stats caching pattern
2. Line ~42: Groups/notes/tutors caching pattern  
3. Line ~53: Auth/payments NetworkOnly pattern

### [ ] 3. Test Production Build
```bash
npm run build
npm run preview
```
- [ ] No build errors
- [ ] No manifest errors in DevTools → Application
- [ ] Service worker activates successfully
- [ ] All icons load (no 404s)

### [ ] 4. Test Offline Functionality
- [ ] Load app while online
- [ ] Switch to offline (DevTools → Network → Offline)
- [ ] Reload page → app shell loads
- [ ] Offline banner appears
- [ ] Cached content (groups, notes) displays
- [ ] Auth actions blocked with clear messaging
- [ ] Chat input disabled with offline message

### [ ] 5. Test Install Flow
- [ ] Install prompt appears (or shows in address bar)
- [ ] Click install
- [ ] App appears on home screen/desktop
- [ ] Opening installed app shows standalone mode (no browser chrome)
- [ ] Installed app icon looks correct

### [ ] 6. Run Lighthouse Audit
```bash
npm run build && npm run preview
```
- [ ] DevTools → Lighthouse → Progressive Web App
- [ ] Score: 90+ (target 100)
- [ ] Fix any flagged issues
- [ ] Screenshot score for reference

### [ ] 7. Test Update Flow
- [ ] Make small code change
- [ ] Rebuild and redeploy
- [ ] Open running app (don't refresh)
- [ ] "New version available" banner appears
- [ ] Click "Refresh" → new version loads
- [ ] No errors in console

## Deployment

### [ ] 8. Configure Web Server (Production)

**For Vercel/Netlify/Similar:**
- [ ] Ensure `dist/` folder is deployed
- [ ] Verify HTTPS is enabled (required for service workers)
- [ ] Set cache headers for static assets:
  ```
  /assets/* → cache-control: max-age=31536000, immutable
  /sw.js → cache-control: no-cache
  ```

**For Custom Server (Nginx example):**
```nginx
# Service worker must not be cached
location /sw.js {
    add_header Cache-Control "no-cache";
}

# Workbox runtime must not be cached
location ~ /workbox-.*\.js$ {
    add_header Cache-Control "no-cache";
}

# Static assets can be cached forever (have hashes)
location /assets/ {
    add_header Cache-Control "max-age=31536000, immutable";
}
```

### [ ] 9. Verify Production Domain
- [ ] Open production URL (must be HTTPS)
- [ ] DevTools → Application → Manifest (no errors)
- [ ] DevTools → Application → Service Worker (active)
- [ ] Test install on mobile device (iOS Safari + Android Chrome)
- [ ] Test offline on production
- [ ] Verify API calls work (not hitting localhost)

### [ ] 10. Mobile Testing

**Android (Chrome):**
- [ ] Visit site in Chrome
- [ ] Install prompt appears (or "Add to Home screen" in menu)
- [ ] Install and open from home screen
- [ ] Runs in standalone mode
- [ ] Offline mode works

**iOS (Safari):**
- [ ] Visit site in Safari
- [ ] Share button → "Add to Home Screen"
- [ ] Icon and name appear correctly
- [ ] Open from home screen
- [ ] Service worker caching works (limited)
- [ ] Note: iOS service worker support is limited

## Post-Deployment

### [ ] 11. Monitor
- [ ] Check browser console for service worker errors
- [ ] Monitor API logs for unexpected caching issues
- [ ] Test update deployment flow on real users
- [ ] Gather feedback on offline experience

### [ ] 12. Document for Team
- [ ] Share PWA_README.md with team
- [ ] Document update deployment process
- [ ] Note: Any change to `dist/` files triggers service worker update

## Emergency Rollback

If PWA causes issues in production:

1. **Quick fix:** Update `vite.config.js`:
```js
VitePWA({
  registerType: 'autoUpdate',
  injectRegister: null, // Disables service worker registration
  // ... rest of config
})
```

2. **Nuclear option:** Unregister service worker:
```js
// Add to App.jsx temporarily
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(reg => reg.unregister());
  });
}
```

## Success Criteria

✅ PWA is successfully deployed when:
- [ ] Lighthouse PWA score ≥ 90
- [ ] Installable on mobile (iOS + Android)
- [ ] Offline mode works (shows cached content + clear offline messaging)
- [ ] Update flow works smoothly (new versions deploy without breaking user sessions)
- [ ] No console errors related to service worker
- [ ] Icons display correctly on all platforms
- [ ] API calls use production domain (not localhost)

---

**Last updated:** After initial PWA implementation
**Next review:** Before first production deployment
