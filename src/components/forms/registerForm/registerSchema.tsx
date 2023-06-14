import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email('Digite um email valido'),
    name: z.string().max(50).min(3, 'O nome deve conter no minimo 3 carachteres'),
    cpf: z.string().refine((value) => /^\d{11}$/.test(value), {
        message: 'CPF inválido. O CPF deve ter 11 dígitos numéricos.',}),
    phone: z.string().refine((value) => /^\([1-9]{2}\)\s9?[6-9]{1}[0-9]{3}\-[0-9]{4}$/.test(value), {
        message: 'Número de telefone inválido. Insira um número de telefone válido no formato (xx) 9xxxx-xxxx.',}),
    birth_date: z.date(),
    description: z.string(),
    password: z.string(),
    is_seller: z.boolean(),
    zip_code: z.string().refine((value) => /^[0-9]{5}\-[0-9]{3}$/.test(value), {
        message: 'CEP inválido. Insira um CEP válido no formato 12345-678.',}),
    city: z.string().max(50),
    state: z.string().length(2),
    street: z.string().max(127),
    number: z.string().max(20).optional(),
    complement: z.string().max(127).optional(),
})

export type LoginData = z.infer<typeof loginSchema>;

export default loginSchema