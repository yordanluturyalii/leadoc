import { useQuery } from "@tanstack/react-query";
import { api } from "./useApi";

export function useCurrentUser() {
    return useQuery({
        queryKey: ['me'],
        queryFn: async () => {
            const response = await api.get('/api/user/me');
            return response.data;
        },
        retry: 1,
        staleTime: 5 * 60 * 1000
    });
}