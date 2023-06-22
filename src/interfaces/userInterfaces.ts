import { z } from 'zod'
import { addressEditSchema, editUserSchema } from "../schemas/editUserSchema";

export type IEditUser = z.infer<typeof editUserSchema>;
export type IAddressEdit = z.infer<typeof addressEditSchema>;

