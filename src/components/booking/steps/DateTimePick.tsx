import { useMemo } from 'react';
import type { BookingFormData } from '../../../types/booking';

interface Props {
  form: BookingFormData;
  errors: Record<string, string>;
  onChange: <K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) => void;
}

// Operating hours — in production, fetch from backend or config
const OPEN_HOUR = 8;
const CLOSE_HOUR = 17;
const SLOT_INTERVAL = 30; // minutes

export function DateTimePick({ form, errors, onChange }: Props) {
  // Generate next 14 available dates (skip past days and Sundays)
  const availableDates = useMemo(() => {
    const dates: string[] = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      // Skip Sundays
      if (d.getDay() === 0) continue;
      dates.push(d.toISOString().split('T')[0]);
    }
    return dates;
  }, []);

  // Generate time slots
  const timeSlots = useMemo(() => {
    const slots: string[] = [];
    for (let h = OPEN_HOUR; h < CLOSE_HOUR; h++) {
      for (let m = 0; m < 60; m += SLOT_INTERVAL) {
        slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
      }
    }
    return slots;
  }, []);

  function formatDateLabel(dateStr: string): string {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  }

  function formatTimeLabel(time: string): string {
    const [h, m] = time.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 || 12;
    return `${hour12}:${String(m).padStart(2, '0')} ${ampm}`;
  }

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900">Pick a Date & Time</h2>
      <p className="mt-1 text-sm text-gray-500">Select your preferred appointment slot.</p>

      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {availableDates.map((date) => (
            <button
              key={date}
              type="button"
              onClick={() => {
                onChange('scheduledDate', date);
                // Reset time if date changes
                onChange('scheduledTime', '');
              }}
              className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition ${
                form.scheduledDate === date
                  ? 'border-brand-600 bg-brand-50 text-brand-700'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
              }`}
            >
              {formatDateLabel(date)}
            </button>
          ))}
        </div>
        {errors.scheduledDate && <p className="mt-1 text-xs text-red-600">{errors.scheduledDate}</p>}
      </div>

      {form.scheduledDate && (
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => onChange('scheduledTime', time)}
                className={`rounded-lg border-2 px-3 py-2 text-center text-sm font-medium transition ${
                  form.scheduledTime === time
                    ? 'border-brand-600 bg-brand-50 text-brand-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                }`}
              >
                {formatTimeLabel(time)}
              </button>
            ))}
          </div>
          {errors.scheduledTime && <p className="mt-1 text-xs text-red-600">{errors.scheduledTime}</p>}
        </div>
      )}
    </div>
  );
}