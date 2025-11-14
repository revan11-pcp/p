import { useState, useEffect } from 'react';
import { getTrackingData } from '../../services/api';
import type { TrackingItem } from '../types';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface TracingProps {
  redirectOnSearch?: boolean;
  initialTrackingId?: string;
}

const Tracing: React.FC<TracingProps> = ({ redirectOnSearch = false, initialTrackingId = '' }) => {
  const [trackingId, setTrackingId] = useState(initialTrackingId);
  const [data, setData] = useState<TrackingItem | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const performSearch = async (id: string) => {
    setLoading(true);
    setData(null);
    try {
      const result = await getTrackingData(id);
      setData(result);
      if (!result || !result.header) {
        toast.error('Tracking number not found.');
      }
    } catch (err: any) {
      toast.error(err.message || 'An unknown error occurred. The tracking number may not be valid or the API is down.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialTrackingId) {
      performSearch(initialTrackingId);
    }
  }, [initialTrackingId]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) {
      toast.error('Please enter a tracking number.');
      return;
    }

    if (redirectOnSearch) {
      navigate(`/trace-and-track?trackingId=${trackingId}`);
      return;
    }

    performSearch(trackingId);
  };

  return (
    <div className="my-4">
      <form className="max-w-md mx-auto" onSubmit={handleSearch}>
        <div className="flex">
          <label htmlFor="awb-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search AWB
          </label>
          <div className="relative w-full">
            <input
              type="search"
              id="awb-search"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Enter your AWB / Tracking Number"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50"
              disabled={loading && !redirectOnSearch}
            >
              {loading && !redirectOnSearch ? (
                <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              )}
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

      {!redirectOnSearch && (
        <div className="max-w-4xl mx-auto mt-8 px-4">
          {loading && <p className="text-center text-gray-500">Loading tracking data...</p>}
          {data && data.header && (
            <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Tracking Number: {data.header.TrackingNo}</h3>
              <p className="dark:text-gray-300">Service: <span className="font-semibold text-blue-600 dark:text-blue-400">{data.header.ServiceName}</span></p>
              <p className="dark:text-gray-300">Shipper: {data.header.ShipperName} ({data.header.ShipperAddress})</p>
              <p className="dark:text-gray-300">Receiver: {data.header.ReceiverName} ({data.header.ReceiverAddress})</p>
              {data.detail && data.detail.length > 0 && (
                <p className="dark:text-gray-300">Current Status: <span className="font-semibold text-green-600 dark:text-green-400">{data.detail[0].StatusName}</span></p>
              )}

              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Tracking History:</h4>
                {data.detail && data.detail.length > 0 ? (
                  <div className="relative mt-4">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    <ul className="space-y-8">
                      {data.detail.map((event, index) => (
                        <li key={index} className="relative pl-10">
                          <div className="absolute left-4 top-1 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2"></div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(event.TrackingDate).toLocaleString()}</p>
                          <p className="text-gray-800 dark:text-gray-200">
                            <strong>{event.StatusName}</strong>
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {event.Location} ({event.OfficeName})
                          </p>
                          {event.ReceiverName && <p className="text-sm text-gray-600 dark:text-gray-400">Received by: {event.ReceiverName} ({event.ReceiverStatus})</p>}
                          {event.CourierName && <p className="text-sm text-gray-600 dark:text-gray-400">Courier: {event.CourierName}</p>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 mt-2">No detailed tracking history available.</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tracing;
