import { api } from './client';
import type { PublicAttendant } from '../types/booking';

export async function fetchAttendants(): Promise<PublicAttendant[]> {
  const response = await api.get<{ success: boolean; data: PublicAttendant[] }>('/attendants');
  return response.data.data;
}