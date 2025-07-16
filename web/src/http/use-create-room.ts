import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from './client'
import type { CreateRoomRequest } from './types/create-room-request'
import type { CreateRoomResponse } from './types/create-room-response'

export function useCreateRoom() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      const result = await apiClient.post<CreateRoomResponse>('/rooms', data)
      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] })
    },
  })
}
