# How to Add Your Photo

## Quick Steps

1. **Locate the image file** you want to use (the portrait photo)

2. **Copy it** to this location:
   ```
   frontend/public/images/profile-photo.jpg
   ```

3. **If your image has a different format** (like `.png`), you have two options:
   - Option A: Convert/rename it to `profile-photo.jpg`
   - Option B: Update the image path in the components

## Current Setup

Your portfolio is already configured to use:
- **Path**: `/images/profile-photo.jpg`
- **Location**: `frontend/public/images/profile-photo.jpg`
- **Used in**: Hero section and Photo section

## Alternative: Using a Different Filename

If you want to use a different filename, update these files:

1. `frontend/src/components/Hero.jsx` (line 92)
2. `frontend/src/components/PhotoSection.jsx` (line 45)

Change:
```jsx
src="/images/profile-photo.jpg"
```

To:
```jsx
src="/images/your-photo-name.jpg"
```

## After Adding

1. Save the image file in `frontend/public/images/`
2. Restart your React dev server:
   ```bash
   cd frontend
   npm run dev
   ```
3. The photo should appear automatically!

## Image Optimization Tips

- **Recommended size**: 400x400 to 800x800 pixels
- **Format**: JPG for photos, PNG for graphics
- **File size**: Keep under 500KB for faster loading
- **Aspect ratio**: Square (1:1) works best for the circular display


