import { Button, Flex, Heading } from "@chakra-ui/react"
import InputSide from "./inputSide"
import FilterCategory from "./filterCategory"

const SideBar = () => {
    const filters = {
        brands: ['Ford', 'Fiat'],
        models: ['Ka', 'Focus', 'Uno'],
        colors: ['Branco', 'Azul', 'Preto', 'Verde'],
        years: ['1999', '2000'],
        fuels: ['gasolina', 'flex']
    }
    return (
        <Flex direction={"column"} width={{ base: '100%', md: '350px' }} alignItems={"center"} gap={5} fontFamily="heading">
            <Flex align={"start"} direction={"column"} width={"full"} gap={5}>
                <FilterCategory filters={filters.brands}>Marca</FilterCategory>
                <FilterCategory filters={filters.models}>Modelo</FilterCategory>
                <FilterCategory filters={filters.colors}>Cor</FilterCategory>
                <FilterCategory filters={filters.years}>Ano</FilterCategory>
                <FilterCategory filters={filters.fuels}>Combustivel</FilterCategory>
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