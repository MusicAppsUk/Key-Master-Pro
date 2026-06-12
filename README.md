# KeyMaster Pro — RC3

**Circle of Fifths & Music Theory Trainer**

A complete Progressive Web App for music theory learning — beginner to advanced.

## What's New in RC3

| Feature | Detail |
|---|---|
| 🎵 Built-in Piano Sounds | Web Audio API synthesis — no samples needed |
| 🎹 Playable On-screen Keyboard | Touch/click 2-octave keyboard on every page |
| 🎤 MIDI Input | Connect any MIDI keyboard via USB (Chrome/Android) |
| 👂 Ear Training | 3 levels · 8 question types · intervals, chords, scales |
| 🎼 Staff Notation | Treble clef notation for all scales and chords |
| 📖 20 Scales | All modes, pentatonic, blues, exotic & more |
| 🎸 40+ Chords | Triads through 13ths, altered, jazz voicings |
| ⭕ Circle of Fifths | Tap-to-explore with audio |
| 🏆 Practice | Theory questions with 3 difficulty levels |
| 💾 Progress Tracking | All scores saved locally |
| 📲 PWA | Installable, works offline |

## Google Play Store — TWA Deployment

This PWA can be wrapped as an Android app using **Trusted Web Activity (TWA)**:

### Step 1 — Deploy to GitHub Pages
1. Create repo, upload files, enable Pages (see RC2 README)
2. Note your URL: `https://yourusername.github.io/keymaster-pro/`

### Step 2 — Generate Android APK with PWABuilder
1. Visit https://www.pwabuilder.com
2. Enter your GitHub Pages URL
3. Click **Package for Stores → Android**
4. Download the generated APK / AAB file
5. Sign with a keystore (PWABuilder guides you through this)

### Step 3 — Google Play Console
1. Create a developer account ($25 one-time fee)
2. Create new app → Upload the AAB file
3. Complete store listing (icon, screenshots, description)
4. Submit for review (typically 1–3 days)

### MIDI on Android
- Plug in USB MIDI keyboard
- Open app in Chrome browser (or TWA)
- App auto-detects and shows green MIDI bar
- Notes highlight on-screen as you play

## File Structure
```
keymaster-pro-rc3/
├── index.html          ← Complete app
├── manifest.json       ← PWA manifest
├── sw.js               ← Service Worker
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── .github/workflows/deploy.yml
└── README.md
```

## Local Testing
```bash
python3 -m http.server 8080
# Open http://localhost:8080
```
