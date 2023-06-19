import { z } from 'zod';

export const imageSchema = z.object({
    image_url: z.string()
})

export const createPosterSchema = z.object({
    brand: z.string().nonempty("Marca é obrigatória"),
    model: z.string().nonempty("Modelo é obrigatório"),
    year: z.string().optional(),
    fuel_type: z.string().optional(),
    kilometers: z.string().nonempty("Quilometragem é obrigatória"),
    color: z.string().nonempty("Cor é obrigatória"),
    fipe_price: z.string().optional(),
    price: z.string().nonempty("Preço é obrigatório"),
    description: z.string().nonempty("Coloque uma descrição"),
    images: z.array(imageSchema).optional(),
})

