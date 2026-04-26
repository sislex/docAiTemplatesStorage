export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000').replace(
  /\/$/,
  '',
);

export const API_PREFIX = `${API_BASE_URL}/api`;
export const API_DOCS_URL = `${API_BASE_URL}/api-docs`;
