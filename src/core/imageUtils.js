/**
 * Utility functions for secure image handling
 */

const SERVER_BASE_URL = 'http://46.62.165.97:1337';

/**
 * Converts a server image URL to use the secure proxy
 * @param {string} imagePath - The image path from the server (e.g., "/uploads/image.jpg")
 * @returns {string} - The proxied image URL
 */
export function getSecureImageUrl(imagePath) {
  if (!imagePath) {
    return null;
  }
  
  // Remove the server base URL if it's already included
  const cleanPath = imagePath.replace(SERVER_BASE_URL, '');
  
  // Ensure the path starts with a slash
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  
  // Return the proxied URL
  return `/api/images${normalizedPath}`;
}

/**
 * Converts a cover image URL from the API response to use the secure proxy
 * @param {object} cover - The cover object from API response
 * @returns {string|null} - The proxied image URL or null if no cover
 */
export function getCoverImageUrl(cover) {
  if (!cover?.url) {
    return null;
  }
  
  return getSecureImageUrl(cover.url);
}

/**
 * Converts an avatar image URL from the API response to use the secure proxy
 * @param {object} avatar - The avatar object from API response
 * @returns {string|null} - The proxied image URL or null if no avatar
 */
export function getAvatarImageUrl(avatar) {
  if (!avatar?.url) {
    return null;
  }
  
  return getSecureImageUrl(avatar.url);
}

/**
 * Transforms post data to use secure image URLs
 * @param {Array} posts - Array of post objects from API
 * @returns {Array} - Transformed posts with secure image URLs
 */
export function transformPostDataWithSecureImages(posts) {
  return posts?.map((post) => ({
    ...post,
    image: getCoverImageUrl(post.cover) || "",
  })) || [];
}

/**
 * Gets a fallback image URL for cases where no image is available
 * @returns {string} - Fallback image URL
 */
export function getFallbackImageUrl() {
  return "https://via.placeholder.com/400x300?text=No+Image";
}
