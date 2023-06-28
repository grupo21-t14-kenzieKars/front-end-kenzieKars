import {
  Text,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Avatar,
} from "@chakra-ui/react";

interface ICommentProps {
  name: string | undefined
}

function CommentForm({ name }: ICommentProps) {
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
        <Avatar name={name!} color="white" size="sm" />
        <Text color="grey.1" fontWeight={"medium"} fontSize={"heading.1"}>
          {name}
        </Text>
      </FormLabel>
      <Flex flexDirection={"column"} gap={"20px"} position={"relative"}>
        <Textarea
          height={"100px"}
          maxHeight={"100px"}
          placeholder="Escreva um comentário"
        />
        <Button
          position={{ md: "absolute" }}
          bottom={"10px"}
          right={"10px"}
          width={"max-content"}
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
        >
          Gostei muito!
        </Text>
        <Text
          bg="grey.7"
          color="grey.3"
          borderRadius={"10px"}
          width={"max-content"}
          padding={"0 5px"}
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
        >
          Recomendarei para meus amigos!
        </Text>
      </Flex>
    </FormControl>
  );
}

export default CommentForm;
