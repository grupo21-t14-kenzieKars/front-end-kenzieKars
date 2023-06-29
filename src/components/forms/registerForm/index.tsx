import { Button, Flex, FormControl, Spinner, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import registerSchema, { RegisterData } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputWithLabel from "../../input";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/userContext";
import StateSelect from "../../input/stateSelect";

const RegisterForm = () => {
  const [seller, setSeller] = useState(false);
  const { createUser, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterData) => {

    const address = {
      zip_code: data.zip_code.replace(/[-]/g, ""),
      city: data.city,
      state: data.state,
      street: data.street,
      number: data.number,
      complement: data.complement
    }

    const formatData = { ...data, address: address }
    formatData.phone = `55${formatData.phone.replace(/[\s()-]/g, "")}`
    formatData.birth_date = formatData.birth_date.replace(/[/]/g, "-")
    formatData.is_seller = seller
    createUser(formatData);
  };
  return (
    <FormControl
      isInvalid={!!errors}
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
        Cadastro
      </Text>
      <Text
        w={"full"}
        textAlign={"left"}
        fontSize="heading.1"
        fontWeight="medium"
        color="grey.0"
        marginBottom={2}
      >
        Informações pessoais
      </Text>
      <InputWithLabel
        placeHolder={"Digitar nome"}
        id={"name"}
        type="text"
        label={"Nome"}
        error={errors.name}
        register={register("name")}
      />
      <InputWithLabel
        placeHolder={"Digitar email"}
        id={"email"}
        type="email"
        label={"Email"}
        error={errors.email}
        register={register("email")}
      />
      <InputWithLabel
        placeHolder={"Digitar CPF"}
        id={"cpf"}
        type="text"
        label={"CPF"}
        error={errors.cpf}
        onKeyUp={(event: any) => {
          const value = event.target.value.replace(/\D/g, "");
          const match = value.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);

          if (match) {
            event.target.value = `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
          } else {
            event.target.value = value;
          }
        }}
        register={register("cpf")}
      />
      <InputWithLabel
        placeHolder={"Digitar numero"}
        id={"phone"}
        type="text"
        label={"Celular"}
        error={errors.phone}
        onKeyUp={(event: any) => {
          const value = event.target.value.replace(/\D/g, "");
          const match = value.match(/^(\d{2})(\d{5})(\d{4})$/);

          if (match) {
            event.target.value = `(${match[1]}) ${match[2]}-${match[3]}`;
          } else {
            event.target.value = value;
          }
        }}
        register={register("phone")}
      />
      <InputWithLabel
        placeHolder={"Digitar data de nascimento"}
        id={"birth_date"}
        type="text"
        label={"Data de nascimento"}
        onKeyUp={(event: any) => {
          const value = event.target.value.replace(/\D/g, "");
          const match = value.match(/^(\d{2})(\d{2})(\d{4})$/);

          if (match) {
            event.target.value = `${match[1]}/${match[2]}/${match[3]}`;
          } else {
            event.target.value = value;
          }
        }}
        error={errors.birth_date}
        register={register("birth_date")}
      />
      <InputWithLabel
        placeHolder={"Digitar Descrição"}
        id={"description"}
        type="text"
        label={"Descrição"}
        error={errors.description}
        register={register("description")}
      />
      <Text
        w={"full"}
        textAlign={"left"}
        fontSize="heading.1"
        fontWeight="medium"
        color="grey.0"
        marginBottom={2}
      >
        Informações de endereço
      </Text>
      <InputWithLabel
        placeHolder={"Digitar CEP"}
        id={"zip_code"}
        type="text"
        label={"CEP"}
        error={errors.zip_code}
        onKeyUp={(event: any) => {
          const value = event.target.value.replace(/\D/g, "");
          const match = value.match(/^(\d{5})(\d{3})$/);

          if (match) {
            event.target.value = `${match[1]}-${match[2]}`;
          } else {
            event.target.value = value;
          }
        }}
        register={register("zip_code")}
      />
      <Flex gap={5}>
        <StateSelect
          id={"state"}
          label={"Estado"}
          register={register("state")}
        />
        <InputWithLabel
          placeHolder={"Digitar cidade"}
          id={"city"}
          type="text"
          label={"Cidade"}
          error={errors.city}
          register={register("city")}
        />
      </Flex>
      <InputWithLabel
        placeHolder={"Digitar rua"}
        id={"street"}
        type="text"
        label={"Rua"}
        error={errors.street}
        register={register("street")}
      />
      <Flex>
        <InputWithLabel
          placeHolder={"Digitar número"}
          id={"number"}
          type="text"
          label={"Numero"}
          error={errors.number}
          register={register("number")}
        />
        <InputWithLabel
          placeHolder={"Digitar complemento"}
          id={"complement"}
          type="text"
          label={"Complemento"}
          error={errors.complement}
          register={register("complement")}
        />
      </Flex>
      <Text
        w={"full"}
        textAlign={"left"}
        fontSize="heading.1"
        fontWeight="medium"
        color="grey.0"
        marginBottom={2}
      >
        Tipo de conta
      </Text>
      {!seller ? (
        <Flex w={"full"} justifyContent={"space-between"}>
          <Button
            size={"md"}
            type="button"
            w="45%"
            onClick={() => setSeller(false)}
          >
            Comprador
          </Button>
          <Button
            size={"md"}
            type="button"
            variant={"outline2"}
            w="45%"
            onClick={() => setSeller(true)}
          >
            Anunciante
          </Button>
        </Flex>
      ) : (
        <Flex w={"full"} justifyContent={"space-between"}>
          <Button
            size={"md"}
            type="button"
            w="45%"
            variant={"outline2"}
            onClick={() => setSeller(false)}
          >
            Comprador
          </Button>
          <Button
            size={"md"}
            type="button"
            w="45%"
            onClick={() => setSeller(true)}
          >
            Anunciante
          </Button>
        </Flex>
      )}
      <InputWithLabel
        placeHolder={"Digitar senha"}
        id={"password"}
        type="password"
        label={"Senha"}
        error={errors.password}
        register={register("password")}
      />
      <InputWithLabel
        placeHolder={"Repetir senha"}
        id={"repeat_password"}
        type="password"
        label={"Repetir senha"}
        error={errors.repeat_password}
        register={register("repeat_password")}
      />
      <Button type="submit" size={"lg"} w={"full"}>
        {loading ? <Spinner /> : <>Finalizar cadastro</>}
      </Button>
    </FormControl>
  );
};

export default RegisterForm;
