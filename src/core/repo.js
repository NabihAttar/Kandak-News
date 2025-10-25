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
};

const clearCache = () => {
  cache.clear();
  console.log("Cache cleared");
};

const TOKEN = `Bearer 68aa8e860b375ed203796e994c90c4738eafe79765177a490e21940b71e23ceb8c1ee45036d2051d82816b719cd0592c6746b338a5335f056af588a73f3a4b3b7ee0d89902bdc923831d56f878abf3384c3da8272ae692b3ff8c415281107925052a92c6405234dfeeed79ff3160fe663aeda341aa08aae5e761b5f647277d6c`;

const ARTICLES_URL = "api/articles";
const HOME_URL = `api/homepage?populate%5B0%5D=banner&populate%5B1%5D=banner.articles&populate%5B2%5D=banner.articles.cover&populate%5B3%5D=video&populate%5B4%5D=infograpic.infographs&populate%5B5%5D=infograph2.infographs&populate%5B6%5D=localandinternationalaffairs&populate%5B7%5D=localandinternationalaffairs.local&populate%5B8%5D=localandinternationalaffairs.local.cover&populate%5B9%5D=localandinternationalaffairs.internations&populate%5B10%5D=localandinternationalaffairs.internations.cover&populate%5B11%5D=opinion&populate%5B12%5D=opinion.opinions&populate%5B13%5D=opinion.israelis&populate%5B14%5D=cultureAndPhilosophy&populate%5B15%5D=cultureAndPhilosophy.cultures&populate%5B16%5D=cultureAndPhilosophy.cultures.cover&populate%5B17%5D=cultureAndPhilosophy.philosophies&populate%5B18%5D=cultureAndPhilosophy.philosophies.cover&populate%5B19%5D=africaAndSport&populate%5B20%5D=africaAndSport.africas&populate%5B21%5D=africaAndSport.africas.cover&populate%5B22%5D=africaAndSport.sports&populate%5B23%5D=africaAndSport.sports.cover`;

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
  const response = await apiService.get(
    `${ARTICLES_URL}/${documentId}?populate%5B0%5D=cover`
  );
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
