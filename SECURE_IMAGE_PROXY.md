# Secure Image Proxy Implementation

## Overview

This implementation provides a secure image proxy for the Kandak News website, routing all server images through `/api/images/` for enhanced security and control.

## Security Benefits

1. **Server Protection**: The actual server URL (`http://46.62.165.97:1337`) is hidden from clients
2. **Access Control**: Images can be filtered, logged, or restricted through the proxy
3. **CORS Handling**: Proper CORS headers prevent unauthorized cross-origin requests
4. **Security Headers**: Additional security headers protect against common attacks
5. **Path Validation**: Prevents directory traversal attacks

## Implementation Details

### 1. API Route Handler (`/src/app/api/images/[...path]/route.js`)

- **Catch-all route**: Handles any image path after `/api/images/`
- **Security validation**: Prevents `..` and `//` in paths
- **Caching**: Sets appropriate cache headers for performance
- **Error handling**: Graceful fallback for missing images

### 2. Utility Functions (`/src/core/imageUtils.js`)

- `getSecureImageUrl(imagePath)`: Converts server paths to proxy URLs
- `getCoverImageUrl(cover)`: Handles cover image objects from API
- `getAvatarImageUrl(avatar)`: Handles avatar image objects from API
- `transformPostDataWithSecureImages(posts)`: Transforms post arrays
- `getFallbackImageUrl()`: Provides fallback for missing images

### 3. Updated Components

All components now use the secure image proxy:
- `IntegratedHeroSection.jsx`
- `HeroSection.jsx`
- `HighlightsSection.jsx`
- `ArticleCard.jsx`
- Article pages (`/article/[id]/page.jsx`)
- Homepage (`/[lang]/page.js`)

## Usage Examples

### Before (Insecure)
```javascript
const imageUrl = `http://46.62.165.97:1337${post.cover.url}`;
```

### After (Secure)
```javascript
import { getCoverImageUrl } from '@/core/imageUtils';
const imageUrl = getCoverImageUrl(post.cover);
```

## URL Transformation

- **Original**: `http://46.62.165.97:1337/uploads/image.jpg`
- **Proxied**: `/api/images/uploads/image.jpg`

## Security Headers

The proxy adds these security headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Cache-Control: public, max-age=31536000, immutable`

## Testing

Use the provided test script (`test-image-proxy.js`) to verify functionality:

```javascript
// In browser console
testImageProxy();
```

## Migration Notes

- All direct server URLs have been replaced with proxy URLs
- Fallback images remain unchanged for external resources
- The implementation is backward compatible
- No breaking changes to existing functionality

## Performance Considerations

- Images are cached for 1 year (`max-age=31536000`)
- Proxy adds minimal overhead
- Caching reduces server load
- Immutable cache prevents unnecessary revalidation
