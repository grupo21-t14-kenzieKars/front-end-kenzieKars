import { z } from 'zod';

export const imageSchema = z.object({
    one: z.string(),
    two: z.string().optional(),
    three: z.string().optional(),
    four: z.string().optional(),
    five: z.string().optional(),
    six: z.string().optional(),
}).partial()

export const createPosterSchema = z.object({
    brand: z.string().nonempty("Marca é obrigatória"),
    model: z.string().nonempty("Modelo é obrigatório"),
    year: z.string(),
    fuel_type: z.string(),
    kilometers: z.string().nonempty("Quilometragem é obrigatória"),
    color: z.string().nonempty("Cor é obrigatória"),
    fipe_price: z.string(),
    price: z.string().nonempty("Preço é obrigatório"),
    description: z.string().nonempty("Coloque uma descrição"),
    images: imageSchema,
})

