import { Flex, Heading, Modal, ModalCloseButton, ModalContent, useDisclosure, Text, Button, ModalOverlay, FormControl } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/userContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { IEditUser } from "../interfaces/userInterfaces"
import InputWithLabel from "./input"
import { editUserSchema } from "../schemas/editUserSchema"

interface IEditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserEditModal = ({isOpen, onClose}: IEditUserModalProps) => {

    const { isOpen: isOpenDeleteModal, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal} = useDisclosure()

    const { user, editUser, deleteUser, loading } = useContext(UserContext)

    const { register, handleSubmit, reset, formState: {errors}}=useForm<IEditUser>({
        mode: "onBlur",
        resolver: zodResolver(editUserSchema)
    })

    useEffect(() => {
        if (user) {
          reset({
            name: user.name,
            email: user.email,
            cpf: user.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
            phone: "(" + user.phone.slice(2, 4) + ") " + user.phone.slice(4, 9) + "-" + user.phone.slice(9),
            birth_date: user.birth_date.split("-").reverse().join("/"),
            description: user.description,
          });
        }
      }, [user, isOpen, reset]);

    const onSubmit = async (data: IEditUser) => {

        data.phone = `55${data.phone?.replace(/[\s()-]/g, "")}`;
        data.birth_date = data.birth_date?.replace(/[/]/g, "/");
        await editUser(data);
        onClose();
        reset();

    }

    const cancelAndClose = async () =>{
        onClose(),
        reset()
    }

    const deleteAndClose = async () =>{
        onCloseDeleteModal()
        onClose()
        await deleteUser()
    }

    return(
        <>
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick>
            <ModalOverlay />
            <ModalContent 
            width="100%"
            maxWidth="520px" 
            color={"grey.1"}
            backgroundColor={"white"}
            gap={"15px"}
            p={"15px"} 
            fontFamily={"heading"}
            borderRadius={"6px"} 
            fontWeight={"semibold"} 
            >
            <FormControl
            as={"form"}
            onSubmit={handleSubmit(onSubmit)}
            isInvalid={!!errors}
            >

            <Flex width="100%" height="100%" p={"15px"}>
                <Heading fontWeight={"semibold"} fontSize={"heading.2"}>
                    Editar perfil
                </Heading>
                <ModalCloseButton color={"grey.4"} />
            </Flex>

            <Flex>
                <Text as={"h3"} fontWeight={"semibold"} fontSize={"heading.1"}>
                    Informações pessoais
                </Text>
            </Flex>
            
            <InputWithLabel
            placeHolder={`${user?.name}`}
            id={"name"}
            type="text"
            label={"Nome"}
            error={errors.name}
            register={register("name")}
            />

            <InputWithLabel
            placeHolder={`${user?.email}`}
            id={"email"}
            type="email"
            label={"Email"}
            error={errors.email}
            register={register("email")}
            /> 

            <InputWithLabel
            placeHolder={`${user?.cpf}`}
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
        placeHolder={`${user?.phone}`}
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
            placeHolder={`${user?.birth_date}`}
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
            placeHolder={`${user?.description}`}
            id={"description"}
            type="text"
            label={"Descrição"}
            error={errors.description}
            register={register("description")}
            />

            <Flex width="100%" flexDirection={"row-reverse"} justifyContent={"space-evenly"} wrap={{base: "wrap-reverse", sm: "nowrap"}} p={"15px"} gap={"10px"}>
                <Button type="submit" variant={"brand1"} size={"lg"} isLoading={loading} width={{base:"80%", sm: "50%"}}>Salvar alterações</Button>
                <Button variant={"alert"} size={"lg"} width={{base: "40%"}} onClick={onOpenDeleteModal}>Excluir perfil</Button>
                <Button variant={"negative"} size={"lg"} width={{base:"40%"}} onClick={cancelAndClose}>Cancelar</Button>
            </Flex>


            </FormControl>

            
            </ModalContent>
        </Modal>

        <Modal isOpen={isOpenDeleteModal} onClose={onCloseDeleteModal}>
            <ModalOverlay />
            <ModalContent
                       width="100%"
                       maxWidth="520px" 
                       color={"grey.1"}
                       backgroundColor={"white"}
                       gap={"15px"}
                       p={"15px"} 
                       fontFamily={"heading"}
                       borderRadius={"6px"} 
                       fontWeight={"semibold"} >
                <Flex>

                <Flex width="100%" height="100%" p={"15px"}>
                    <Heading fontWeight={"semibold"} fontSize={"heading.2"}>
                        Excluir anúncio
                    </Heading>
                    <ModalCloseButton color={"grey.4"} />
                </Flex>
                </Flex>
                <Text fontSize={"heading.1"} color={"grey.2"} p={"10px"}>Tem certeza que deseja excluir sua conta? </Text>
                
                <Button variant={"negative"} size={"lg"}  onClick={onCloseDeleteModal}>Cancelar</Button>
                <Button variant={"alert"} size={"lg"} isLoading={loading} onClick={deleteAndClose}>Sim, excluir minha conta</Button>
            </ModalContent>
        </Modal>
        </>
    )
}

export default UserEditModal;
