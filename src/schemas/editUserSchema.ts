import { z } from 'zod';

export const addressSchema = z.object({
    zip_code: z.string().refine((value: string) => /^[0-9]{5}-[0-9]{3}$/.test(value), {
        message: 'CEP inválido. Insira um CEP válido no formato 12345-678.',
    }).optional(),
    city: z.string().max(50, 'maximo de 50 caracteres').min(3, 'Minimo de 3 caracteres'),
    state: z.string().length(2, "Somente a sigla").optional(),
    street: z.string().max(127, 'maximo de 127 caracteres').min(3, 'minimo de 3 caracteres').optional(),
    number: z.string().max(20).optional(),
    complement: z.string().max(127, 'maximo de 127 caracteres').optional()
}).partial()

export const editUserSchema = z.object({
    email: z.string().email('Digite um email valido').optional(),
    name: z.string().max(50).min(3, 'O nome deve conter no minimo 3 caracteres').optional(),
    cpf: z
        .string()
        .length(14, "Deve conter 11 dígitos")
        .transform((cpf) => cpf.replace(/\D/g, "")).optional(),
    phone: z.string()
        .refine((value) => /^\([1-9]{2}\)\s9?[6-9]{1}[0-9]{3}-[0-9]{4}$/.test(value),
            { message: 'Número de telefone inválido. Insira um número de telefone válido no formato DDD 9xxxx-xxxx.' }).optional(),
    birth_date: z.string().refine((value) => {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return regex.test(value);
    }, {
        message: 'Data inválida. O formato deve ser DD/MM/AAAA.',
    }).optional(),
    description: z.string().optional(),
    address: addressSchema.partial()
});

export const addressEditSchema = z.object({
    address: addressSchema.partial()
})

