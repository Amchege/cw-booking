import { useAttendants } from '../../../hooks/useAttendants';
import type { BookingFormData } from '../../../types/booking';

interface Props {
  form: BookingFormData;
  errors: Record<string, string>;
  onChange: <K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) => void;
}

export function ContactInfo({ form, errors, onChange }: Props) {
  const { data: attendants } = useAttendants();

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900">Your Contact Details</h2>
      <p className="mt-1 text-sm text-gray-500">We'll use this to confirm your booking. No account needed.</p>

      <div className="mt-5 space-y-4">
        <div>
          <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="customerName"
            type="text"
            placeholder="John Doe"
            value={form.customerName}
            onChange={(e) => onChange('customerName', e.target.value)}
            className={`mt-1 block w-full rounded-lg border px-3.5 py-2.5 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
              errors.customerName ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.customerName && <p className="mt-1 text-xs text-red-600">{errors.customerName}</p>}
        </div>

        <div>
          <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="customerPhone"
            type="tel"
            placeholder="0758 003003"
            value={form.customerPhone}
            onChange={(e) => onChange('customerPhone', e.target.value)}
            className={`mt-1 block w-full rounded-lg border px-3.5 py-2.5 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
              errors.customerPhone ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.customerPhone && <p className="mt-1 text-xs text-red-600">{errors.customerPhone}</p>}
        </div>

        <div>
          <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700">
            Email <span className="text-gray-400 font-normal">(optional — for confirmation)</span>
          </label>
          <input
            id="customerEmail"
            type="email"
            placeholder="john@example.com"
            value={form.customerEmail}
            onChange={(e) => onChange('customerEmail', e.target.value)}
            className={`mt-1 block w-full rounded-lg border px-3.5 py-2.5 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
              errors.customerEmail ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.customerEmail && <p className="mt-1 text-xs text-red-600">{errors.customerEmail}</p>}
        </div>

        {/* Preferred Attendant */}
        <div>
          <label htmlFor="preferredAttendant" className="block text-sm font-medium text-gray-700">
            Preferred Attendant <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <select
            id="preferredAttendant"
            value={form.preferredAttendantId}
            onChange={(e) => onChange('preferredAttendantId', Number(e.target.value))}
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option value={0}>No preference</option>
            {attendants?.map((att) => (
              <option key={att.id} value={att.id}>
                {att.firstName} {att.lastName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}