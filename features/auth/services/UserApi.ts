import { api } from '@/features/shared/hooks/useApi';

export const userLogin = async (data: any) => {
  const response = await api.post('/api/auth/login', data)
  return response.data
}