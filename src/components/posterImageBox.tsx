import {
  Flex,
  Grid,
  GridItem,
  Heading,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import PosterImageModal from "./posterImageModal";
import { useState } from "react";
import { ICar } from "../contexts/Interfaces";


interface PosterImageBoxProps {
  car: ICar
}

const PosterImageBox = ({ car }: PosterImageBoxProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [posterImg, setPosterImg] = useState<string>("");

  return (
    <>
      <Flex
        w={"100%"}
        direction={"column"}
        bgColor={"grey.10"}
        gap={"25px"}
        p={"30px"}
        borderRadius={"6px"}
      >
        <Heading fontSize={"heading.3"}>Fotos</Heading>

        <Grid
          templateColumns={"repeat(3, 1fr)"}
          templateRows={"repeat(2, 1fr)"}
          justifyContent={"center"}
          gap={"14px"}
        >
          {car != null && car.images != undefined && <>
            {Object.values(car?.images).map((img, index) => (
              <GridItem
                key={index}
                w={"auto"}
                h={"auto"}
                maxH={"108px"}
                p={"10px"}
                bgColor={"grey.7"}
                cursor={"pointer"}
                onClick={() => {
                  setPosterImg(img);
                  onOpen();
                }}
              >
                <Image src={img} w={"100%"} h={"100%"} objectFit={"fill"} />
              </GridItem>
            ))}</>}
        </Grid>
      </Flex>
      <PosterImageModal
        isOpen={isOpen}
        onClose={onClose}
        posterImg={posterImg}
      />
    </>
  );
};

export default PosterImageBox;
