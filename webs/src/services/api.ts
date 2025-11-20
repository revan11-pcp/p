import { API_BASE_URL } from './config';
import type { TrackingResponse, TrackingItem } from '../shared/types';

/**
 * A reusable helper function for making POST requests to the API.
 * It handles common headers, body serialization, and error handling.
 * @param path The API endpoint path.
 * @param body The request body to be serialized as JSON.
 * @returns A promise that resolves to the parsed JSON response.
 */
const apiPost = async <T>(path: string, body: unknown): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': 'YWRtaW4=',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || `Request failed with status ${response.status}`);
  }

  return data as T;
};

/**
 * Fetches tracking data from the API.
 * @param awbNo The AWB or tracking number.
 * @returns A promise that resolves to the tracking item (header + detail).
 */
export const getTrackingData = async (awbNo: string): Promise<TrackingItem[]> => {
  const awbNoWithComma = awbNo.trim().endsWith(',') ? awbNo.trim() : `${awbNo.trim()},`;

  const data = await apiPost<TrackingResponse>('/api/tracking/web', { awb_no: awbNoWithComma });
  if (!data.status) {
    throw new Error('Tracking number not found');
  }

  return data.list;
};
