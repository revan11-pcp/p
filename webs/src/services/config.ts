const getApiBaseUrl = () => {
  if (import.meta.env.VITE_API_PROXY_TARGET) {
    return import.meta.env.VITE_API_PROXY_TARGET;
  }
  return import.meta.env.VITE_API_BASE_URL;
}

export const API_BASE_URL = getApiBaseUrl();
