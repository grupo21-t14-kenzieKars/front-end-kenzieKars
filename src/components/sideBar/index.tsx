import { Button, Flex, Heading } from "@chakra-ui/react"
import InputSide from "./inputSide"
import { MockedCarPostList } from "../../mocks"

const SideBar = () => {
    MockedCarPostList
    return (
        <Flex direction={"column"} width={250} alignItems={"center"} gap={5} fontFamily="heading">
            <Flex align={"start"} direction={"column"} width={"full"} gap={5}>
                <Heading color="grey.0" fontSize="heading.5" fontWeight="semibold">
                    Marca
                </Heading>
                <Heading color="grey.3" fontSize="heading.3" fontWeight="semibold">
                    -
                </Heading>
                <Heading color="grey.0" fontSize="heading.5" fontWeight="semibold">
                    Modelo
                </Heading>
                <Heading color="grey.3" fontSize="heading.3" fontWeight="semibold">
                    -
                </Heading>
                <Heading color="grey.0" fontSize="heading.5" fontWeight="semibold">
                    Cor
                </Heading>
                <Heading color="grey.3" fontSize="heading.3" fontWeight="semibold">
                    -
                </Heading>
                <Heading color="grey.0" fontSize="heading.5" fontWeight="semibold">
                    Ano
                </Heading>
                <Heading color="grey.3" fontSize="heading.3" fontWeight="semibold">
                    -
                </Heading>
                <Heading color="grey.0" fontSize="heading.5" fontWeight="semibold">
                    Combustivel
                </Heading>
                <Heading color="grey.3" fontSize="heading.3" fontWeight="semibold">
                    -
                </Heading>
                <Heading color="grey.0" fontSize="heading.5" fontWeight="semibold">
                    KM
                </Heading>
                <Flex gap='26px'>
                    <InputSide placetext="Minima"></InputSide>
                    <InputSide placetext="Maxima"></InputSide>
                </Flex>
                <Heading color="grey.0" fontSize="heading.5" fontWeight="semibold">
                    Preço
                </Heading>
                <Flex gap='26px'>
                    <InputSide placetext="Minimo"></InputSide>
                    <InputSide placetext="Maximo"></InputSide>
                </Flex>
            </Flex>
            <Button
                width='90%'
            >Limpar filtro</Button>
        </Flex>
    )
}

export default SideBar