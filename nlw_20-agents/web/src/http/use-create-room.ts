import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { CreateRoomRequest } from "./types/create-room-resquest"
import type { CreateRoomResponse } from "./types/create-room-response"

export function useCreateRoom() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      const response = await fetch("http://localhost:3333/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const result: CreateRoomResponse = await response.json()

      return result
    },
    
    // Uma forma de atualizar a pagina quando uma sala for criada pelo usuário
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms']})
    }
  })
}
