import { useState, useMemo } from 'react';
import type { BookingFormData, BookingResponse, ApiError } from '../../types/booking';
import { useServices } from '../../hooks/useServices';
import { useCreateBooking } from '../../hooks/useCreateBooking';
import { validateStep } from '../../lib/bookingSchema';
import { StepIndicator } from './StepIndicator';
import { ServiceSelect } from './steps/ServiceSelect';
import { VehicleInfo } from './steps/VehicleInfo';
import { ContactInfo } from './steps/ContactInfo';
import { DateTimePick } from './steps/DateTimePick';
import { ReviewSubmit } from './steps/ReviewSubmit';
import { Confirmation } from './Confirmation';

const STEPS = ['Services', 'Vehicle', 'Contact', 'Schedule', 'Review'];

const initialForm: BookingFormData = {
  serviceIds: [],
  vehicleType: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleColor: '',
  vehiclePlate: '',
  customerName: '',
  customerPhone: '',
  customerEmail: '',
  preferredAttendantId: 0,
  scheduledDate: '',
  scheduledTime: '',
  notes: '',
};

export function BookingWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<BookingFormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<BookingResponse['data'] | null>(null);
  const [apiError, setApiError] = useState<ApiError | null>(null);

  const { data: services, isLoading: servicesLoading } = useServices();
  const createBooking = useCreateBooking();

    // Check if selected services are ONLY carpets (vehicle info not needed)
  const selectedServicesData = useMemo(() => {
    if (!services) return [];
    return services.filter((s) => form.serviceIds.includes(s.id));
  }, [services, form.serviceIds]);

  const isOnlyCarpets = useMemo(() => {
    if (selectedServicesData.length === 0) return false;
    return selectedServicesData.every(
      (s) => (s.category || s.serviceCategory?.name || '') === 'Carpets'
    );
  }, [selectedServicesData]);

  function updateField<K extends keyof BookingFormData>(
    key: K,
    value: BookingFormData[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    // Clear field error on change
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setApiError(null);
  }

    function goNext() {
    const stepErrors = validateStep(form, step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    // Skip vehicle step if only carpets are selected
    if (step === 1 && isOnlyCarpets) {
      setStep(3);
      return;
    }
    setStep((s) => Math.min(s + 1, STEPS.length));
  }
  
    function goBack() {
    setErrors({});
    setApiError(null);
    // If we skipped vehicle step, go back to services
    if (step === 3 && isOnlyCarpets) {
      setStep(1);
      return;
    }
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit() {
    setApiError(null);
    try {
      const response = await createBooking.mutateAsync(form);
      setResult(response.data);
    } catch (err: any) {
      setApiError(err as ApiError);
    }
  }

  // Post-submission confirmation screen
  if (result) {
    return <Confirmation data={result} />;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <StepIndicator steps={STEPS} current={step} />

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        {step === 1 && services && (
          <ServiceSelect
            services={services}
            selected={form.serviceIds}
            errors={errors}
            onChange={(ids) => updateField('serviceIds', ids)}
          />
        )}
        {step === 2 && (
          <VehicleInfo form={form} errors={errors} onChange={updateField} />
        )}
        {step === 3 && (
          <ContactInfo form={form} errors={errors} onChange={updateField} />
        )}
        {step === 4 && (
          <DateTimePick form={form} errors={errors} onChange={updateField} />
        )}
        {step === 5 && services && (
            <ReviewSubmit
              form={form}
              services={services}
              onSubmit={handleSubmit}
              isSubmitting={createBooking.isPending}
              skipVehicle={isOnlyCarpets}
            />
          )}

        {/* API-level error banner */}
        {apiError && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            <p className="font-medium">{apiError.error.message}</p>
            {apiError.error.reference && (
              <p className="mt-1 text-red-600">
                Existing booking reference:{' '}
                <span className="font-mono font-bold">{apiError.error.reference}</span>
              </p>
            )}
          </div>
        )}

        {/* Navigation */}
        {step < STEPS.length && (
          <div className="mt-6 flex justify-between">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 1}
              className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Back
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={servicesLoading}
              className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {step === STEPS.length - 1 ? 'Review' : 'Continue'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}