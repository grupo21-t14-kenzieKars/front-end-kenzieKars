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
        const newList: any = filteredCarList?.filter((el: any) => el[category] == filter)
        setFilteredCarList(newList)
        console.log(newList);

    }

    return (
        <>
            <Heading color="grey.0" fontSize="heading.5" fontWeight="semibold" marginTop={5} overflowY={'unset'}>
                {children}
            </Heading>
            <Box marginTop={5} maxHeight='100px' overflowX={"auto"} w={"full"} css={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                }
            }}>
                {
                    filters.length > 0 ?
                        (
                            filters.map((filter, i) =>
                                <Heading
                                    cursor={"pointer"}
                                    onClick={() => handleFilter(filter)}
                                    key={i}
                                    color="grey.3"
                                    fontSize="heading.3"
                                    fontWeight="semibold">
                                    {filter}
                                </Heading>)
                        ) :
                        (<Heading color="grey.3" fontSize="heading.3" fontWeight="semibold">
                            --
                        </Heading>)
                }
            </Box >
        </>
    )

}

export default FilterCategory