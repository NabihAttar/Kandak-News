import apiService from "./apiServices.js";

// Cache configuration
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
const CACHE_KEY_PREFIX = "kandak_cache_";

// Cache storage
const cache = new Map();

// Get locale from local storage
const getLocale = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("lang") || "ar"; // Default to 'ar' if not found
  }
  return "ar"; // Default for server-side rendering
};

const locale = getLocale();

// Cache utility functions
const getCacheKey = (endpoint, params = {}) => {
  const sortedParams = Object.keys(params)
    .sort()
    .reduce((result, key) => {
      result[key] = params[key];
      return result;
    }, {});
  return `${CACHE_KEY_PREFIX}${endpoint}_${JSON.stringify(sortedParams)}`;
};

const isCacheValid = (cacheEntry) => {
  return cacheEntry && Date.now() - cacheEntry.timestamp < CACHE_DURATION;
};

const getFromCache = (cacheKey) => {
  const cacheEntry = cache.get(cacheKey);
  if (isCacheValid(cacheEntry)) {
    console.log("Cache hit for:", cacheKey);
    return cacheEntry.data;
  }
  if (cacheEntry) {
    console.log("Cache expired for:", cacheKey);
    cache.delete(cacheKey);
  }
  return null;
};

const setCache = (cacheKey, data) => {
  cache.set(cacheKey, {
    data,
    timestamp: Date.now(),
  });
  console.log("Data cached for:", cacheKey);
};

const clearCache = () => {
  cache.clear();
  console.log("Cache cleared");
};

const TOKEN = `Bearer 68aa8e860b375ed203796e994c90c4738eafe79765177a490e21940b71e23ceb8c1ee45036d2051d82816b719cd0592c6746b338a5335f056af588a73f3a4b3b7ee0d89902bdc923831d56f878abf3384c3da8272ae692b3ff8c415281107925052a92c6405234dfeeed79ff3160fe663aeda341aa08aae5e761b5f647277d6c`;

const ARTICLES_URL = "api/articles";
const HOME_URL = `api/homepage?populate%5B0%5D=banner&populate%5B1%5D=banner.articles&populate%5B2%5D=banner.articles.cover`;

const getArticles = async (limit = null) => {
  const params = limit ? { limit } : {};
  const response = await apiService.get(ARTICLES_URL, params);
  return response.data;
};

const getByCategory = async (category, limit = null) => {
  const params = { category };
  if (limit) params.limit = limit;
  const response = await apiService.get(ARTICLES_URL, params);
  return response.data;
};

const getByAuthor = async (author, limit = null) => {
  const params = { author };
  if (limit) params.limit = limit;
  const response = await apiService.get(ARTICLES_URL, params);
  return response.data;
};

const getArticle = async (documentId) => {
  const response = await apiService.get(`${ARTICLES_URL}/${documentId}`);
  return response.data;
};

const getHomepage = async (currentLocale = null) => {
  const localeToUse = currentLocale || getLocale();
  const cacheKey = getCacheKey(HOME_URL, { locale: localeToUse });

  // Check cache first
  const cachedData = getFromCache(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  // Fetch from API if not in cache
  const response = await apiService.get(HOME_URL, { locale: localeToUse });
  const data = response.data;

  // Cache the response
  setCache(cacheKey, data);

  return data;
};

// Set the token for API calls
apiService.setToken(TOKEN);

export {
  getArticles,
  getByCategory,
  getByAuthor,
  getArticle,
  getHomepage,
  clearCache,
  locale,
};
