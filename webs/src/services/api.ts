import type { TrackingResponse, TrackingItem } from '../shared/types';

/**
 * Fetches tracking data from the API.
 * @param awbNo The AWB or tracking number.
 * @returns A promise that resolves to the tracking item (header + detail).
 */
export const getTrackingData = async (awbNo: string): Promise<TrackingItem> => {
  const awbNoWithComma = awbNo.trim().endsWith(',') ? awbNo.trim() : `${awbNo.trim()},`;

  const response = await fetch('/local-api/api/tracking/web', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': 'YWRtaW4=',
    },
    body: JSON.stringify({ awb_no: awbNoWithComma }),
  });

  if (!response.ok) {
    let errorMessage = `Failed to fetch tracking data. Status: ${response.status}`;
    try {
      const errorBody = await response.json();
      if (errorBody && errorBody.message) {
        errorMessage = errorBody.message;
      }
    } catch (_e) {
      errorMessage = `Failed to fetch tracking data: ${response.statusText}`;
    }
    throw new Error(errorMessage);
  }

  const data: TrackingResponse = await response.json();

  if (!data.status) {
    throw new Error('API reported an error or tracking data not found. Check "Full API Response" log above.');
  }

  if (!data.list || data.list.length === 0) {
    throw new Error('No tracking data found for this AWB number.');
  }

  return data.list[0];
};
