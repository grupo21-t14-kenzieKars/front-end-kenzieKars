import { Box, List, ListItem, Text, Flex, Avatar } from "@chakra-ui/react";
import { IComment } from "../contexts/Interfaces";

interface commentListProps {
  comments: IComment[] | undefined;
}

function CommentList({ comments }: commentListProps) {
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
                  3 dias atrás
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
