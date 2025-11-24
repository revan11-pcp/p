import { API_BASE_URL } from './config';
import type { TrackingItem } from '../shared/types';

/**
 * Fetches tracking data from the API.
 * @param awbNo The AWB or tracking number.
 * @returns A promise that resolves to the tracking item (header + detail).
 */
export const getTrackingData = async (awbNo: string): Promise<TrackingItem[]> => {
  const response = await fetch(`${API_BASE_URL}/api/tracking/web`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': 'YWRtaW4=',
    },
    body: JSON.stringify({ awb_no: awbNo }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || `Request failed with status ${response.status}`);
  }

  if (!data.status) {
    throw new Error('Tracking number not found');
  }
  return data.list;
};
