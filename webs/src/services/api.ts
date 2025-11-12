import type{ TrackingResponse, TrackingItem } from '../types';

const API_BASE_URL = '/api/api.web.pcp/apidata/TrackingWebV2'; 

/**
 * Fetches tracking data from the API.
 * @param awbNo The AWB or tracking number.
 * @returns A promise that resolves to the tracking item (header + detail).
 */
export const getTrackingData = async (awbNo: string): Promise<TrackingItem> => {
  const response = await fetch(`${API_BASE_URL}?AwbNo=${awbNo}`); 
  if (!response.ok) {
    let errorMessage = 'Failed to fetch tracking data.';
    try {
      const errorBody = await response.json();
      if (errorBody && errorBody.message) {
        errorMessage = errorBody.message;
      } else if (errorBody && typeof errorBody === 'string') {
        errorMessage = errorBody;
      }
    } catch (_e) {
      errorMessage = 'Under Development   ';
    }
    throw new Error(errorMessage);
  }

  const data: TrackingResponse = await response.json();

  if (!data.status) {
    throw new Error('API reported an error or tracking data not found.');
  }

  if (!data.list || data.list.length === 0) {
    throw new Error('No tracking data found for this AWB number.');
  }

  return data.list[0];
};

