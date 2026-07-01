import { useMemo, useState } from 'react';
import type { PublicService } from '../../../types/booking';

interface Props {
  services: PublicService[];
  selected: number[];
  errors: Record<string, string>;
  onChange: (ids: number[]) => void;
}

// Consistent colors for category headers (mimics getCategoryColor)
const CATEGORY_COLORS = [
  { left: 'border-l-blue-500', text: 'text-blue-600', row: 'bg-blue-50' },
  { left: 'border-l-green-500', text: 'text-green-600', row: 'bg-green-50' },
  { left: 'border-l-purple-500', text: 'text-purple-600', row: 'bg-purple-50' },
  { left: 'border-l-orange-500', text: 'text-orange-600', row: 'bg-orange-50' },
  { left: 'border-l-pink-500', text: 'text-pink-600', row: 'bg-pink-50' },
  { left: 'border-l-teal-500', text: 'text-teal-600', row: 'bg-teal-50' },
];

function getCategoryColor(cat: string) {
  let hash = 0;
  for (let i = 0; i < cat.length; i++) hash = cat.charCodeAt(i) + ((hash << 5) - hash);
  return CATEGORY_COLORS[Math.abs(hash) % CATEGORY_COLORS.length];
}

function formatKES(amount: number) {
  return `KES ${amount.toLocaleString()}`;
}

export function ServiceSelect({ services, selected, errors, onChange }: Props) {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  // Group services by category
    const grouped = useMemo(() => {
    const map: Record<string, PublicService[]> = {};
    services.forEach((s) => {
      // Fallback: use text field first, then relation name, then 'Other'
      const catName = s.category || s.serviceCategory?.name || 'Other';
      if (!map[catName]) map[catName] = [];
      map[catName].push(s);
    });
    return map;
  }, [services]);

  // Open all categories by default on first load
  
  function toggleCategory(cat: string) {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }

  function toggleService(id: number) {
    if (selected.includes(id)) {
      onChange(selected.filter((s) => s !== id));
    } else {
      onChange([...selected, id]);
    }
  }

  function selectAllInCategory(cat: string, catServices: PublicService[]) {
    const allSelected = catServices.every((s) => selected.includes(s.id));
    if (allSelected) {
      const idsToRemove = new Set(catServices.map((s) => s.id));
      onChange(selected.filter((id) => !idsToRemove.has(id)));
    } else {
      const newIds = catServices.filter((s) => !selected.includes(s.id)).map((s) => s.id);
      onChange([...selected, ...newIds]);
    }
  }

  const total = services
    .filter((s) => selected.includes(s.id))
    .reduce((sum, s) => sum + s.basePrice, 0);

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900">Choose Your Services</h2>
      <p className="mt-1 text-sm text-gray-500">Select one or more services for your vehicle.</p>

      {errors.serviceIds && (
        <p className="mt-2 text-sm text-red-600">{errors.serviceIds}</p>
      )}

      <div className="mt-5 space-y-4">
                {Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b)).map(([category, catServices]) => {
          const isOpen = openCategories.has(category);
          const color = getCategoryColor(category);
          const allSelected = catServices.every((s) => selected.includes(s.id));
          const catSelectedCount = catServices.filter((s) => selected.includes(s.id)).length;

          return (
            <div key={category} className="border border-gray-100 rounded-xl overflow-hidden">
              {/* Category Header */}
              <button
                type="button"
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="font-medium text-gray-800">{category}</span>
                  <span className="text-xs text-gray-400">({catServices.length})</span>
                  {catSelectedCount > 0 && (
                    <span className="ml-1 rounded-full bg-brand-100 px-2 py-0.5 text-xs font-bold text-brand-700">
                      {catSelectedCount}
                    </span>
                  )}
                </div>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    selectAllInCategory(category, catServices);
                  }}
                  className={`text-xs font-medium hover:underline cursor-pointer ${color.text} opacity-80 hover:opacity-100`}
                >
                  {allSelected ? 'Deselect All' : 'Select All'}
                </span>
              </button>

              {/* Services List */}
              {isOpen && (
                <div className="divide-y divide-gray-50 p-2">
                  {catServices.map((svc) => {
                    const isSelected = selected.includes(svc.id);
                    return (
                      <div
                        key={svc.id}
                        onClick={() => toggleService(svc.id)}
                        className={`flex items-center justify-between gap-3 p-3 rounded-xl cursor-pointer border-l-4 transition-all duration-150 ${
                          isSelected
                            ? `${color.left} ${color.row}`
                            : 'border-l-transparent bg-white hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition ${
                              isSelected
                                ? 'border-brand-600 bg-brand-600'
                                : 'border-gray-300'
                            }`}
                          >
                            {isSelected && (
                              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className={`text-sm font-medium truncate ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                              {svc.name}
                            </p>
                            {svc.estimatedMins && (
                              <p className="text-xs text-gray-400">~{svc.estimatedMins} min</p>
                            )}
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-800 flex-shrink-0">
                          {formatKES(svc.basePrice)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selected.length > 0 && (
        <div className="mt-5 flex items-center justify-end border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-500">Estimated total:</p>
          <p className="ml-3 text-xl font-bold text-brand-700">
            {formatKES(total)}
          </p>
        </div>
      )}
    </div>
  );
}