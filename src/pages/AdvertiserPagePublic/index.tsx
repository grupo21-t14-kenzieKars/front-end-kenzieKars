import { Avatar, Flex, Text } from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CarPostList from "../../components/carPosterListComponet";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiG21 } from "../../services/api";
import { ICarByUser } from "../../interfaces/posterInterfaces";

const AdvertiserPagePublic = () => {
  const [carByUser, setCarByUser] = useState<ICarByUser>();

  const { id } = useParams();

  const userId = id || "";

  const getCarByUser = async (userId: string) => {
    try {
      const { data } = await apiG21.get(`/car/seller/${userId}`);
      console.log(data);
      setCarByUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarByUser(userId);
  }, []);

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
          <Avatar
            name={carByUser && carByUser.name}
            size={"xl"}
            color="white"
          />
          <Flex alignItems={"center"} gap={"15px"}>
            <Text color="grey.1" fontWeight={"semibold"} fontSize={"heading.3"}>
              {carByUser && carByUser.name}
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
            {carByUser && carByUser.description}
          </Text>
        </Flex>
        <Text
          fontSize="heading.3"
          fontWeight="bold"
          w={"100%"}
          maxW={"1500px"}
          m={"40px"}
          marginLeft={{ md: "120px" }}
        >
          Anúncios
        </Text>
        <CarPostList carsList={carByUser?.cars} isOwner={false} />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default AdvertiserPagePublic;
