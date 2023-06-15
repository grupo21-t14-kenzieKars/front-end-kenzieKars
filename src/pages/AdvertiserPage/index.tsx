import { Avatar, Button, Flex, List, ListItem, Text } from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { MockedCarPostList, mockedUser2 } from "../../mocks";
import CardPoster from "../../components/cardPoster";

const AdvertiserPage = () => {
  const cars = MockedCarPostList;
  const user = mockedUser2;

  return (
    <Flex
      flexDirection={"column"}
      bgGradient={{
        base: "linear(to-b, brand.1 0%, brand.1 12%, grey.8 12%, grey.8 100%)",
        md: "linear(to-b, brand.1 0px, brand.1 300px, grey.8 300px, grey.8 100%)",
      }}
      minH={"100vh"}
    >
      <Header />
      <Flex flexDirection={"column"} alignItems={"center"} padding={"50px 3%"}>
        <Flex
          flexDirection={"column"}
          bg="white"
          maxW={"1200px"}
          borderRadius={"4px"}
          padding={"40px"}
          gap={"20px"}
          w={{ base: "100%", md: "80%" }}
        >
          <Avatar name={user.name} w={"80px"} h={"80px"} color="white" />
          <Flex alignItems={"center"} gap={"15px"}>
            <Text color="grey.1" fontWeight={"semibold"} fontSize={"heading.3"}>
              {user.name}
            </Text>
            <Text
              color="brand.1"
              bg="brand.4"
              padding={"5px"}
              borderRadius={"4px"}
              fontWeight={"medium"}
            >
              Anunciante
            </Text>
          </Flex>
          <Text fontSize={"body.3"} color={"grey.2"}>
            {user.description}
          </Text>
          <Button w={"max-content"} variant={"outlineBrand1"}>
            Criar anuncio
          </Button>
        </Flex>
        <List
          display={"flex"}
          gap={"30px"}
          flexWrap={{ base: "nowrap", md: "wrap" }}
          justifyContent={{ base: "left", md: "center" }}
          padding={"40px 0"}
          overflowX={"auto"}
          w={"100%"}
        >
          {cars.map((elem) => {
            return (
              <ListItem>
                <CardPoster carPost={elem} isOwner={true} />
              </ListItem>
            );
          })}
        </List>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default AdvertiserPage;
