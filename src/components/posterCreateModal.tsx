import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import createPosterSchema from "../schemas/createPosterSchema"

const PosterCreateModal = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const { register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: zodResolver(createPosterSchema)
    })

    //Pegar carros na API e colocar em um State
    //Pegar marca de carros + ano + combustível + $$fipe e colocar em outro state
    //Pegar modelo do carro
    //Fazer função de fechar e resetar dados
    //submit de criação de modal + loading (?)

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
                p={"18px"}
                fontFamily={"heading"}
                >

                <Flex width="100%" height="100%" p={"15px"}>
                    <Heading fontWeight={"semibold"} fontSize={"heading.2"}>
                        Criar anúncio
                    </Heading>
                    <ModalCloseButton color={"grey.4"} />
                </Flex>

                <Flex flexDirection={"column"} gap={"15px"}>
                    <Text as={"h3"} fontWeight={"semibold"} fontSize={"heading.1"}>
                        Informações do veículo
                    </Text>

                    <FormControl id="brand">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Marca</FormLabel>
                        <Input type="text" placeholder="Mercedes Benz" />
                    </FormControl>

                    <FormControl id="model">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Modelo</FormLabel>
                        <Input type="text" placeholder="A 200CGI Advance Sedan" />
                    </FormControl>

                    <Flex width="100%" wrap={"wrap"} justifyContent={"space-between"}>
                        <FormControl id="year" width="48%">
                            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Ano</FormLabel>
                            <Input readOnly type="text" placeholder="Ano" />
                        </FormControl>

                        <FormControl id="fuel" width="48%">
                            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Combustível</FormLabel>
                            <Input readOnly type="text" placeholder="Gasolina/Etanol" />
                        </FormControl>

                        <FormControl id="Quilometragem" width="48%">
                            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Quilometragem</FormLabel>
                            <Input type="number" min={0} placeholder="30.000" />
                        </FormControl>

                        <FormControl id="color" width="48%">
                            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Cor</FormLabel>
                            <Input type="text" placeholder="Branco" />
                        </FormControl>

                        <FormControl id="fipe_price" width="48%">
                            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Preço tabela FIPE</FormLabel>
                            <Input readOnly type="text" placeholder="R$30.000,00" />
                        </FormControl>

                        <FormControl id="price" width="48%">
                            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Preço</FormLabel>
                            <Input type="text" placeholder="R$50.000,00" />
                        </FormControl>
                    </Flex>
                    

                    <FormControl id="description">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Descrição</FormLabel>
                        <Input type="text" placeholder="Descreva seu anúncio aqui" maxLength={600} />
                    </FormControl>

                    <FormControl id="img">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Imagem da capa</FormLabel>
                        <Input type="text" placeholder="https://image.com" />
                    </FormControl>

                    <FormControl id="img1">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>1ª imagem da galeria</FormLabel>
                        <Input type="text" placeholder="https://image.com" />
                    </FormControl>

                    <FormControl id="img2">
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>2ª imagem da galeria</FormLabel>
                        <Input type="text" placeholder="https://image.com" />
                    </FormControl>

                    <Flex width="100%" justifyContent={"flex-start"} paddingTop={"15px"}>
                        <Button width="75%" variant={"brandOpacity"}>Adicionar campo para imagem da galeria</Button>
                    </Flex>

                    <Flex justifyContent={"flex-end"} p={"30px 10px 5px 0"} gap={"10px"}>
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