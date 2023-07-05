import { Avatar, Button, Flex, Spinner, Text, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CarPostList from "./../../components/carPosterListComponet";
import PosterCreateModal from "../../components/posterCreateModal";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { apiG21 } from "../../services/api";
import { CarContext } from "../../contexts/CarsContext";

const AdvertiserPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user, loading } = useContext(UserContext)
  const { editCarPoster } = useContext(CarContext)

const [sellerCars, setSellerCars] = useState()

  useEffect(() => {
    (async () =>{
      try{
        const response = await apiG21.get(`/car/seller/${user?.id}`)
        setSellerCars(response.data.cars);
      }catch(error){
        console.log(error)
      }
    })()
  }, [editCarPoster]);

  return (
    <>
      {loading ?  
        <Flex w={"full"} h='100vh' alignItems={"center"} justifyContent={"center"}>
          <Spinner size={"xl"} color="brand.1" emptyColor='grey.5' thickness='4px' />
        </Flex> : user && 
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
              <Avatar name={user.name} size={"xl"} color="white" />
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
              <Button w={"max-content"} variant={"outlineBrand1"} onClick={() => { onOpen() }}>
                Criar anuncio
              </Button>
              <PosterCreateModal isOpen={isOpen} onClose={onClose} />
            </Flex>
            <CarPostList carsList={sellerCars} isOwner={true} />
          </Flex>
          <Footer />
        </Flex>
      }</>);
};

export default AdvertiserPage;
