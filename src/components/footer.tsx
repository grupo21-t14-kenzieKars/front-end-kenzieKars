import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import Logo from "../assets/MotorsShop.svg"; 

function Footer() {
  return (
    <Box as="footer" bg="black" color="white" maxW="100%">
      <Flex
        px={{ md: "60px" }}
        py={{ base: "45px", md: "56px" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        flexWrap="wrap"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "60px" }}
      >
        <Box display="flex" alignItems="center">
          <img src={Logo} alt="Logo" width="150" height="30" /> 
        </Box>
        <Text fontWeight="normal" color="white" fontSize="body.2">
          © 2022 - Todos os direitos reservados.
        </Text>
        <IconButton
          icon={<ChevronUpIcon />}
          aria-label="button-scrool-top"
          color="white"
          width="50px"
          fontSize="18px"
          p="22px"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          bg="grey.1"
          border="0px"
          _hover={{ bg: "grey.2" }}
        />
      </Flex>
    </Box>
  );
}

export default Footer;
