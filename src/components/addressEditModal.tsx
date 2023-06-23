import { useContext, useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Modal,
  ModalCloseButton,
  ModalContent,
  Text,
  Button,
  ModalOverlay,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { UserContext } from "../contexts/userContext";
import { useForm } from "react-hook-form";
import { IAddressEdit } from "../interfaces/userInterfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressEditSchema } from "../schemas/editUserSchema";
import InputWithLabel from "./input";

interface IAddressEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

const AddressEditModal = ({ isOpen, onClose }: IAddressEditModalProps) => {
  const [loading, setLoading] = useState(false);

  const { user, editUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddressEdit>({
    mode: "onBlur",
    resolver: zodResolver(addressEditSchema),
  });

  useEffect(() => {
    if (user) {
      reset({
        address: {
          zip_code: user.address.zip_code.replace(/(\d{5})(\d{3})/, "$1-$2"),
          state: user.address.state,
          city: user.address.city,
          street: user.address.street,
        },
      });
    }
  }, [ user, isOpen]);

  const onCloseAndReset = () =>{
    onClose()
    reset()
  }

  const onSubmit = async (data: IAddressEdit) => {
    setLoading(true);
    console.log(data)
    data.address.zip_code = data.address.zip_code?.replace(/[-]/g, "");
    await editUser(data);
    reset();
    onClose();
    setLoading(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxWidth="520px"
          width="85%"
          backgroundColor={"white"}
          gap={"15px"}
          p={"15px"}
          borderRadius={"6px"}
          fontWeight={"semibold"}
          color={"grey.1"}
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          fontFamily={"heading"}
        >

          <Flex width="100%" height="100%" p={"15px"}>
            <Heading fontWeight={"semibold"} fontSize={"heading.2"}>
              Editar endereço
            </Heading>
            <ModalCloseButton color={"grey.4"} />
          </Flex>

          <Flex>
            <Text as={"h3"} fontWeight={"semibold"} fontSize={"heading.1"}>
              Informações de endereço
            </Text>
          </Flex>

          <InputWithLabel
            placeHolder={`${user?.address.zip_code}`}
            id={"zip_code"}
            type="text"
            label={"CEP"}
            error={errors.address?.zip_code}
            onKeyUp={(event: any) => {
              const value = event.target.value.replace(/\D/g, "");
              const match = value.match(/^(\d{5})(\d{3})$/);
              if (match) {
                event.target.value = `${match[1]}-${match[2]}`;
              } else {
                event.target.value = value;
              }
            }}
            register={register("address.zip_code")}
          />

          <Flex gap={5}>
          <Flex
                direction={"column"}
                justify={"start"}
                alignItems={"start"}
                w={"full"}
                fontFamily={'body'}>
                <FormLabel
                    w={"full"}
                    textAlign={"left"}
                    fontSize='heading.1'
                    fontWeight='medium'
                    color='grey.1'
                    htmlFor={"state"}>
                    {"Estado"}
                </FormLabel>
                <Select
                    border={"none"}
                    variant='unstyled'
                    {...register("address.state")}>
                    <option value=''>--</option>
                    {states.map((state) => <option key={state} value={state}>{state}</option>)}
                </Select>
            </Flex>

            <InputWithLabel
              placeHolder={`${user?.address.city}`}
              id={"city"}
              type="text"
              label={"Cidade"}
              error={errors.address?.city}
              register={register("address.city")}
            />
          </Flex>

          <InputWithLabel
            placeHolder={"Digitar rua"}
            id={"street"}
            type="text"
            label={"Rua"}
            error={errors.address?.street}
            register={register("address.street")}
          />

          <Flex gap={"15px"}>
            <InputWithLabel
              placeHolder={"Digitar número"}
              id={"number"}
              type="text"
              label={"Numero"}
              error={errors.address?.number}
              register={register("address.number")}
            />

            <InputWithLabel
              placeHolder={"Digitar complemento"}
              id={"complement"}
              type="text"
              label={"Complemento"}
              error={errors.address?.complement}
              register={register("address.complement")}
            />
          </Flex>

          <Flex flexDirection={"row-reverse"} gap={"10px"} p={"25px"}>
            <Button type="submit" variant={"brand1"} size={"lg"} width={{ base: "100%", sm: "40%" }}>Salvar alterações</Button>
            <Button variant={"negative"} size={"lg"} width={{ base: "50%", sm: "auto" }} onClick={onCloseAndReset}>Cancelar</Button>
          </Flex>

        </ModalContent>
      </Modal>
    </>
  );
};

export default AddressEditModal;
