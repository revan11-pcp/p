const getApiBaseUrl = () => {
  // In development, use the proxy target if it exists.
  if (import.meta.env.DEV && import.meta.env.VITE_API_PROXY_TARGET) {
    return import.meta.env.VITE_API_PROXY_TARGET;
  }
  // In production, or if no proxy target is set, use the base URL.
  return import.meta.env.VITE_API_BASE_URL;
}

export const API_BASE_URL = getApiBaseUrl();
