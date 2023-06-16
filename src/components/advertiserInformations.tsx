import { Flex, Text, Button, Avatar } from "@chakra-ui/react";
import { IMockedUser } from "../interfaces/mocksInterfaces";

interface IAdvertiserInformationsProps {
  user: IMockedUser;
}

function AdvertiserInformations({ user }: IAdvertiserInformationsProps) {
  function getInitials(name: string) {
    const nameArr = name.split(" ");

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
      <Avatar name={user.name} color="white" size="xl" />
      <Text color="grey.1" fontWeight={"semibold"} fontSize={"heading.3"}>
        {user.name}
      </Text>
      <Text textAlign={"center"} fontSize={"body.3"} color={"grey.2"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </Text>
      <Button width={"max-content"} variant="grey1">
        Ver todos anuncios
      </Button>
    </Flex>
  );
}

export default AdvertiserInformations;
