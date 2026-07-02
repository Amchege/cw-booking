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
              KES {data.totalEstimate.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="mt-8 text-center">
        <a
          href={`https://wa.me/254758003003?text=${encodeURIComponent(`Hi Nexus CarWash. I just made a booking. My reference is ${data.reference}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-green-600 transition-colors"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Message us on WhatsApp
        </a>
        <p className="mt-3 text-xs text-gray-400">
          A team member will review and confirm your appointment. 
          <a href={`/?ref=${data.reference}`} className="font-medium text-brand-600 hover:underline"> Track status →</a>
        </p>
      </div>
    </div>
  );
}