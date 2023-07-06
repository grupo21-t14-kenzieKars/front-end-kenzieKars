import {
  Box,
  List,
  ListItem,
  Text,
  Flex,
  Avatar,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { IComment, ICommentEdit } from "../contexts/Interfaces";
import { UserContext } from "../contexts/userContext";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import DeleteModal from "./modals/comentDeleteModal";
import EditModal from "./modals/CommentEditModal";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CarContext } from "./../contexts/CarsContext";

interface commentListProps {
  comments: IComment[] | undefined;
}

function CommentList({ comments }: commentListProps) {
  const { user } = useContext(UserContext);
  const { deleteCommentPoster,commentEditPoster } = useContext(CarContext);

  const {
    isOpen: isDeleteCommentModalOpen,
    onOpen: onDeleteCommentModalOpen,
    onClose: onDeleteCommentModalClose,
  } = useDisclosure();
  const {
    isOpen: isEditCommentModalOpen,
    onOpen: onEditCommentModalOpen,
    onClose: onEditCommentModalClose,
  } = useDisclosure();

  const [commentToEditDelete, setCommentToEditDelete] =
    useState<ICommentEdit | null>(null);

  const handleDeleteComment = async (idComment: string) => {
    deleteCommentPoster(idComment);
    onDeleteCommentModalClose()
  };

  const handleEditComment = async (idComment:string,data: ICommentEdit) => {
    await commentEditPoster(idComment,data)
  };

  function getCommentDate(createdAt: Date): string {
    const commentDate = new Date(createdAt);
    const currentDate = new Date();

    return formatDistanceToNow(commentDate, { locale: ptBR, addSuffix: true });
  }

  return (
    <Box
      bg="white"
      width={"100%"}
      display={"flex"}
      gap={"30px"}
      flexDirection={"column"}
      padding={"40px"}
      borderRadius={"4px"}
    >
      <Text fontSize={"heading.4"} fontWeight={"bold"}>
        Comentários
      </Text>
      <List display={"flex"} gap={"40px"} flexDirection={"column"}>
        {comments?.map((elem, i) => (
          <ListItem key={i}>
            <Flex flexDirection={"column"}>
              <Flex
                flexDirection={"row"}
                gap={"10px"}
                alignItems={"center"}
                marginBottom={"5px"}
              >
                <Avatar name={elem.user.name} color="white" size="sm" />
                <Text
                  color="grey.1"
                  fontWeight={"medium"}
                  fontSize={"heading.1"}
                >
                  {elem.user.name}
                </Text>
                <Box
                  bg="grey.3"
                  width={"4px"}
                  height={"4px"}
                  borderRadius={"50%"}
                ></Box>
                <Text color="grey.3" fontSize={"heading.1"}>
                  {getCommentDate(elem.createdAt)}
                </Text>
              </Flex>
              <Flex
                flexDirection={"row"}
                alignItems="center"
                justifyContent="space-between"
              >
                <Text color="grey.2" fontSize={"heading.1"}>
                  {elem.content}
                </Text>
                {elem.user.id === user?.id && (
                  <Flex gap={"5px"}>
                    <IconButton
                      p={0}
                      _hover={{ bg: "alert.3" }}
                      fontSize={"24px"}
                      color={"red"}
                      maxW={"100%"}
                      minW={"0px"}
                      w={"24px"}
                      h={"24px"}
                      bg={"transparent"}
                      aria-label="excluir"
                      icon={<AiFillDelete />}
                      onClick={() => {
                        onDeleteCommentModalOpen();
                        setCommentToEditDelete(elem);
                      }}
                    />
                    <IconButton
                      p={0}
                      _hover={{ bg: "grey.7" }}
                      fontSize={"24px"}
                      color={"brand.1"}
                      maxW={"100%"}
                      minW={"0px"}
                      w={"24px"}
                      h={"24px"}
                      bg={"transparent"}
                      aria-label="editar"
                      icon={<AiOutlineEdit />}
                      onClick={() => {
                        onEditCommentModalOpen();
                        setCommentToEditDelete(elem);
                      }}
                    />
                  </Flex>
                )}
              </Flex>
            </Flex>
          </ListItem>
        ))}
      </List>

      <DeleteModal
        isOpen={isDeleteCommentModalOpen}
        onClose={onDeleteCommentModalClose}
        headingText="Excluir comentário"
        title="Tem certeza que deseja excluir esse comentário?"
        description="Essa ação irá remover permanentemente seu comentário desse anúncio"
        deleteFunction={() =>
          handleDeleteComment(commentToEditDelete?.id ?? "")
        }
      />

      <EditModal
        isOpen={isEditCommentModalOpen}
        onClose={onEditCommentModalClose}
        headingText="Editar comentário"
        comment={commentToEditDelete?.content}
        editFunction={handleEditComment}
        id={commentToEditDelete?.id ?? ""}

      />
    </Box>
  );
}

export default CommentList;
