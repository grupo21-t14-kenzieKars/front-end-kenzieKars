import {
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  ModalCloseButton,
  Flex,
  Button,
  Input,
  FormControl,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { ICommentEdit } from "../../contexts/Interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from 'zod'

interface IEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  editFunction: (id:string,editedComment:ICommentEdit) =>void;
  headingText: string;
  comment: ICommentEdit | string | undefined;
  buttonText?: string;
  id:string
}

const commentSchema = z.object({
  content: z.string().nonempty("Não é permitido comentário vazio"),
});

const EditModal = ({
  isOpen,
  onClose,
  editFunction,
  headingText,
  comment,
  buttonText,
  id
}: IEditModalProps) => {

  const [editLoading, setEditLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ICommentEdit>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = (data: ICommentEdit) => {
      editFunction(id, data)
      reset()
      onClose()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={"white"}
          color={"grey.1"}
          w={"90%"}
          maxW={"420px"}
          p={"18px 24px 32px 24px"}
        >
          <Heading mb={"58px"} fontSize={"heading.4"}>
            {headingText}
          </Heading>

          <ModalCloseButton color={"grey.4"} />


          <Flex direction={"column"} align={"flex-start"} gap={"18px"} as="form"
          onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="edit_comment">
              <Textarea {...register("content")} minH={"130px"} placeholder={`${comment}`}/>
            </FormControl>
            <Flex
              direction={{ base: "column", sm: "row" }}
              w={"100%"}
              gap={"8px"}
              justify={"right"}
              mt={{ base: "24px" }}
            >
              <Button
                onClick={onClose}
                w={{ base: "100%", sm: "auto" }}
                size={"lg"}
                variant={"negative"}
              >
                Cancelar
              </Button>
              <Button
                w={{ base: "100%", sm: "auto" }}
                size={"lg"}
                variant={"primary"}
                type="submit"
                isLoading={editLoading}
                loadingText="Salvando"
              >
                {buttonText ? buttonText : "Salvar"}
              </Button>
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
