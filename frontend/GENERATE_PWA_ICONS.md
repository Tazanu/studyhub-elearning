# PWA Icon Generation Instructions

The following PNG icons need to be generated from `favicon.svg`:

## Required Icons:
1. **pwa-192x192.png** - 192×192px PNG for Android home screen
2. **pwa-512x512.png** - 512×512px PNG for splash screens and high-DPI displays
3. **apple-touch-icon.png** - 180×180px PNG for iOS (must have opaque background, no transparency)
4. **favicon.ico** - 32×32px ICO for browser tabs

## Generation Methods:

### Option 1: Using ImageMagick (if available)
```bash
# Install ImageMagick if needed
# Windows: https://imagemagick.org/script/download.php

# Generate PWA icons
magick public/favicon.svg -resize 192x192 public/pwa-192x192.png
magick public/favicon.svg -resize 512x512 public/pwa-512x512.png
magick public/favicon.svg -resize 180x180 -background "#0a0a0a" -flatten public/apple-touch-icon.png
magick public/favicon.svg -resize 32x32 public/favicon.ico
```

### Option 2: Using an online tool
1. Visit https://realfavicongenerator.net/ or https://favicon.io/
2. Upload `public/favicon.svg`
3. Download the generated icons
4. Place them in the `public/` folder with the names above

### Option 3: Manual (Figma/Photoshop/etc)
1. Open `public/favicon.svg` in your design tool
2. Export at the specified sizes
3. For apple-touch-icon.png, ensure background is opaque (#0a0a0a)

## Temporary Workaround
Until real icons are generated, the app will use favicon.svg as a fallback.
The manifest will still be valid, but iOS/Android may show a generic icon.
