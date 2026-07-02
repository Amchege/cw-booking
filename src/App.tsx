import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BookingWizard } from './components/booking/BookingWizard';
import { StatusCheck } from './components/booking/StatusCheck';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  const isStatusPage = new URLSearchParams(window.location.search).has('ref');
  const [mode, setMode] = useState<'book' | 'track'>(isStatusPage ? 'track' : 'book');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-900">Nexus CarWash</span>
            </div>
            <a
              href="tel:+15551234567"
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              0758 003003
            </a>
          </div>
        </header>

        {/* Main content */}
        <main>
          <div className="mx-auto max-w-4xl px-4 py-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {mode === 'book' ? 'Book Your Car Wash' : 'Check Booking Status'}
              </h1>
              <p className="mt-2 text-gray-500">
                {mode === 'book' 
                  ? 'Choose your services, pick a time, and we\'ll handle the rest.' 
                  : 'Enter your reference code to see your appointment status.'}
              </p>
            </div>

            {/* Toggle Tabs */}
            <div className="mt-6 flex justify-center">
              <div className="inline-flex rounded-lg border border-gray-200 bg-gray-100 p-1">
                <button
                  onClick={() => setMode('book')}
                  className={`rounded-md px-5 py-2 text-sm font-medium transition-all ${
                    mode === 'book'
                      ? 'bg-white text-brand-700 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Book a Wash
                </button>
                <button
                  onClick={() => setMode('track')}
                  className={`rounded-md px-5 py-2 text-sm font-medium transition-all ${
                    mode === 'track'
                      ? 'bg-white text-brand-700 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Track Booking
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          {mode === 'book' ? <BookingWizard /> : <StatusCheck />}
        </main>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 bg-white py-8">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Nexus CarWash. All rights reserved (c) Alpha Solutions.
          </p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}