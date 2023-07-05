import {
  Image,
  Container,
  Flex,
  Box,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HomeBg from "../../assets/HomeBg.png";
import SideBar from "../../components/sideBar";
import CarPostList from "./../../components/carPosterListComponet";
import { useContext } from "react";
import { CarContext } from "../../contexts/CarsContext";
import CarListEmpty from "../../components/CarListEmpty";
import { UserContext } from "../../contexts/userContext";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { filteredCarList } = useContext(CarContext)
  const { loading } = useContext(UserContext)

  return (
    <>
      {loading ?
        <Flex w={"full"} h='100vh' alignItems={"center"} justifyContent={"center"}>
          <Spinner size={"xl"} color="brand.1" emptyColor='grey.5' thickness='4px' />
        </Flex> : <>
          <Header />
          <Flex flexDirection={"column"} height='100vh' justifyContent={"space-between"}>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent backgroundColor="white" width={"full"}>
                <ModalHeader>Filtros</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <SideBar />
                </ModalBody>
              </ModalContent>
            </Modal>
            <Image
              src={HomeBg}
              alt={"homepage image"}
              w={"100%"}
              h={"55vh"}
              objectFit={"cover"}
            />
            <Container as={"section"} p={0} maxWidth={"1600px"}>
              <Flex
                gap={"25px"}
                p={"40px 10px"}
                flexWrap={{ base: "wrap", md: "nowrap" }}
                justifyContent={"space-evenly"}
              >
                <Box display={{ base: "none", md: "flex" }} flex={{ md: 1 }}>
                  <SideBar />
                </Box>
                {filteredCarList.length <= 0 ? <CarListEmpty /> :
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    width={{ base: "100%", md: "auto" }}
                  >
                    <CarPostList carsList={filteredCarList} isOwner={false} />
                    <Button
                      marginTop={5}
                      display={{ base: "block", md: "none" }}
                      width="248px"
                      onClick={onOpen}
                    >
                      Filtro
                    </Button>
                    <Flex
                      gap={"30px"}
                      fontSize={"heading.3"}
                      fontFamily={"heading"}
                      alignContent={"center"}
                      p={{ base: "10px", md: "70px" }}
                    >
                      <Text
                        bgGradient="linear(to-l, gray.400, gray.800)"
                        backgroundClip={"text"}
                        fontWeight={"medium"}
                      >
                        1 de 2
                      </Text>
                      <Text as={"a"} href="" color={"brand.2"} fontWeight={"medium"}>
                        Seguinte {">"}
                      </Text>
                    </Flex>
                  </Box>}
              </Flex>
            </Container>
            <Footer />
          </Flex> </>}
    </>
  );
};

export default Home;
