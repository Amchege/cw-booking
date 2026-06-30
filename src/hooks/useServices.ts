import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '../api/services';

export function useServices() {
  return useQuery({
    queryKey: ['public-services'],
    queryFn: fetchServices,
    staleTime: 10 * 60 * 1000, // 10 min — service list rarely changes
    retry: 2,
  });
}