/* eslint-disable @typescript-eslint/no-explicit-any */
import { List, ListItem } from "@chakra-ui/react";
import CardPoster from "./cardPoster";

const CarPostList = ({ carsList, isOwner }: any) => {
  return (
    <List
      display={"flex"}
      gap={"30px"}
      flexWrap={{ base: "nowrap", md: "wrap" }}
      justifyContent={{ base: "left", md: "center" }}
      padding={"40px 0"}
      overflowX={"scroll"}
      w={"100%"}
      maxW="100%"
    >
      {carsList &&
        carsList.map((elem: any, i: any) => (
          <ListItem key={i}>
            <CardPoster carPost={elem} isOwner={isOwner} />
          </ListItem>
        ))}
    </List>
  );
};

export default CarPostList;
