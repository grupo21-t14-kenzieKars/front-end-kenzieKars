import {
  Button,
  FormControl,
  FormErrorMessage,
  Link,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputWithLabel from "../../input";
import loginSchema, { LoginData } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";

const LoginForm = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData): void => {
    loginUser(data);
    reset();
  };
  return (
    <FormControl
      w="90%"
      maxWidth="412px"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      fontFamily="heading"
      marginTop={{ base: "52px", md: "122px" }}
      gap={2}
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
        Login
      </Text>
      <InputWithLabel
        placeHolder={"Digitar email"}
        id={"email"}
        type="email"
        label={"Email"}
        register={register("email")}
      />
      <FormErrorMessage>
        {errors.email && errors.email.message}
      </FormErrorMessage>
      <InputWithLabel
        placeHolder={"Digitar senha"}
        id={"password"}
        type="password"
        label={"Senha"}
        register={register("password")}
      />
      <Link
        fontSize={"heading.1"}
        fontWeight={"medium"}
        textAlign={"right"}
        w={"full"}
        marginBottom={6}
      >
        Esqueci minha senha
      </Link>
      <Button type="submit" size={"lg"} w={"full"}>
        Entrar
      </Button>
      <Text
        fontSize={"heading.1"}
        fontWeight={"normal"}
        textAlign={"center"}
        w={"full"}
        margin={6}
      >
        Ainda não possui conta
      </Text>
      <Button
        size={"lg"}
        type="button"
        variant={"outline2"}
        w={"full"}
        as={"a"}
        href="/register"
      >
        Cadastrar
      </Button>
    </FormControl>
  );
};

export default LoginForm;
