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
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logo from '../../assets/Motors shop.svg'
import { mockedUser2 } from './../../mocks/index';

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();
    const user = mockedUser2
    

    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            backgroundColor="gray.100"
            color="white"
            height="20"
            borderBottom={'2px'}
            borderBottomColor={'gray.300'}
        >
            <Box
                padding='20px 60px'>
                <img src={logo} alt="Logo" />
            </Box>
            {isOpen && <Box
                width={'full'}
                position={'fixed'}>
                {user ? (<Box
                    mt={{ base: 4, md: 0 }}
                    display={{ base: 'block', md: 'none' }}
                    alignItems="center"
                    justifyContent="space-between"
                    flex={1}
                    backgroundColor='white.1'
                    color='grey.2'
                    textAlign={'center'}
                    fontWeight={600}
                    marginTop='48'
                    width={'full'}
                >
                    <Box p={2} display={{ base: 'block', md: 'none' }}>
                        <a href="/">Editar Perfil</a>
                    </Box>
                    <Box p={2} display={{ base: 'block', md: 'none' }}>
                        <a href="/">Editar Endereço</a>
                    </Box>
                    {user.is_seller && <Box p={2}>
                        <a href="/">Meus anuncios</a>
                    </Box>}
                    <Box p={2}>
                        <a href="/">Sair</a>
                    </Box>
                </Box>)
                    :
                    (<Box
                        mt={{ base: 4, md: 0 }}
                        display={{ base: 'block', md: 'none' }}
                        alignItems="center"
                        justifyContent="space-between"
                        flex={1}
                        backgroundColor='white.1'
                        color='grey.2'
                        textAlign={'center'}
                        fontWeight={600}
                        marginTop='48'
                        width={'full'}
                        gap={5}
                    >
                        <Box display="flex" justifyContent={'center'} alignItems={"center"} textAlign={"center"} width={'full'} p={"20px"}>
                            <Link _hover={{}} color={"grey.2"} href="/login" fontWeight={"semibold"}>
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
                                width='90%'
                                margin='0 auto'
                                rounded={"4px"}
                                as={Link}
                                href="/register"
                            >
                                Cadastrar
                            </Button>
                        </Box>
                    </Box>)
                }
            </Box>}
            <IconButton
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                onClick={onToggle}
                variant="ghost"
                color={'gray.600'}
                display={{ base: 'block', md: 'none' }} aria-label={''} />
            <Menu>
                {user ? (<MenuButton
                    as={Button}
                    height={'100%'}
                    borderLeft={'2px'}
                    borderLeftColor={'gray.300'}
                    padding='20px 60px'
                    variant='gray1'
                    display={{ base: 'none', md: 'block' }}>
                    <Flex
                        align={'center'}
                        justifyContent={'center'}
                        gap={2}>
                        <Box
                            p={2}
                            color='white.1'
                            rounded={'full'}
                            backgroundColor='brand.2'
                            minW={0}>
                            {user.name.split(" ").filter((palavra, indice) => indice < 2).map(palavra => palavra.charAt(0)).join("")}
                        </Box>
                        <Box color='grey.2'>{user.name}</Box>
                    </Flex>

                </MenuButton>) : (
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        gap={"36px"}
                        padding='20px 60px'
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Box display="flex" alignItems={"center"} textAlign={"center"}>
                            <Link _hover={{}} color={"grey.2"} href="/login" fontWeight={"semibold"}>
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
                                rounded={"4px"}
                                as={Link}
                                href="/register"
                            >
                                Cadastrar
                            </Button>
                        </Box>
                    </Stack>
                )}
                <MenuList color={'black'}>
                    <MenuItem>Editar perfil</MenuItem>
                    <MenuItem >Editar endereço</MenuItem>
                    {user.is_seller && <MenuItem>Meus anúncios</MenuItem>}
                    <MenuItem>Sair</MenuItem>
                </MenuList>
            </Menu>
        </Flex >
    )
}

export default Header