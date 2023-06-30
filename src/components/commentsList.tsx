import { Box, List, ListItem, Text, Flex, Avatar } from "@chakra-ui/react";
import { IComment } from "../contexts/Interfaces";

interface commentListProps {
  comments: IComment[] | undefined;
}

function CommentList({ comments }: commentListProps) {
  function getCommentDate(data: Date) {
    const date: any = new Date(data);

    const today: any = new Date();

    const d = today - date;

    const seconds = parseInt("" + d / 1000);
    const minuts = parseInt("" + d / 1000 / 60);
    const hours = parseInt("" + d / 1000 / 60 / 60);
    const days = parseInt("" + d / 1000 / 60 / 60 / 24);
    const months = parseInt("" + d / 1000 / 60 / 60 / 24 / 30);
    const years = parseInt("" + d / 1000 / 60 / 60 / 24 / 30 / 12);

    if (seconds < 60) {
      return `Há ${seconds} segundo${seconds !== 1 ? "s" : ""}`;
    }
    if (minuts < 60) {
      return `Há ${minuts} minuto${minuts !== 1 ? "s" : ""}`;
    }
    if (hours < 24) {
      return `Há ${hours} hora${hours !== 1 ? "s" : ""}`;
    }
    if (days < 30) {
      return `Há ${days} dia${days !== 1 ? "s" : ""}`;
    }
    if (months < 12) {
      return `Há ${months} mês${months !== 1 ? "es" : ""}`;
    }

    return `Há ${years} ano${years !== 1 ? "s" : ""}`;
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
        {comments?.map((elem, i) => {
          return (
            <ListItem key={i}>
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
              <Text color="grey.2" fontSize={"heading.1"}>
                {elem.content}
              </Text>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default CommentList;
