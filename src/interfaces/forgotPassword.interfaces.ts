import { z } from "zod";
import forgotPasswordSchema from "../schemas/forgotPassword.schema";
import resetPasswordSchema from "../schemas/resetPassword.schema";

type IForgotPassword = z.infer<typeof forgotPasswordSchema>;
type IResetPassword = z.infer<typeof resetPasswordSchema>;

export type { IForgotPassword ,IResetPassword};
