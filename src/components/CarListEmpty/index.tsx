import { Flex, Text } from "@chakra-ui/react";

const CarListEmpty = () => {
  return (
    <>
      <Flex w={"full"} justifyContent={"center"}>
        <Text fontSize={40} color="grey.4" textAlign={"center"}>
          Nenhum momdelo encontrado :/
        </Text >
      </Flex>

    </>
  )
}

export default CarListEmpty