import { Button, Flex, Heading } from "@chakra-ui/react"
import InputSide from "./inputSide"
import FilterCategory from "./filterCategory"
import { useContext } from "react"
import { CarContext } from "../../contexts/CarsContext"

const SideBar = () => {
    const { carList } = useContext(CarContext)

    const filters = {
        brands: [...new Set(carList.map(ele => ele.brand))],
        models: [...new Set(carList.map(ele => ele.model))],
        colors: [...new Set(carList.map(ele => ele.color))],
        years: [...new Set(carList.map(ele => ele.year))],
        fuels: [...new Set(carList.map(ele => ele.fuelType))]
    }

    return (
        <Flex direction={"column"} width={{ base: '100%', md: '350px' }} alignItems={"center"} gap={5} fontFamily="heading">
            <Flex align={"start"} direction={"column"} width={"full"} gap={5}>
                <FilterCategory filters={filters.brands} category={'brand'}>Marca</FilterCategory>
                <FilterCategory filters={filters.models} category={'model'}>Modelo</FilterCategory>
                <FilterCategory filters={filters.colors} category={'color'}>Cor</FilterCategory>
                <FilterCategory filters={filters.years} category={'year'}>Ano</FilterCategory>
                <FilterCategory filters={filters.fuels} category={'fuelType'}>Combustivel</FilterCategory>
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