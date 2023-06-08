import { Image, Container, Flex, Box, Text } from "@chakra-ui/react"
import Footer from "../../components/footer"
import Header from "../../components/header"
import HomeBg from "../../assets/HomeBg.png"
import PosterList from "../../components/posterList"

const Home = () => {
    return(
        <>
        <Header />
        <Image 
        src={HomeBg} 
        alt={"homepage image"}
        w={"100%"}
        h={"55vh"}
        objectFit={"cover"}
        />
        <Container as={"section"} p={0} maxWidth={"1600px"}>
            <Flex gap={"25px"} p={"40px 0"} flexWrap={"wrap"} justifyContent={"space-evenly"} >
             <Box as="aside"  >
                Sou o filtro
             </Box>
             <PosterList />

            </Flex>
            <Flex gap={"30px"} justifyContent={"center"} fontSize={"heading.4"} fontFamily={"heading"}>
                <Text 
                bgGradient="linear(to-l, gray.300, gray.800)" 
                backgroundClip={"text"} 
                fontWeight={"medium"}>
                    1 de 2
                </Text>
                <Text 
                as={"a"} 
                href="" 
                color={"brand.2"} 
                fontWeight={"medium"}>
                    Seguinte {">"} 
                </Text>
            </Flex>
           
        </Container>
       
      
        <Footer />
        </>
    )
}

export default Home