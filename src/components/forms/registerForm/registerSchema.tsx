import { z } from "zod";

const registerScehma = z.object({
    email: z.string().email('Digite um email valido'),
    name: z.string().max(50).min(3, 'O nome deve conter no minimo 3 caracteres'),
    cpf: z.string().refine((value: string) => /^\d{11}$/.test(value), {
        message: 'CPF inválido. O CPF deve ter 11 dígitos numéricos.',
    }),
    phone: z.string()
        .refine((value: string) => /^\([1-9]{2}\)\s9?[6-9]{1}[0-9]{3}-[0-9]{4}$/.test(value),
            { message: 'Número de telefone inválido. Insira um número de telefone válido no formato (xx) 9xxxx-xxxx.' }),
    birth_date: z.string().refine((value: string) => {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return regex.test(value);
    }, {
        message: 'Data inválida. O formato deve ser DD/MM/AAAA.',
    }),
    description: z.string(),
    password: z.string().min(6, 'A senha deve conter no minimo 6 caracteres'),
    repeat_password: z.string().min(1, 'Este campo é obrigatório'),
    is_seller: z.boolean().optional().default(false),
    zip_code: z.string().refine((value: string) => /^[0-9]{5}-[0-9]{3}$/.test(value), {
        message: 'CEP inválido. Insira um CEP válido no formato 12345-678.',
    }),
    city: z.string().max(50, 'maximo de 50 caracteres').min(3, 'Minimo de 3 caracteres'),
    state: z.string().length(2, "Somente a sigla"),
    street: z.string().max(127, 'maximo de 127 caracteres').min(3, 'minimo de 3 caracteres'),
    number: z.string().max(20).optional(),
    complement: z.string().max(127, 'maximo de 127 caracteres').optional(),
}).refine(({ password, repeat_password }) => password === repeat_password, {
    message: "As senhas precisam ser iguais",
    path: ["repeat_password"],
})

export type RegisterData = z.infer<typeof registerScehma>;

export default registerScehma