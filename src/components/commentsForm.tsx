import {
  Text,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { IComment, IUserData } from "../contexts/Interfaces";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  content: z.string(),
});

export type commentData = z.infer<typeof schema>;

interface ICommentProps {
  user: IUserData | null;
  isLog: boolean;
  createComment: (commentData: { content: string }) => Promise<void>;
}

function CommentForm({ user, isLog, createComment }: ICommentProps) {
  const [comment, setComment] = useState<string>();

  const navigate = useNavigate();

  return (
    <FormControl
      bg="white"
      width={"100%"}
      display={"flex"}
      gap={"30px"}
      flexDirection={"column"}
      padding={"40px"}
      borderRadius={"4px"}
    >
      <FormLabel
        display={"flex"}
        flexDirection={"row"}
        gap={"5px"}
        alignItems={"center"}
      >
        <Avatar name={user?.name} color="white" size="sm" />
        <Text color="grey.1" fontWeight={"medium"} fontSize={"heading.1"}>
          {user?.name}
        </Text>
      </FormLabel>
      <Flex
        flexDirection={"column"}
        gap={"20px"}
        position={"relative"}
        as={"form"}
      >
        <Textarea
          id="comment"
          height={"100px"}
          maxHeight={"100px"}
          placeholder="Escreva um comentário"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <Button
          position={{ md: "absolute" }}
          bottom={"10px"}
          right={"10px"}
          width={"max-content"}
          variant={isLog ? "brand1" : "disable"}
          onClick={(e) => {
            if (comment) {
              createComment({ content: comment });
            }
            if (!user) {
              navigate("/login");
            }
            setComment("");
          }}
        >
          Comentar
        </Button>
      </Flex>
      <Flex gap={"10px"}>
        <Text
          bg="grey.7"
          color="grey.3"
          borderRadius={"10px"}
          width={"max-content"}
          padding={"0 5px"}
          onClick={(e) => {
            setComment("Gostei muito!");
          }}
          cursor={"pointer"}
        >
          Gostei muito!
        </Text>
        <Text
          bg="grey.7"
          color="grey.3"
          borderRadius={"10px"}
          width={"max-content"}
          padding={"0 5px"}
          onClick={(e) => {
            setComment("Incrível");
          }}
          cursor={"pointer"}
        >
          Incrível
        </Text>
        <Text
          bg="grey.7"
          color="grey.3"
          borderRadius={"10px"}
          width={"max-content"}
          padding={"0 5px"}
          display={{ base: "none", md: "flex" }}
          onClick={(e) => {
            setComment("Recomendarei para meus amigos!");
          }}
          cursor={"pointer"}
        >
          Recomendarei para meus amigos!
        </Text>
      </Flex>
    </FormControl>
  );
}

export default CommentForm;
