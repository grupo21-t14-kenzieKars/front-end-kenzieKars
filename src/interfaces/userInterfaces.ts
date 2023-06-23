import { z } from 'zod'
import { addressEditSchema, editUserSchema } from "../schemas/editUserSchema";

export interface IUser {
    name: string;
    is_seller: boolean;
    description: string;
    id: string;
    email: string;
    password: string;
  }

export type IEditUser = z.infer<typeof editUserSchema>;
export type IAddressEdit = z.infer<typeof addressEditSchema>;

