import { useQuery } from '@tanstack/react-query'
import { apiClient } from './client'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const result = await apiClient.get<GetRoomQuestionsResponse>(
        `/rooms/${roomId}/questions`
      )

      return result
    },
  })
}
