import { useAttendants } from '../../../hooks/useAttendants';
import type { BookingFormData, PublicService } from '../../../types/booking';

interface Props {
  form: BookingFormData;
  services: PublicService[];
  onSubmit: () => void;
  isSubmitting: boolean;
}

export function ReviewSubmit({ form, services, onSubmit, isSubmitting }: Props) {
  const { data: attendants } = useAttendants();
  const selectedAttendant = attendants?.find((a) => a.id === form.preferredAttendantId);

  const selectedServices = services.filter((s) => form.serviceIds.includes(s.id));
  const total = selectedServices.reduce((sum, s) => sum + s.basePrice, 0);

  function formatDate(dateStr: string) {
    const d = new Date(dateStr + 'T00:00:00');
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
    <div>
      <h2 className="text-lg font-bold text-gray-900">Review Your Booking</h2>
      <p className="mt-1 text-sm text-gray-500">Please confirm everything looks correct before submitting.</p>

      <div className="mt-6 space-y-5">
        {/* Services */}
        <section>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Services</h3>
          <ul className="mt-2 divide-y divide-gray-100">
            {selectedServices.map((s) => (
              <li key={s.id} className="flex justify-between py-2 text-sm">
                <span className="text-gray-800">{s.name}</span>
                <span className="font-medium text-gray-900">KES {s.basePrice.toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex justify-end border-t border-gray-200 pt-2">
            <span className="text-lg font-bold text-brand-700">KES {total.toLocaleString()}</span>
          </div>
        </section>

        {/* Vehicle */}
        <section>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Vehicle</h3>
          <p className="mt-1 text-sm text-gray-800">
            {form.vehicleColor} {form.vehicleMake} {form.vehicleModel}
            {form.vehiclePlate && (
              <span className="text-gray-400"> — {form.vehiclePlate}</span>
            )}
          </p>
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Contact</h3>
          <p className="mt-1 text-sm text-gray-800">{form.customerName}</p>
          <p className="text-sm text-gray-600">{form.customerPhone}</p>
          {form.customerEmail && (
            <p className="text-sm text-gray-600">{form.customerEmail}</p>
          )}
        </section>

        {/* Preferred Attendant */}
        {selectedAttendant && (
          <section>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Preferred Attendant</h3>
            <p className="mt-1 text-sm text-gray-800">
              {selectedAttendant.firstName} {selectedAttendant.lastName}
            </p>
          </section>
        )}

        {/* Schedule */}
        <section>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Appointment</h3>
          <p className="mt-1 text-sm text-gray-800">
            {formatDate(form.scheduledDate)} at {formatTime(form.scheduledTime)}
          </p>
        </section>

        {/* Notes */}
        {form.notes && (
          <section>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Notes</h3>
            <p className="mt-1 text-sm text-gray-600">{form.notes}</p>
          </section>
        )}
      </div>

      {/* Submit */}
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="flex-1 rounded-lg bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </span>
          ) : (
            'Confirm Booking'
          )}
        </button>
      </div>
    </div>
  );
}