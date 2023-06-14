import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email('Email Inválido'),
    password: z.string().min(6, 'A senha deve contar no minimo 6 characteres')
})

export type LoginData = z.infer<typeof loginSchema>;

export default loginSchema