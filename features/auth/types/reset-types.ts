import { z } from 'zod';

export type resetPasswordType = {
  password: string,
  passwordConfirmation: string,
}

export const resetPasswordSchema = z.object({
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8),
}).refine(({password, passwordConfirmation}) => password === passwordConfirmation, {
  message: 'The password confirmation does not match.',
  path: ['password']
})