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
} from "@chakra-ui/react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HomeBg from "../../assets/HomeBg.png";
import SideBar from "../../components/sideBar";
import CarPostList from "./../../components/carPosterListComponet";
import { MockedCarPostList } from "../../mocks";
import { useContext } from "react";
import { CarContext } from "../../contexts/carsContext";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { carList } = useContext(CarContext)

  return (
    <>
      <Header />
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
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            width={{ base: "100%", md: "auto" }}
          >
            <CarPostList carsList={carList} isOwner={false} />
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
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
