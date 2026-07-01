import api from './client';
import type { BookingFormData, BookingResponse } from '../types/booking';

export async function createBooking(
  data: BookingFormData
): Promise<BookingResponse> {
  // Strip empty strings — backend expects null/undefined for optional fields
  const payload = {
    ...data,
    customerEmail: data.customerEmail || undefined,
    vehiclePlate: data.vehiclePlate || undefined,
    notes: data.notes || undefined,
  };

  const response = await api.post<BookingResponse>('/bookings', payload);
  return response.data;
}