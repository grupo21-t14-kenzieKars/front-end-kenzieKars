import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Button,
  MenuList,
  MenuItem,
  MenuButton,
  Menu,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../../assets/Motors shop.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useLocation, useNavigate } from "react-router-dom";
import UserEditModal from "../userEditModal";
import AddressEditModal from "../addressEditModal";


const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { user, isSeller, logout, loading } = useContext(UserContext)

  const { isOpen: isOpenEditModal, onOpen: onOpenEditModal, onClose: onCloseEditModal } = useDisclosure()
  const { isOpen: isOpenAddressModal, onOpen: onOpenAddressModal, onClose: onCloseAddressModal } = useDisclosure()
  const navigate = useNavigate()
  const location = useLocation()
  const isLoginOrRegister = location.pathname == '/login' || location.pathname == '/regiter' ? true : false

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      backgroundColor="gray.100"
      color="white"
      height="20"
      borderBottom={"2px"}
      borderBottomColor={"gray.300"}
    >
      <Box as={'a'} href="/" padding="20px 60px">
        <img src={logo} alt="Logo" />
      </Box>
      {loading ? <Spinner /> : <>
        {isOpen && (
          <Box width={"full"} position={"absolute"} zIndex={1}>
            {user ? (
              <Box
                mt={{ base: 4, md: 0 }}
                display={{ base: "block", md: "none" }}
                alignItems="center"
                justifyContent="space-between"
                flex={1}
                backgroundColor="white.1"
                color="grey.2"
                textAlign={"center"}
                fontWeight={600}
                marginTop="48"
                width={"full"}
              >
                <Box p={2} display={{ base: "block", md: "none" }}>
                  <a onClick={onOpenEditModal}>Editar Perfil</a>
                </Box>
                <Box p={2} display={{ base: "block", md: "none" }}>
                  <a onClick={onOpenAddressModal}>Editar Endereço</a>
                </Box>
                {isSeller && (
                  <Box p={2}>
                    <button onClick={() => navigate('/profile/seller')}>Meus anuncios</button>
                  </Box>
                )}
                <Box p={2}>
                  <button onClick={() => logout()}>Sair</button>
                </Box>
              </Box>
            ) : (
              <Box
                mt={{ base: 4, md: 0 }}
                display={{ base: "block", md: "none" }}
                alignItems="center"
                justifyContent="space-between"
                flex={1}
                backgroundColor="white.1"
                color="grey.2"
                textAlign={"center"}
                fontWeight={600}
                marginTop="48"
                width={"full"}
                gap={5}
              >
                <Box
                  display="flex"
                  justifyContent={"center"}
                  alignItems={"center"}
                  textAlign={"center"}
                  width={"full"}
                  p={"20px"}
                >
                  <Link
                    _hover={{}}
                    color={"grey.2"}
                    href="/login"
                    fontWeight={"semibold"}
                  >
                    Fazer Login
                  </Link>
                </Box>
                <Box>
                  <Button
                    p={"20px"}
                    px={["24px", "24px"]}
                    variant={"outline2"}
                    size={"lg"}
                    border={"2px solid #CED4DA"}
                    width="90%"
                    margin="0 auto"
                    rounded={"4px"}
                    as={Link}
                    href="/register"
                  >
                    Cadastrar
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        )}
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          variant="ghost"
          color={"gray.600"}
          display={{ base: "block", md: "none" }}
          aria-label={""}
          zIndex={2}
        />
        <Menu>
          {user ? (
            <MenuButton
              as={Button}
              height={"100%"}
              borderLeft={"2px"}
              borderLeftColor={"gray.300"}
              padding="20px 60px"
              variant="gray1"
              display={{ base: "none", md: "block" }}
            >
              <Flex align={"center"} justifyContent={"center"} gap={2}>
                <Box
                  p={2}
                  color="white.1"
                  rounded={"full"}
                  backgroundColor="brand.2"
                  w='40px'
                  h='40px'
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  {user.name
                    .split(" ")
                    .filter((_palavra, indice) => indice < 2)
                    .map((palavra) => palavra.charAt(0))
                    .join("")}
                </Box>
                <Box color="grey.2">{user.name}</Box>
              </Flex>
            </MenuButton>
          ) : (
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"36px"}
              padding="20px 60px"
              display={{ base: "none", md: "flex" }}
            >
              <Box display="flex" alignItems={"center"} textAlign={"center"}>
                {isLoginOrRegister ? <Link
                  _hover={{}}
                  color={"brand.1"}
                  href="/login"
                  fontWeight={"semibold"}
                >
                  Fazer Login
                </Link> : <Link
                  _hover={{}}
                  color={"grey.2"}
                  href="/login"
                  fontWeight={"semibold"}
                >
                  Fazer Login
                </Link>}
              </Box>
              <Box>
                <Button
                  p={"20px"}
                  px={["24px", "24px"]}
                  variant={"outline2"}
                  size={"lg"}
                  border={"2px solid #CED4DA"}
                  rounded={"4px"}
                  as={Link}
                  href="/register"
                >
                  Cadastrar
                </Button>
              </Box>
            </Stack>
          )}
          <MenuList color={"black"}>
            <MenuItem onClick={onOpenEditModal}>Editar perfil</MenuItem>
            <MenuItem onClick={onOpenAddressModal}>Editar endereço</MenuItem>
            {isSeller && <MenuItem as={'button'} onClick={() => navigate('/profile/seller')}>Meus anúncios</MenuItem>}
            <MenuItem onClick={() => logout()}>Sair</MenuItem>
          </MenuList>
        </Menu>
        <UserEditModal isOpen={isOpenEditModal} onClose={onCloseEditModal} />
        <AddressEditModal isOpen={isOpenAddressModal} onClose={onCloseAddressModal} />
      </>}
    </Flex>
  );
};

export default Header;
