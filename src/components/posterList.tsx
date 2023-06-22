import { Flex, Text } from "@chakra-ui/react";
import CardPoster from "./cardPoster";
import { useContext } from "react";
import { CarContext } from "../contexts/carsContext";

const PosterList = () => {
  const { carList } = useContext(CarContext)

  return (
    <Flex
      display={"flex"}
      gap={"30px"}
      flexWrap={{ base: "nowrap", md: "wrap" }}
      justifyContent={{ base: "left", md: "center" }}
      padding={"40px 0"}
      overflowX={"auto"}
      w={"100%"}

    >
      {carList.length > 0 ? (
        carList.map((carPost, i) => (
          <CardPoster key={i} carPost={carPost} isOwner={false} />

        ))
      ) : (
        <Text fontSize={"heading.3"} fontWeight={"semibold"}>
          Nenhum anúncio encontrado...
        </Text>
      )}
    </Flex>
  );
};

export default PosterList;
