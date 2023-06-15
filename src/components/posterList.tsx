import {  Flex, Text } from "@chakra-ui/react";
import { mockedCarPost, mockedCarPost2 } from "../mocks";
import CardPoster from "./cardPoster";

const PosterList = () => {
  const carList = [mockedCarPost, mockedCarPost2];

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
        carList.map((carPost, index) => (
            <CardPoster key={index} carPost={carPost} isOwner={false} />

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
