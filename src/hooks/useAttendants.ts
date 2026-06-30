import { useQuery } from '@tanstack/react-query';
import { fetchAttendants } from '../api/attendants';

export function useAttendants() {
  return useQuery({
    queryKey: ['public-attendants'],
    queryFn: fetchAttendants,
    staleTime: 10 * 60 * 1000, // 10 min
    retry: 2,
  });
}