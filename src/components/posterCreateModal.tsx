import { Button, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import createPosterSchema from "../schemas/createPosterSchema"

const PosterCreateModal = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const { register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: zodResolver(createPosterSchema)
    })
    
    return(
        <>

        <Button onClick={onOpen}>Open</Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay width="100%" height="100%" />
                <ModalContent 
                color={"grey.1"}
                as="form"
                // onSubmit={handleSubmit{}}
                width="100%"
                maxW={"520px"}
                backgroundColor={"white"}
                p={"20px"}
                fontFamily={"heading"}
                >

                <Flex width="100%" align={"center"} justifyContent={"space-between"} p={"20px"}>
                    <Heading fontWeight={"semibold"}>Criar anúncio</Heading>
                    <ModalCloseButton color={"grey.4"}/>
                </Flex>


                <Flex width="100%" align={"center"} p={"15px"} justifyContent={"space-between"}>
                    <Heading fontWeight={"semibold"} fontSize={"heading.2"}>
                        Criar anúncio
                    </Heading>
                    <ModalCloseButton color={"grey.4"} />
                </Flex>

                <Flex>
                    <Text as={"h3"} fontWeight={"semibold"} fontSize={"heading.1"}>
                        Informações do veículo
                    </Text>

                    <FormControl id="brand">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Marca</FormLabel>
                        <Input type="text" placeholder="Digite a marca" />
                    </FormControl>

                    <FormControl id="model">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Modelo</FormLabel>
                        <Input type="text" placeholder="Modelo" />
                    </FormControl>

                    <FormControl id="year">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Ano</FormLabel>
                        <Input readOnly type="text" placeholder="Ano" />
                    </FormControl>

                    <FormControl id="fuel">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Combustível</FormLabel>
                        <Input readOnly type="text" placeholder="Gasolina/Etanol" />
                    </FormControl>

                    <FormControl id="Quilometragem">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Quilometragem</FormLabel>
                        <Input type="number" min={0} placeholder="30.000" />
                    </FormControl>

                    <FormControl id="color">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Cor</FormLabel>
                        <Input type="text" placeholder="Branco" />
                    </FormControl>

                    <FormControl id="fipe_price">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Preço tabela FIPE</FormLabel>
                        <Input readOnly type="text" placeholder="30.000,00" />
                    </FormControl>

                    <FormControl id="price">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Preço</FormLabel>
                        <Input type="text" placeholder="50.000,00" />
                    </FormControl>

                    <FormControl id="description">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Descrição</FormLabel>
                        <Input type="text" placeholder="Descreva seu anúncio aqui" maxLength={600} />
                    </FormControl>

                    <Flex>
                        <Button onClick={onClose} variant={"negative"}> Cancelar </Button>
                        <Button type="submit" variant={"brandDisable"}> Criar anúncio </Button>
                    </Flex>

                </Flex>
                </ModalContent>

            </Modal>
        </>
    )
}

export default PosterCreateModal