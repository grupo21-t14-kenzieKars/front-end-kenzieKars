import { Box, Heading } from "@chakra-ui/layout"
import { useContext } from "react"
import { CarContext } from "../../../contexts/CarsContext"


type filterCategoryProps = {
    filters: string[]
    children: React.ReactNode
    category: string
}

const FilterCategory = ({ filters, children, category }: filterCategoryProps) => {

    const { filteredCarList, setFilteredCarList } = useContext(CarContext)

    const handleFilter = (filter: any) => {
        const newList: any = filteredCarList.filter((el: any) => el[category] == filter)
        setFilteredCarList(newList)
    }

    return (
        <>
            <Heading color="grey.0" fontSize="heading.5" fontWeight="semibold" marginTop={5}>
                {children}
            </Heading>
            <Box marginTop={5}>
                {
                    filters ?
                        (
                            filters.map((filter, i) =>
                                <Heading
                                    onClick={() => handleFilter(filter)}
                                    key={i}
                                    color="grey.3"
                                    fontSize="heading.3"
                                    fontWeight="semibold">
                                    {filter}
                                </Heading>)
                        ) :
                        (<Heading color="grey.3" fontSize="heading.3" fontWeight="semibold">
                            -
                        </Heading>)
                }
            </Box >
        </>
    )

}

export default FilterCategory