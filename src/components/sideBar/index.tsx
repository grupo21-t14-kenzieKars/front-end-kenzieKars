import { Button, Flex, Heading } from "@chakra-ui/react"
import InputSide from "./inputSide"
import FilterCategory from "./filterCategory"
import { useContext } from "react"
import { CarContext } from "../../contexts/carsContext"
import { useForm } from "react-hook-form"
import { IMockedCar } from "../../interfaces/mocksInterfaces"

const SideBar = () => {
    const { carList, filteredCarList, setFilteredCarList } = useContext(CarContext)

    const filters = {
        brands: [...new Set(carList.map(ele => ele.brand))],
        models: [...new Set(carList.map(ele => ele.model))],
        colors: [...new Set(carList.map(ele => ele.color))],
        years: [...new Set(carList.map(ele => ele.year))],
        fuels: [...new Set(carList.map(ele => ele.fuelType))]
    }

    const { register, handleSubmit, reset } = useForm({
        mode: 'onBlur',
    })

    const onSubmit = (data: any) => {
        const newListKM = filteredCarList.filter((car: IMockedCar) => car.kilometers >= data.minKm)
        setFilteredCarList(newListKM)
        if (data.maxKm > 0) {
            const newListKM = filteredCarList.filter((car: IMockedCar) => car.kilometers <= data.maxKm)
            setFilteredCarList(newListKM)
        }
        const newListPrice = filteredCarList.filter((car: IMockedCar) => car.price >= data.minPrice)
        setFilteredCarList(newListPrice)
        if (data.maxPrice > 0) {
            const newListPrice = filteredCarList.filter((car: IMockedCar) => car.price <= data.maxPrice)
            setFilteredCarList(newListPrice)
        }
    }
    const clearFilter = () => {
        setFilteredCarList(carList)
        reset()
    }
    return (
        <Flex direction={"column"} width={{ base: '100%', md: '350px' }} alignItems={"center"} gap={5} fontFamily="heading">
            <form onBlur={handleSubmit(onSubmit)}><Flex align={"start"} direction={"column"} width={"full"} gap={5}>
                <FilterCategory filters={filters.brands} category={'brand'}>Marca</FilterCategory>
                <FilterCategory filters={filters.models} category={'model'}>Modelo</FilterCategory>
                <FilterCategory filters={filters.colors} category={'color'}>Cor</FilterCategory>
                <FilterCategory filters={filters.years} category={'year'}>Ano</FilterCategory>
                <FilterCategory filters={filters.fuels} category={'fuelType'}>Combustivel</FilterCategory>
                <Heading color="grey.0" fontSize="heading.5" fontWeight="semibold">
                    KM
                </Heading>

                <Flex gap='26px'>
                    <InputSide placetext="Minima" id='minKM' register={register('minKM')}></InputSide>
                    <InputSide placetext="Maxima" id='maxKM' register={register('maxKM')}></InputSide>
                </Flex>
                <Heading color="grey.0" fontSize="heading.5" fontWeight="semibold">
                    Preço
                </Heading>
                <Flex gap='26px'>
                    <InputSide placetext="Minimo" id='minPrice' register={register('minPrice')}></InputSide>
                    <InputSide placetext="Maximo" id='maxPrice' register={register('maxPrice')}></InputSide>
                </Flex>

            </Flex>
                <Button
                    marginTop='20px'
                    width={"full"}
                    onClick={() => clearFilter()}
                >Limpar filtro</Button>
            </form>
        </Flex >
    )
}

export default SideBar