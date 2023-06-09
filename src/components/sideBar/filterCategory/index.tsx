import { Box, Heading } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button";

type filterCategoryProps = {
    filters: string[]
    children: React.ReactNode
}

const FilterCategory = ({ filters, children }: filterCategoryProps) => {

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
                                    onClick={() => console.log(`${children}=${filter}`)}
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