import { 
    Avatar, 
    Card, 
    CardBody, 
    CardFooter, 
    CardHeader, 
    Flex, 
    Heading, 
    Image, 
    Tag, 
    Text
} from "@chakra-ui/react"

export const CardPoster = () =>{
    //Cards com desconto
    const discountFipe = false
    //Status que aparecem para o vendedor
    const cardStatus = true
    const posterIsActive = false

    return(
        <Card 
        w={"100%"}
        maxWidth={"312px"}
        h={"152px"}
        bgColor={"transparent"}
        boxShadow={"none"}
        gap={"18px"}
        as={"a"}
        href={""}
        data-group
        >
        <CardHeader p={0}>
            <Flex 
            position={"relative"} 
            justifyContent={"center"} 
            _groupHover={{
                border: "1px solid blue", 
                borderRadius:"6px", 
                transition: "1s"
                }}>
            <Flex>
                <Image 
                src="" 
                fallbackSrc="" 
                w="100%" 
                maxW="262px" 
                h="100%" 
                maxH="150px" 
                bg={"grey.7"}
                objectFit={"contain"} 
                alt="car image" 
                />
            </Flex>

        {discountFipe && (
            <Flex 
            w={"15px"} 
            h={"27px"}
            color={"white"}
            bgColor={"green.500"} 
            fontWeight={"medium"}
            fontSize={"heading.1"}
            px={"3px"}
            borderRadius={"2px"}
            position={"absolute"}
            top={0}
            right={0}
           >
                $
            </Flex>
        )}

        {cardStatus && (
            <Flex
            h={"24px"}
            w={"51px"}
            color={"white"}
            bg={posterIsActive? "brand.1" : "grey.4"}
            fontSize={"heading.1"}
            position={"absolute"}
            top={"10px"}
            left={"15px"}
            >
                {posterIsActive ? <Text px="8px">Ativo</Text> : <Text px={"5px"}>Inativo</Text>}
            </Flex>
        )}
        </Flex>
        </CardHeader>

        <CardBody p={0}>
            <Flex flexDirection={"column"} gap={"10px"} color={"grey.2"}>
                <Heading 
                as="h3"
                color={"grey.1"}
                fontSize={"heading.2"}
                fontWeight={"semibold"}
                noOfLines={1}
                >
                Titulo do Poster aqui
                </Heading>
                <Text 
                color={"grey.2"}
                fontSize={"heading.1"}
                textAlign={"left"}
                noOfLines={2}
                >
                    Descrição bem aqui do carro que você sonha
                </Text>
            </Flex>

            <Flex alignItems={"center"}>
                <Avatar name="Rayane" w={"32px"} h={"32px"} size={"sm"} margin={"10px"}/>
                <Text  color={"grey.2"} fontSize={"heading.1"} fontWeight={"medium"} >Username</Text>
            </Flex>
        </CardBody>

        <CardFooter p={0}>
            <Flex w={"100%"} justifyContent={"space-between"}>
                <Flex gap={"13px"}>
                    <Tag 
                    color={"brand.1"}
                    bgColor={"brand.4"}
                    fontSize={"heading.1"}
                    fontWeight={"medium"}
                    p={"8px 5px"}
                    >
                        10.000km
                    </Tag>
                    <Tag 
                    color={"brand.1"}
                    bgColor={"brand.4"}
                    fontSize={"heading.1"}
                    fontWeight={"medium"}
                    > 
                        2023
                    </Tag>
                </Flex>
                <Text fontSize={"heading.2"} fontWeight={"medium"}>R$30.000,00</Text>
            </Flex>
        </CardFooter>
        </Card>
    )
}