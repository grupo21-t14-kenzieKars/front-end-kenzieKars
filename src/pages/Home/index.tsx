import { Image, Container, Flex, Box, Text, Heading, List, ListItem, Button, HStack } from "@chakra-ui/react"
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
            <Flex gap={"25px"} p={"40px 10px"} flexWrap={"wrap"} justifyContent={"space-evenly"} >
             <Box as="aside" w={"400px"}>
                <Flex flexDirection={"column"} fontFamily={"heading"}>
                    <Heading fontSize={"heading.3"} p={"15px"}>Marca</Heading>
                    <List color={"grey.3"} fontSize={"heading.1"} paddingLeft={"25px"}>
                        <ListItem>General Motors</ListItem>
                        <ListItem>Fiat</ListItem>
                        <ListItem>Ford</ListItem>
                        <ListItem>Honda</ListItem>
                        <ListItem>Porsche</ListItem>
                        <ListItem>Volkswagen</ListItem>
                    </List>                    
                
                <Heading fontSize={"heading.3"} p={"15px"}>Modelo</Heading>
                    <List color={"grey.3"} fontSize={"heading.1"} paddingLeft={"25px"}>
                        <ListItem>Civic</ListItem>
                        <ListItem>Corolla</ListItem>
                        <ListItem>Cruze</ListItem>
                        <ListItem>Fit</ListItem>
                        <ListItem>Gol</ListItem>
                        <ListItem>Ka</ListItem>
                    </List>                    
                </Flex>
                <Heading fontSize={"heading.3"} p={"15px"}>Cor</Heading>
                <Heading fontSize={"heading.3"} p={"15px"}>Ano</Heading>
                <Heading fontSize={"heading.3"} p={"15px"}>Combustível</Heading>
                <Heading fontSize={"heading.3"} p={"15px"}>KM</Heading>
                <HStack paddingLeft={"25px"} gap={"20px"}>
                    <Button w={"125px"} variant={"negative"} size={"md"}>Mínima</Button>
                    <Button w={"125px"} variant={"negative"}>Máxima</Button>
                </HStack>

                <Heading fontSize={"heading.3"} p={"15px"}>Preço</Heading>
                <HStack paddingLeft={"25px"} gap={"20px"}>
                    <Button w={"125px"} variant={"negative"}>Mínima</Button>
                    <Button w={"125px"} variant={"negative"}>Máxima</Button>
                </HStack>
                <Box padding={"25px"} marginTop={"50px"}>
                    <Button w={"279px"} h={"45px"} variant={"brand1"} fontWeight={"normal"}>Limpar filtros</Button>
                </Box>
             </Box>
             <Box display={"flex"} flexDirection={"column"} 
             justifyContent={"space-between"} alignItems={"center"}
             >
             <PosterList />
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
             </Box>
            </Flex>
        </Container>
        <Footer />
        </>
    )
}

export default Home