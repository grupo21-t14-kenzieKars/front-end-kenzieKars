import { Flex, Text } from "@chakra-ui/react"
import { mockedCarPost, mockedCarPost2 } from "../mocks"
import CardPoster from "./cardPoster"

const PosterList = () =>{
    const carList = [mockedCarPost, mockedCarPost2]

    return(
        <>
            <Flex
            wrap={{base: "nowrap"}}
            overflowX={{base: "scroll"}}
            justify={{base:"none", md:"space-between"}}
            gap={"10px"}
            >
                {carList.length > 0 ? (
                    <Flex gap={"48px"} maxW={"100%"}>
                        {carList.map((carPost, index) => (
                        <CardPoster key={index} carPost={carPost}/>
                        ))}
                    </Flex>

                ):(
                <>
                    <Text fontSize={"heading.3"} fontWeight={"semibold"}>
                        Nenhum anúncio encontrado...
                    </Text>
                </>
            )
        
            }

        </Flex>
            
        </>
    )
}

export default PosterList