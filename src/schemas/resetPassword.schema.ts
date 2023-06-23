import { z } from "zod";

const PasswordResetSchema = z.object({
  password: z
    .string()
    .nonempty("Senha obrigatória")
    .min(6, "Mínimo de 6 caracteres"),
  confirmPassword: z
    .string()
    .nonempty("Confirmação de senha obrigatória")
  
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmPassword"],
});

export default PasswordResetSchema;

