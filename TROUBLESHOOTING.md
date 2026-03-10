# Troubleshooting: Image Not Showing

## Quick Fixes

### 1. Restart the Dev Server
```bash
# Stop the current server (Ctrl+C)
cd frontend
npm run dev
```

### 2. Clear Browser Cache
- Press `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
- Or open DevTools (F12) → Network tab → Check "Disable cache"

### 3. Check Image Path
The image should be at:
```
frontend/public/images/profile-photo.jpg
```

### 4. Verify File Name
- Must be exactly: `profile-photo.jpg`
- Case-sensitive on some systems
- Check for extra spaces or characters

### 5. Check Browser Console
Open DevTools (F12) → Console tab
- Look for any error messages
- Check if image path is correct

### 6. Try Direct URL
Open in browser:
```
http://localhost:3000/images/profile-photo.jpg
```
If this works, the path is correct.

### 7. Alternative: Use Import Method
If the above doesn't work, we can update components to import the image directly.

## Common Issues

### Issue: Image shows placeholder
- **Cause**: Image path not found
- **Fix**: Check file location and restart server

### Issue: Image doesn't load at all
- **Cause**: File not in public folder or wrong path
- **Fix**: Ensure file is in `frontend/public/images/`

### Issue: Cached old image
- **Cause**: Browser caching
- **Fix**: Hard refresh (Ctrl+Shift+R)

### Issue: Large file size
- **Cause**: Image too large (your file is ~5MB)
- **Fix**: Optimize image (compress to <500KB recommended)

## Image Optimization

Your current image is ~5MB. Consider optimizing:

1. **Online tools**:
   - TinyPNG.com
   - Squoosh.app
   - ImageOptim

2. **Recommended size**:
   - File size: <500KB
   - Dimensions: 800x800px (square)
   - Format: JPG (better compression)

## Still Not Working?

1. Check browser console for errors
2. Verify file exists: `ls frontend/public/images/`
3. Try renaming to test: `profile-photo-test.jpg`
4. Update component to use new name temporarily


