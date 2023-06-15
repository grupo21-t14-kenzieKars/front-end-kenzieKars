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
import PosterList from "../../components/posterList";
import SideBar from "../../components/sideBar";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
        >
          <Flex display={{ base: "none", md: "flex" }}>
            <SideBar />
          </Flex>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"space-between"}
            alignItems={"center"}
            // overflowX="scroll"
          >
            <PosterList />
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
              p={"70px"}
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
