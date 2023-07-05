import { Flex, Text, Button, Avatar } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ICarUser } from "../contexts/Interfaces";

interface IAdvertiserInformationsProps {
  seller: ICarUser
}

function AdvertiserInformations({ seller }: IAdvertiserInformationsProps) {
  const navigate = useNavigate();


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
      <Avatar name={seller?.name} color="white" size="xl" />
      <Text color="grey.1" fontWeight={"semibold"} fontSize={"heading.3"}>
        {seller?.name}
      </Text>
      <Text textAlign={"center"} fontSize={"body.3"} color={"grey.2"}>
        {seller?.description}
      </Text>
      <Button
        onClick={() => {
          navigate(`/profile/${seller?.id}`);
        }}
        width={"max-content"}
        variant="grey1"
      >
        Ver todos os anuncios
      </Button>
    </Flex>
  );
}

export default AdvertiserInformations;
