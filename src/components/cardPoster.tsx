import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";

const CardPoster = ({carPost}) => {
  const cardStatus = true;

  return (
    <Card
      w={"100%"}
      maxWidth={"312px"}
      bgColor={"transparent"}
      boxShadow={"none"}
      gap={"18px"}
      as={"a"}
      href={""}
      data-group
    >
      <CardHeader p={0}>
        <Flex
          overflow={"hidden"}
          position={"relative"}
          justifyContent={"center"}
          border={"2px solid transparent"}
          _groupHover={{
            border: "2px solid blue",
              transition: "1s",
              img: {
                transform:"scale(1.1)"
            }
          }}
        >
            <Image
              src={carPost.images[0].url}
              w="100%"
              maxW="100%"
              h="100%"
              maxH="150px"
              bg={"grey.7"}
              objectFit={"contain"}
              alt="car image"
              transformOrigin="center"
              transition="0.3s"
            />

          {carPost.price <=
            carPost.fipePrice - carPost.fipePrice * 0.05 &&
            cardStatus && (
              <Flex
                w={"15px"}
                h={"27px"}
                color={"white"}
                bgColor={"green.500"}
                fontWeight={"medium"}
                fontSize={"heading.1"}
                px={"3px"}
                borderRadius={"2px"}
                position={"absolute"}
                top={0}
                right={0}
              >
                $
              </Flex>
            )}

          {cardStatus && (
            <Flex
              h={"24px"}
              w={"51px"}
              color={"white"}
              bg={carPost.isPublished ? "brand.1" : "grey.4"}
              fontSize={"heading.1"}
              position={"absolute"}
              top={"10px"}
              left={"15px"}
            >
              {carPost.isPublished ? (
                <Text px="8px">Ativo</Text>
              ) : (
                <Text px={"5px"}>Inativo</Text>
              )}
            </Flex>
          )}
        </Flex>
      </CardHeader>

      <CardBody p={0}>
        <Flex flexDirection={"column"} gap={"10px"} color={"grey.2"}>
          <Heading
            as="h3"
            color={"grey.1"}
            fontSize={"heading.2"}
            fontWeight={"semibold"}
            noOfLines={1}
          >
            {carPost.model}
          </Heading>
          <Text
            color={"grey.2"}
            fontSize={"heading.1"}
            textAlign={"left"}
            noOfLines={2}
          >
            {carPost.description}
          </Text>
        </Flex>

        <Flex alignItems={"center"}>
          <Avatar
            name={carPost.user.name}
            w={"32px"}
            h={"32px"}
            size={"sm"}
            margin={"10px 10px 10px 0px"}
          />
          <Text color={"grey.2"} fontSize={"heading.1"} fontWeight={"medium"}>
            {carPost.user.name}
          </Text>
        </Flex>
      </CardBody>

      <CardFooter p={0}>
        <Flex w={"100%"} justifyContent={"space-between"}>
          <Flex gap={"13px"}>
            <Tag
              color={"brand.1"}
              bgColor={"brand.4"}
              fontSize={"heading.1"}
              fontWeight={"medium"}
              p={"8px 5px"}
            >
              {carPost.kilometers}km
            </Tag>
            <Tag
              color={"brand.1"}
              bgColor={"brand.4"}
              fontSize={"heading.1"}
              fontWeight={"medium"}
            >
              {carPost.year}
            </Tag>
          </Flex>
          <Text fontSize={"heading.2"} fontWeight={"medium"}>
            R${carPost.price.toFixed(2)}
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default CardPoster