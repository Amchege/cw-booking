import { useState, useEffect } from 'react';
import api from '../../api/client';

type BookingStatus = 'PENDING' | 'CONVERTED_TO_JOB' | 'CANCELLED' | 'EXPIRED';

interface StatusData {
  reference: string;
  status: BookingStatus;
  scheduledDate: string;
  scheduledTime: string;
  jobNumber: string | null;
  services: { name: string; price: number }[];
}

export function StatusCheck() {
  const params = new URLSearchParams(window.location.search);
  const initialRef = params.get('ref') || '';

  const [ref, setRef] = useState(initialRef);
  const [data, setData] = useState<StatusData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = async (refCode: string) => {
    if (!refCode.trim()) return;
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await api.get(`/bookings/${refCode.trim().toUpperCase()}`);
      setData(res.data.data);
    } catch (err: any) {
      setError(err?.error?.message || 'Failed to find booking.');
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch if URL has ?ref=
  useEffect(() => {
    if (initialRef) fetchStatus(initialRef);
  }, [initialRef]);

  const statusConfig: Record<BookingStatus, { label: string; color: string; bg: string }> = {
    PENDING: { label: 'Pending Confirmation', color: 'text-yellow-700', bg: 'bg-yellow-50 border-yellow-200' },
    CONVERTED_TO_JOB: { label: 'Confirmed & In Queue', color: 'text-green-700', bg: 'bg-green-50 border-green-200' },
    CANCELLED: { label: 'Cancelled', color: 'text-red-700', bg: 'bg-red-50 border-red-200' },
    EXPIRED: { label: 'Expired', color: 'text-gray-700', bg: 'bg-gray-50 border-gray-200' },
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      {/* Search Box */}
      <div className="flex gap-2">
        <input
          type="text"
          value={ref}
          onChange={(e) => setRef(e.target.value)}
          placeholder="e.g. CW-ABC1234"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none"
          onKeyDown={(e) => e.key === 'Enter' && fetchStatus(ref)}
        />
        <button
          onClick={() => fetchStatus(ref)}
          disabled={loading}
          className="rounded-lg bg-brand-600 px-6 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
        >
          {loading ? 'Checking...' : 'Track'}
        </button>
      </div>

      {/* Error State */}
      {error && (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Success State */}
      {data && (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-500">Reference</p>
            <p className="font-mono text-2xl font-bold text-gray-900">{data.reference}</p>
          </div>

          <div className={`mt-4 rounded-lg border-2 p-3 text-center ${statusConfig[data.status].bg}`}>
            <p className={`text-sm font-bold ${statusConfig[data.status].color}`}>
              {statusConfig[data.status].label}
            </p>
            {data.jobNumber && (
              <p className="mt-1 text-xs text-gray-600">Job Number: <span className="font-bold">{data.jobNumber}</span></p>
            )}
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Date</span>
              <span className="font-medium text-gray-900">{new Date(data.scheduledDate).toDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Time</span>
              <span className="font-medium text-gray-900">{data.scheduledTime}</span>
            </div>
            
            <div className="border-t pt-2">
              {data.services.map((s, i) => (
                <div key={i} className="flex justify-between py-0.5">
                  <span className="text-gray-600">{s.name}</span>
                  <span className="text-gray-900">KES {s.price.toLocaleString()}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="pt-3 border-t">
              <a
                href={`https://wa.me/254758003003?text=${encodeURIComponent(`Hi Nexus CarWash. I am checking my booking status. Ref: ${data.reference}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-green-600 transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat with us about this booking
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}