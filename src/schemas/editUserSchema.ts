import { z } from 'zod';

const editUserSchema = z.object({
    name: z.string(),
    email: z.string(),
    birth_date: z.string(),
    cpf: z.string(),
    phone: z.string(),
    description: z.string()
}).partial();

export default editUserSchema;
