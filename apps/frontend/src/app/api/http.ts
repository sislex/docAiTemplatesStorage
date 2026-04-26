import type { ApiErrorResponseDto } from '../components/types';

import { API_PREFIX } from './config';

function isJsonResponse(contentType: string | null): boolean {
  return Boolean(contentType && contentType.includes('application/json'));
}

async function parseApiError(response: Response): Promise<ApiErrorResponseDto | string> {
  if (isJsonResponse(response.headers.get('content-type'))) {
    const payload = (await response.json()) as Partial<ApiErrorResponseDto>;
    return {
      code: payload.code ?? 'UNKNOWN_ERROR',
      message: payload.message ?? `HTTP ${response.status}`,
      retryable: payload.retryable ?? false,
      action: payload.action ?? 'fatal',
      field: payload.field,
      explain: payload.explain,
      details: payload.details,
    };
  }

  const text = await response.text();
  return text || `HTTP ${response.status}`;
}

export async function requestJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_PREFIX}${path}`, init);

  if (!response.ok) {
    throw await parseApiError(response);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  if (!isJsonResponse(response.headers.get('content-type'))) {
    return undefined as T;
  }

  return (await response.json()) as T;
}
