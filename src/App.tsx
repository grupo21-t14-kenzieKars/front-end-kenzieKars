import { CardPoster } from "./components/cardPoster";
import { Flex } from "@chakra-ui/react";
import Header from "./components/header";
import Footer from "./components/footer";
import SideBar from "./components/sideBar";
function App() {
  return (
    <main>
      <Header />
      <Flex padding={30}>
        <SideBar />
        <Flex gap={"px"}>
          <CardPoster />
          <CardPoster />
          <CardPoster />
        </Flex>
      </Flex>
    </main>
  );
}

export default App;
