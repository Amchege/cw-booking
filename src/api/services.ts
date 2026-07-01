import api from './client';
import type { PublicService } from '../types/booking';

export async function fetchServices(): Promise<PublicService[]> {
  const response = await api.get<{ success: boolean; data: PublicService[] }>('/services');
  return response.data.data;
}