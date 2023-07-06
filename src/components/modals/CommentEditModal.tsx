import {
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  ModalCloseButton,
  Flex,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { ICommentEdit } from "../../contexts/Interfaces";
import { commentData } from "../commentsForm";

interface IEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  editFunction: (id:string,editedComment:commentData) =>void;
  headingText: string;
  comment: string;
  buttonText?: string;
  id:string
}

const EditModal = ({
  isOpen,
  onClose,
  editFunction,
  headingText,
  comment,
  buttonText,
}: IEditModalProps) => {

  const [editLoading, setEditLoading] = useState<boolean>(false);
  const handleEditComment = async () => {
    setEditLoading(true);
    editFunction();
    setEditLoading(false);
  };

  

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

          <Flex direction={"column"} align={"flex-start"} gap={"18px"}>
            <Input
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              placeholder="Digite seu comentário..."
              size="lg"
            />

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
                onClick={handleEditComment}
                w={{ base: "100%", sm: "auto" }}
                size={"lg"}
                variant={"primary"}
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
