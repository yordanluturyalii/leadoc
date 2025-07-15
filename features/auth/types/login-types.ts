import { z } from 'zod';

export type LoginType = {
 email: string
 password: string
}

export const LoginSchema = z.object({
 email: z.string().email(),
 password: z.string().min(8)
})