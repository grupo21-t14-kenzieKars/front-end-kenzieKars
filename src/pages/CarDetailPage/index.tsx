import { Flex } from "@chakra-ui/react";
import Header from "../../components/header";
import PosterContainer from "../../components/posterContainer";
import Footer from "../../components/footer";

function CarDetailPage() {
  return (
    <Flex flexDirection={"column"} height="100vh" justifyContent={"space-between"} bg="brand.1">
      <Header />
      <PosterContainer/>
      <Footer />
    </Flex>
  );
}

export default CarDetailPage;
