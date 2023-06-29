import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email('Email Inválido'),
    password: z.string().nonempty('Senha obrigatória')
})

export type LoginData = z.infer<typeof loginSchema>;

export default loginSchema