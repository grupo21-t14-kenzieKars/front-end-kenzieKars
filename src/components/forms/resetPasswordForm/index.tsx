import { Button, FormControl, FormErrorMessage, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IResetPassword } from "../../../interfaces/forgotPassword.interfaces";
import resetPasswordSchema from "../../../schemas/resetPassword.schema";
import InputWithLabel from "../../input";

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IResetPassword>({
    mode: "onBlur",
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: IResetPassword): void => {
    console.log(data);
    reset();
  };

  return (
    <>
      <FormControl
        w="90%"
        maxWidth="412px"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        fontFamily="heading"
        marginTop={{ base: "40px", md: "122px" }}
        gap={4}
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
        padding={"40px"}
        borderRadius={"4px"}
        bg="white"
      >
        <Text
          w={"full"}
          textAlign={"left"}
          fontSize="heading.4"
          fontWeight="medium"
          color="grey.0"
          marginBottom={6}
        >
          Criar Nova Senha
        </Text>
        <InputWithLabel
          placeHolder={"Digite a nova senha"}
          id={"password"}
          type="password"
          label={"Nova Senha"}
          register={register("password")}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
        <InputWithLabel
          placeHolder={"Confirme a nova senha"}
          id={"confirmPassword"}
          type="password"
          label={"Confirmar Senha"}
          register={register("confirmPassword")}
        />
        <FormErrorMessage>
          {errors.confirmPassword && errors.confirmPassword.message}
        </FormErrorMessage>
        <Button type="submit" size={"lg"} w={"full"}>
          Atualizar Senha
        </Button>
      </FormControl>
    </>
  );
};

export default ResetPasswordForm;
