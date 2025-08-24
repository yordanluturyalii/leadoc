import z from "zod";

export const ResetSchema = z.object({
    email: z.string().email().optional().nullable(),
    new_password: z.string().min(8),
    confirm_password: z.string().min(8),
    token: z.string().optional().nullable()
}).refine(({confirm_password, new_password}) => new_password === confirm_password, {
    message: "The password confirmation does not match.",
    path: ["confirm_password"]
})

export type ResetPassword = z.infer<typeof ResetSchema>;
export type ResetPasswordPayload = Omit<ResetPassword, 'confirm_password'>
