import { z } from 'zod';

export const addressSchema = z.object({
    zip_code: z.string().refine((value: string) => /^[0-9]{5}-[0-9]{3}$/.test(value), {
        message: 'CEP inválido. Insira um CEP válido no formato 12345-678.',
    }),
    city: z.string().max(50, 'maximo de 50 caracteres').min(3, 'Minimo de 3 caracteres'),
    state: z.string().length(2, "Somente a sigla"),
    street: z.string().max(127, 'maximo de 127 caracteres').min(3, 'minimo de 3 caracteres'),
    number: z.string().max(20).optional(),
    complement: z.string().max(127, 'maximo de 127 caracteres').optional(),
}).partial()

export const editUserSchema = z.object({
    name: z.string(),
    email: z.string(),
    birth_date: z.string(),
    cpf: z.string(),
    phone: z.string(),
    description: z.string(),
    address: addressSchema.partial()
}).partial();

export const addressEditSchema = z.object({
    address: addressSchema.partial()
})

