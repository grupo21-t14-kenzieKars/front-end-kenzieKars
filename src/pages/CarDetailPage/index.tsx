import { Flex } from "@chakra-ui/react";
import Header from "../../components/header";
import PosterContainer from "../../components/posterContainer";
import Footer from "../../components/footer";

function CarDetailPage() {
  return (
    <Flex flexDirection={"column"}>
      <Header />
      <PosterContainer />
      <Footer />
    </Flex>
  );
}

export default CarDetailPage;
