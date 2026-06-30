import { useMutation } from '@tanstack/react-query';
import { createBooking } from '../api/bookings';
import type { BookingFormData } from '../types/booking';

export function useCreateBooking() {
  return useMutation({
    mutationFn: (data: BookingFormData) => createBooking(data),
    retry: false, // Don't retry on 409/422 — user needs to see the specific error
  });
}