import { useQuery } from '@tanstack/react-query'
import type { GetRoomsResponse } from '@/http/types/get-rooms-response'
import { apiClient } from './client'

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const result = await apiClient.get<GetRoomsResponse>('/rooms')
      return result
    },
  })
}
