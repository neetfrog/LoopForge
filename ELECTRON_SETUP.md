# Electron App Setup

LoopForge now includes a Windows Electron app version in addition to the web app.

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Development

**Web App (original):**
```bash
npm run dev
```
Opens at `http://localhost:5173`

**Electron App:**
```bash
npm run dev:electron
```
This will run the Vite dev server and open the Electron app with hot reload. The app will open dev tools for debugging.

### 3. Building

**Web App:**
```bash
npm run build
```
Output: `dist/` folder

**Electron App (Windows):**
```bash
npm run build:electron:win
```
This creates an NSIS installer and a portable executable.

**Electron App (Portable only):**
```bash
npm run build:electron:portable
```

**Quick Build (Windows):**
```bash
npm run dist
```

### 4. Output

Electron build outputs to:
- `dist_electron/` - Compiled main process files
- `dist_electron/LoopForge Setup 0.0.0.exe` - NSIS installer
- `dist_electron/LoopForge 0.0.0.exe` - Portable executable

## Project Structure

```
src/
├── main/
│   ├── main.ts       - Electron main process
│   └── preload.ts    - Preload script
├── ...               - React components (unchanged)
electron-builder.yml  - Electron build configuration
```

## Features

- ✅ Native Windows app
- ✅ Auto-updates ready (configure in main.ts)
- ✅ Dev tools for debugging
- ✅ System menus (File, Edit, View, Help)
- ✅ NSIS installer + portable executable

## Customization

### App Icon
Add a 512x512 PNG icon to `public/icon.png` for the app icon.

### Window Size
Edit `src/main/main.ts`:
```typescript
mainWindow = new BrowserWindow({
  width: 1400,      // Change width
  height: 900,      // Change height
  minWidth: 800,    // Change minimum width
  minHeight: 600,   // Change minimum height
  // ...
});
```

### Installer Configuration
Edit `electron-builder.yml` to customize:
- App name
- Icon path
- Installer options
- Auto-update settings

## Troubleshooting

**Port 5173 already in use:**
Kill the process or use a different port by editing `vite.config.ts`.

**Build fails:**
- Make sure Node.js v18+ is installed: `node --version`
- Clear `node_modules` and reinstall: `rm -r node_modules && npm install`

**Icon not showing:**
Create or add an icon at `public/icon.png` (512x512 PNG).

## Next Steps

1. Update version in `package.json` before building
2. Add your app icon to `public/icon.png`
3. Customize window size and menus in `src/main/main.ts`
4. Run `npm run dev:electron` to test
5. Run `npm run build:electron:win` to create installer

Enjoy your Electron app! 🚀
