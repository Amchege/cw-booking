interface Props {
  steps: string[];
  current: number;
}

export function StepIndicator({ steps, current }: Props) {
  return (
    <nav aria-label="Booking progress" className="flex items-center justify-center gap-1">
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const isCompleted = stepNum < current;
        const isActive = stepNum === current;

        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all ${
                  isCompleted
                    ? 'bg-brand-600 text-white'
                    : isActive
                    ? 'bg-brand-600 text-white ring-4 ring-brand-100'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {isCompleted ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={`mt-1.5 text-xs font-medium ${
                  isActive ? 'text-brand-700' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`mx-2 h-0.5 w-8 sm:w-14 ${
                  isCompleted ? 'bg-brand-500' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}