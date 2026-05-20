# Creating Releases

## How to Create a Release with Automated Build

### 1. Update Version
Edit `package.json` and update the version:
```json
{
  "version": "0.1.0"
}
```

### 2. Create a Git Tag
```bash
# Local
git tag v0.1.0
git push origin v0.1.0
```

Or using GitHub CLI:
```bash
gh release create v0.1.0 --title "LoopForge v0.1.0" --generate-notes
```

### 3. GitHub Actions Does the Rest
- Automatically builds the Windows installer and portable exe
- Uploads both files to the release page
- Your release is ready to download!

## What Gets Built

When you push a tag like `v0.1.0`, GitHub Actions:
- ✅ Installs dependencies
- ✅ Builds the Electron app
- ✅ Creates Windows exe files (NSIS installer + portable)
- ✅ Uploads to GitHub Releases

## Manual Build (without release)

```bash
npm run build:electron:win
```

Files appear in `dist_electron/`:
- `LoopForge Setup X.X.X.exe` - Installer
- `LoopForge X.X.X.exe` - Portable

## Release Workflow Example

```bash
# 1. Make changes
git add .
git commit -m "Add new feature"

# 2. Update version in package.json
# v0.1.0 -> v0.2.0

# 3. Create tag
git tag v0.2.0
git push origin v0.2.0

# Wait a few minutes for GitHub Actions to build...
# Then check: https://github.com/YOUR_REPO/releases
```

## Troubleshooting

**Build failed in GitHub Actions?**
- Check the workflow logs: Settings → Actions
- Common issues: Node version, missing dependencies

**Files not uploading?**
- Verify token permissions (usually automatic)
- Check electron-builder.yml configuration

**Update app icon/name before release:**
- Icon: Add to `public/icon.png`
- Name/version: Update in `package.json`
- Then create the release tag
