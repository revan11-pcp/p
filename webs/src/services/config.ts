const getApiBaseUrl = () => {
  if (import.meta.env.DEV) {
    return import.meta.env.VITE_API_PROXY_TARGET; // "/api"
  }

  return import.meta.env.VITE_API_BASE_URL; // "https://pcptransport.com/api"
}

export const API_BASE_URL = getApiBaseUrl();