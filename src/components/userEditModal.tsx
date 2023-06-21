import { Flex, Heading, Modal, ModalCloseButton, ModalContent, useDisclosure, Text, Button, ModalOverlay } from "@chakra-ui/react"
import { useContext, useState } from "react"
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
    const [loading, setLoading] = useState(false)

    const { isOpen: isOpenDeleteModal, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal} = useDisclosure()

    const { user, editUser, deleteUser} = useContext(UserContext)

    const { register, handleSubmit, reset, formState: {errors}}=useForm<IEditUser>({
        mode: "onBlur",
        resolver: zodResolver(editUserSchema)
    })

    const onSubmit = async(data: IEditUser) => {
        setLoading(true)
        data.birth_date = data.birth_date?.replace(/[/]/g, "-")
        await editUser(data)
        reset()
        setLoading(false)
    }

    return(
        <>
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick>
            <ModalOverlay />
            <ModalContent 
            maxWidth="100%" 
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

            <Flex>
                <Button type="submit" variant={"brand.1"} size={"lg"}>Salvar alterações</Button>
                <Button variant={"alert"} size={"lg"} onClick={onOpenDeleteModal}>Excluir perfil</Button>
                <Button variant={"negative"} size={"lg"} onClick={onClose}>Cancelar</Button>
            </Flex>

            </ModalContent>
        </Modal>

        <Modal isOpen={isOpenDeleteModal} onClose={onCloseDeleteModal}>
            <ModalOverlay />
            <ModalContent>
                <Flex>
                    <Text fontSize={"heading.1"} color={"grey.2"}>Tem certeza que deseja excluir sua conta? </Text>
                </Flex>
                
                <Button variant={"negative"} size={"lg"} onClick={onCloseDeleteModal}>Cancelar</Button>
                <Button variant={"alert"} size={"lg"} onClick={async () => await deleteUser()}>Sim, excluir minha conta</Button>
            </ModalContent>
        </Modal>
        </>
    )
}

export default UserEditModal;
