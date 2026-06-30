import { VEHICLE_TYPES, VEHICLE_MAKES_MODELS, VEHICLE_COLORS } from '../../../lib/vehicles-data';
import type { BookingFormData } from '../../../types/booking';

interface Props {
  form: BookingFormData;
  errors: Record<string, string>;
  onChange: <K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) => void;
}

// Sort Types and Makes alphabetically
const SORTED_TYPES = [...VEHICLE_TYPES].sort((a, b) => a.label.localeCompare(b.label));
const SORTED_MAKES = Object.keys(VEHICLE_MAKES_MODELS).sort();

export function VehicleInfo({ form, errors, onChange }: Props) {
  // Sort Models alphabetically when a make is selected
  const availableModels = form.vehicleMake 
    ? (VEHICLE_MAKES_MODELS[form.vehicleMake] || []).sort((a, b) => a.localeCompare(b)) 
    : [];

  function handleMakeChange(newMake: string) {
    onChange('vehicleMake', newMake);
    if (form.vehicleMake !== newMake) {
      onChange('vehicleModel', '');
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-gray-900">Vehicle Information</h2>
        <p className="mt-1 text-sm text-gray-500">Tell us about your vehicle so we can prepare the right bay.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Vehicle Type */}
        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
            Type <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <select
            id="vehicleType"
            value={form.vehicleType}
            onChange={(e) => onChange('vehicleType', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option value="">Select type...</option>
            {SORTED_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>

        {/* Vehicle Make */}
        <div>
          <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700">
            Make <span className="text-red-500">*</span>
          </label>
          <select
            id="vehicleMake"
            value={form.vehicleMake}
            onChange={(e) => handleMakeChange(e.target.value)}
            className={`mt-1 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
              errors.vehicleMake ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">Select make...</option>
            {SORTED_MAKES.map((make) => (
              <option key={make} value={make}>{make.charAt(0) + make.slice(1).toLowerCase()}</option>
            ))}
          </select>
          {errors.vehicleMake && <p className="mt-1 text-xs text-red-600">{errors.vehicleMake}</p>}
        </div>

        {/* Vehicle Model */}
        <div>
          <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700">
            Model <span className="text-red-500">*</span>
          </label>
          <select
            id="vehicleModel"
            value={form.vehicleModel}
            onChange={(e) => onChange('vehicleModel', e.target.value)}
            disabled={!form.vehicleMake}
            className={`mt-1 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400 ${
              errors.vehicleModel ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">{form.vehicleMake ? 'Select model...' : 'Select a make first...'}</option>
            {availableModels.map((model) => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
          {errors.vehicleModel && <p className="mt-1 text-xs text-red-600">{errors.vehicleModel}</p>}
        </div>

        {/* Vehicle Color */}
        <div>
          <label htmlFor="vehicleColor" className="block text-sm font-medium text-gray-700">
            Color <span className="text-red-500">*</span>
          </label>
          <select
            id="vehicleColor"
            value={form.vehicleColor}
            onChange={(e) => onChange('vehicleColor', e.target.value)}
            className={`mt-1 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 ${
              errors.vehicleColor ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">Select color...</option>
            {VEHICLE_COLORS.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
          {errors.vehicleColor && <p className="mt-1 text-xs text-red-600">{errors.vehicleColor}</p>}
        </div>

        {/* License Plate */}
        <div className="sm:col-span-2">
          <label htmlFor="vehiclePlate" className="block text-sm font-medium text-gray-700">
            License Plate <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="vehiclePlate"
            type="text"
            placeholder="ABC 1234"
            value={form.vehiclePlate}
            onChange={(e) => onChange('vehiclePlate', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>
      </div>
    </div>
  );
}