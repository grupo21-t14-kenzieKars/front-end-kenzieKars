import { z } from "zod";

const PasswordForgotSchema = z.object({
  email: z
    .string()
    .nonempty("Email obrigatório")
    .email("Deve ser um email válido"),
});

export default PasswordForgotSchema;
