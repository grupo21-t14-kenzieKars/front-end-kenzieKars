import { CardPoster } from "./components/cardPoster";
import { Flex } from "@chakra-ui/react";
import Header from "./components/header";
import Footer from "./components/footer";
function App() {
  return (
    <main>
      <Header/>
      <Flex gap={"px"}>
        <CardPoster />
        <CardPoster />
        <CardPoster />
        <CardPoster />
        <CardPoster />
      </Flex>
    </main>
  );
}

export default App;
