import z from "zod";

export const ForgotSchema = z.object({
  email: z.string().email(),
});

export type ForgotPassword = z.infer<typeof ForgotSchema>;
