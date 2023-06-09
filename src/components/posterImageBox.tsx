import { Flex, Grid, GridItem, Heading, useDisclosure, Image } from "@chakra-ui/react"
import PosterImageModal from "./posterImageModal"
import { mockedCarPost2 } from "../mocks";
import { useState } from "react";

const PosterImageBox = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [posterImg, setPosterImg] = useState<string>("");

    return(
        <>
            <Flex w={"100%"} 
            maxW={"440px"} 
            direction={"column"} 
            bgColor={"grey.10"} 
            gap={"25px"} 
            p={"30px"} 
            borderRadius={"6px"}>

                <Heading fontSize={"heading.3"}>
                    Fotos
                </Heading>

                <Grid
                    templateColumns={"repeat(3, 1fr)"}
                    templateRows={"repeat(2, 1fr)"}
                    display={"flex"}
                    justifyContent={"center"}
                    gap={"14px"}
                >
                    {mockedCarPost2.images.map((img, index) =>(
                        <GridItem
                            key={index}
                            w={"108px"}
                            h={"108px"}
                            p={"10px"}
                            bgColor={"grey.7"}
                            cursor={"pointer"}
                            onClick={() => {
                                setPosterImg(img.url)
                                onOpen()
                            }}>
                                <Image 
                                src={"img.url"} 
                                maxW={"100%"} 
                                h={"100%"} 
                                objectFit={"fill"}/>
                        </GridItem>
                    ))}
                </Grid>
            </Flex>
            <PosterImageModal isOpen={isOpen} onClose={onClose} posterImg={posterImg}/>
        </>
    )
}

export default PosterImageBox;