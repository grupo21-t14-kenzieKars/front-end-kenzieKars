import {
  Text,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";

function CommentForm() {
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
        <Flex
          width={"32px"}
          height={"32px"}
          borderRadius={"50%"}
          alignItems={"center"}
          justifyContent={"center"}
          color="white"
          bg="brand.1"
        >
          JL
        </Flex>
        <Text color="grey.1" fontWeight={"medium"} fontSize={"heading.1"}>
          Samuel Leão
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
        >
          Recomendarei para meus amigos!
        </Text>
      </Flex>
    </FormControl>
  );
}

export default CommentForm;
