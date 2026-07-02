interface BookingData {
  reference: string;
  scheduledDate: string;
  scheduledTime: string;
  services: { name: string; price: number }[];
  totalEstimate: number;
  message: string;
}

interface Props {
  data: BookingData;
}

export function Confirmation({ data }: Props) {
  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  function formatTime(time: string) {
    const [h, m] = time.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 || 12;
    return `${hour12}:${String(m).padStart(2, '0')} ${ampm}`;
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      {/* Success icon */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
        <svg className="h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="mt-6 text-2xl font-bold text-gray-900">Booking Received</h1>
      <p className="mt-2 text-sm text-gray-500">{data.message}</p>

      {/* Reference card */}
      <div className="mt-8 rounded-xl border-2 border-dashed border-brand-300 bg-brand-50 p-6">
        <p className="text-sm font-medium text-brand-700">Your Booking Reference</p>
        <p className="mt-1 font-mono text-3xl font-bold tracking-widest text-brand-900">
          {data.reference}
        </p>
        <p className="mt-3 text-sm text-brand-600">
          Save this code. You can reference it when you arrive.
        </p>
      </div>

      {/* Summary */}
      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 text-left">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Date</span>
            <span className="font-medium text-gray-900">{formatDate(data.scheduledDate)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Time</span>
            <span className="font-medium text-gray-900">{formatTime(data.scheduledTime)}</span>
          </div>
          <div className="border-t border-gray-100 pt-3">
            {data.services.map((s, i) => (
              <div key={i} className="flex justify-between py-0.5">
                <span className="text-gray-600">{s.name}</span>
                                <span className="text-gray-900">KES {s.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-3">
            <span className="font-medium text-gray-700">Estimated Total</span>
            <span className="text-lg font-bold text-brand-700">
              ${data.totalEstimate.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-400">
        A team member will review and confirm your appointment. Pricing is an estimate and may vary based on vehicle condition.
      </p>
    </div>
  );
}