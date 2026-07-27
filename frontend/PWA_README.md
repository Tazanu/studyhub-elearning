# StudyHub PWA Implementation

## Overview
StudyHub is now a fully installable, offline-capable Progressive Web App (PWA) using `vite-plugin-pwa` and Workbox for smart caching.

## Features Implemented

### ✅ 1. Installability
- **Web App Manifest**: Full manifest with name, icons, theme colors, and standalone display mode
- **Custom Install Prompt**: Dismissible banner that respects user preference (localStorage)
- **Auto-detection**: Hides install prompt if app is already installed (display-mode: standalone)

### ✅ 2. App Shell Caching
- **Instant loads**: All static assets (JS, CSS, HTML, icons) are cached on first visit
- **Service Worker**: Auto-updates with `skipWaiting` and `clientsClaim` for seamless updates
- **Update notification**: Non-intrusive banner with "Refresh" button when new version is available

### ✅ 3. Smart API Caching Strategy

#### Cache-First (StaleWhileRevalidate)
- `/api/stats` — cached for 5 minutes, shows instant stats while revalidating in background

#### Network-First (with offline fallback)
- `/api/groups`
- `/api/notes`
- `/api/tutors`
- `/api/questions`
- **Timeout**: 5 seconds before falling back to cache
- **Expiration**: Cached for 24 hours, max 100 entries

#### Network-Only (NEVER cached)
- `/api/auth/*` — login, register, token refresh
- `/api/payments/*` — MeSomb mobile money transactions
- `/api/*/messages` — real-time chat messages
- `/api/notes/*/download` — file downloads

**Why?** Caching auth tokens or payment requests could cause security issues or duplicate charges. Chat messages must always be fresh. These endpoints fail gracefully with clear "you're offline" messaging when network is unavailable.

### ✅ 4. Offline-Aware UI

#### Global Offline Banner
- Persistent red banner at top of screen when `navigator.onLine === false`
- Auto-dismisses when connection is restored

#### Per-Feature Offline Handling
- **Chat Input**: Disabled with "Offline — reconnect to send messages" placeholder, WiFi icon in send button
- **Join/Create Groups**: Buttons disabled with WiFi icon and tooltip
- **Login/Register**: Buttons show "You're Offline" state with WiFi icon
- All critical actions require online connection and communicate this clearly

### ✅ 5. Update Handling
- **onNeedRefresh**: Shows dismissible "New version available — Refresh" notification
- **onOfflineReady**: Shows brief "StudyHub is ready to work offline" toast (auto-dismisses after 4s)
- **Manual refresh**: User clicks "Refresh" button to activate new service worker and reload

## File Structure

```
frontend/
├── public/
│   ├── favicon.svg              # Existing icon
│   ├── pwa-192x192.png          # TODO: Generate from generate-icons.html
│   ├── pwa-512x512.png          # TODO: Generate from generate-icons.html
│   ├── apple-touch-icon.png     # TODO: Generate from generate-icons.html
│   └── generate-icons.html      # Browser-based icon generator tool
├── src/
│   ├── components/
│   │   ├── UpdateNotification.jsx  # Service worker update UI
│   │   ├── OfflineBanner.jsx       # Global offline indicator
│   │   └── InstallPrompt.jsx       # Custom PWA install prompt
│   ├── hooks/
│   │   └── useOnlineStatus.js      # Hook for navigator.onLine state
│   └── App.jsx                     # Service worker registration
└── vite.config.js                  # PWA plugin configuration
```

## Production Checklist

### Before Deploying
1. **Generate PWA Icons**:
   - Open `http://localhost:5173/generate-icons.html` in dev mode
   - Click "Generate All Icons"
   - Move generated PNGs to `/public` folder
   - Verify no broken icon references in manifest

2. **Update API URLs**:
   - In `vite.config.js`, replace all `http://localhost:5000` patterns in `workbox.runtimeCaching` with your production API domain
   - Example: `https://api.studyhub.cm`

3. **Test Installation**:
   ```bash
   npm run build
   npm run preview
   ```
   - Chrome DevTools → Application → Manifest (verify no errors)
   - Chrome DevTools → Application → Service Worker (verify active)
   - Look for "Install" icon in address bar
   - Test actual install flow

4. **Test Offline**:
   - Load app once online
   - DevTools → Network → Offline checkbox
   - Reload page (app shell should still load)
   - Verify cached groups/notes display
   - Verify auth/chat actions are clearly disabled with messaging

5. **Lighthouse PWA Audit**:
   ```bash
   npm run build && npm run preview
   ```
   - DevTools → Lighthouse → Progressive Web App
   - Target score: 90+ (100 is ideal)
   - Fix any flagged issues

## Development

### Testing Service Worker in Dev Mode
The service worker is enabled in dev mode via `devOptions.enabled: true`, but some features only fully activate in production builds.

### Debugging
- Chrome DevTools → Application → Service Worker
- Check "Update on reload" during development to avoid stale caches
- Click "Unregister" to fully reset service worker

### Cache Invalidation
Service worker automatically updates when any file in `globPatterns` changes. Vite includes a hash in filenames, so updates are seamless.

## Known Limitations

### Out of Scope (Explicitly)
- **Offline action queuing**: Sending chat messages, creating groups, or uploading files while offline will NOT queue and sync later. This is intentional — queuing payment requests or file uploads could cause duplicate charges or data corruption. Users see clear "you're offline" messaging instead.

### TODO
- Generate actual PNG icons from `favicon.svg` (currently using SVG fallback)
- Update API URL patterns in `vite.config.js` before production deploy
- Consider adding a "Check for updates" button in Settings page for manual update checks

## Browser Support
- **Chrome/Edge**: Full PWA support including install prompt
- **Safari iOS**: Installable to home screen (add to home screen), limited service worker support
- **Firefox**: Service worker supported, install prompt varies by version
- **Safari macOS**: Limited PWA support (no install prompt)

## Resources
- [vite-plugin-pwa docs](https://vite-pwa-org.netlify.app/)
- [Workbox caching strategies](https://developer.chrome.com/docs/workbox/caching-strategies-overview/)
- [PWA best practices](https://web.dev/progressive-web-apps/)
