import { z } from 'zod';
import editUserSchema from "../schemas/editUserSchema";

export type IEditUser = z.infer<typeof editUserSchema>;

