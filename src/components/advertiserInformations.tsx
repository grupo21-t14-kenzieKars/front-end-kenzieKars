import { Flex, Text, Button, Avatar } from "@chakra-ui/react";
import { IUserData } from "../contexts/Interfaces";

interface IAdvertiserInformationsProps {
  user: IUserData;
}

function AdvertiserInformations({ user }: IAdvertiserInformationsProps) {
  function getInitials(name: string) {
    const nameArr = name?.split(" ");

    if (nameArr[1]) {
      return nameArr[0][0] + nameArr[1][0];
    } else {
      return nameArr[0][0];
    }
  }

  return (
    <Flex
      bg="white"
      flexDirection={"column"}
      gap="25px"
      padding={"40px"}
      borderRadius={"4px"}
      width={"100%"}
      alignItems={"center"}
    >
      <Avatar name={user?.name} color="white" size="xl" />
      <Text color="grey.1" fontWeight={"semibold"} fontSize={"heading.3"}>
        {user?.name}
      </Text>
      <Text textAlign={"center"} fontSize={"body.3"} color={"grey.2"}>
        {user?.description}
      </Text>
      <Button width={"max-content"} variant="grey1">
        Ver todos anuncios
      </Button>
    </Flex>
  );
}

export default AdvertiserInformations;
