import { useContext, useState } from "react";
import {
  Flex,
  Heading,
  Modal,
  ModalCloseButton,
  ModalContent,
  Text,
  Button,
  ModalOverlay,
} from "@chakra-ui/react";
import { UserContext } from "../contexts/userContext";
import { useForm } from "react-hook-form";
import { IAddressEdit } from "../interfaces/userInterfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressEditSchema } from "../schemas/editUserSchema";
import InputWithLabel from "./input";
import StateSelect from "./input/stateSelect";

interface IAddressEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const user = {
    id: "9d931a02-a54d-487e-b6e4-70323edecd6e",
    email: "maria.souza@email.com",
    name: "Maria Souza",
    cpf: "12345678900",
    phone:"1234567890007",
    birth_date:"2000-02-13",
    description: `Uma pessoa incrível com interesses diversos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio autem soluta
    molestias voluptates veniam consequatur sint officia aperiam dolorum nobis.`,
    password: "1234",
    is_seller: false,
    address: {
        zip_code:"12345671",
        city:"Santos",
        state:"BA",
        street:"Avenida Elementar",
    }
  }

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

  const onSubmit = async (data: IAddressEdit) => {
    setLoading(true);
    console.log(data)
    await editUser(data);
    reset();
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
            <StateSelect
            id={"state"}
            label={"Estado"}
            register={register("address.state")}
            />

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
            <Button type="submit" variant={"brand1"} size={"lg"} width={{ base: "100%", sm:"40%"}}>Salvar alterações</Button>
            <Button variant={"negative"} size={"lg"} width={{base: "50%", sm:"auto"}} onClick={onClose}>Cancelar</Button>
        </Flex>

        </ModalContent>
      </Modal>
    </>
  );
};

export default AddressEditModal;
