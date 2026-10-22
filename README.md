# AeroPuff

A static, installable web app (PWA). No build step and no database.

## Run it
- **Quickest:** `node server.js`, then open http://localhost:8080 (needs Node 16+).
- **Any static host:** upload every file here to Netlify, Vercel, GitHub Pages, Cloudflare Pages, nginx, Apache, etc. Serve over **HTTPS** (needed for install + offline).
- **Docker:** `docker build -t aeropuff . && docker run -p 8080:8080 aeropuff`
- Do not open index.html by double-click if you want install/offline; use a server (localhost counts as secure).

## Install as an app
Chrome/Edge: install icon in the address bar. Android: menu > Install app. iPhone: Share > Add to Home Screen.

## Needs internet for
Live air quality + weather (open-meteo.com) and the language picker (translate.googleapis.com, with api.mymemory.translated.net as backup). Translations are cached on the device after the first load. Offline, the app still opens and shows sample data.
Ask Pip uses built-in answers when no Claude connection exists.

## Files
index.html (the whole app, images embedded), manifest.webmanifest, sw.js (offline cache), icons/, server.js, Dockerfile.
