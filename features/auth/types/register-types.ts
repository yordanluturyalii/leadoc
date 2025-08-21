import { z, ZodType } from "zod";

export type RegisterData = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string
};

export const RegisterSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirmation: z.string().min(8)
}).refine(({passwordConfirmation, password}) => password === passwordConfirmation, {
    message: "The password confirmation does not match.",
    path: ["password"]
});