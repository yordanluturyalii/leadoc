import z from "zod";

export const ResetSchema = zobject({
    email: z.string().email(),
    new_password: z.string(),
    token: z.string()
})

export type ResetPassword = z.infer<typeof ResetSchema>;

