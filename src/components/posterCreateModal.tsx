import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Modal, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useContext, useState } from "react"
import { createPosterSchema } from "../schemas/createPosterSchema"
import { CarContext } from "../contexts/carsContext"

interface IPosterCreateModalProps{
    isOpen: boolean;
    onClose: () => void;
}

const PosterCreateModal = ({isOpen, onClose}: IPosterCreateModalProps) => {
    const [loading, setLoading] = useState(false)
    const [findBrand, setFindBrand] = useState("")
    const [findModel, setFindModel] = useState("")

    const { createPoster, carList, carModels, getCarModels, getSelectedCarModel, selectedCarModel } = useContext(CarContext)

    const { register, handleSubmit, formState: { errors } , reset} = useForm({
        mode: 'onBlur',
        resolver: zodResolver(createPosterSchema)
    })

    const onSubmit = (data: any) => {
        createPoster(data)
        reset()
    }

    //Pegar carros na API e colocar em um State
    //Pegar marca de carros + ano + combustível + $$fipe e colocar em outro state
    //Pegar modelo do carro
    //Fazer função de fechar e resetar dados
    //submit de criação de modal + loading (?)

    return(
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay width="100%" height="100%" />
                <ModalContent 
                color={"grey.1"}
                as="form"
                onSubmit={handleSubmit(onSubmit)}
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

                    <FormControl id="brand" isInvalid={!!errors} >
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Marca</FormLabel>
                        <Input type="text" placeholder="Mercedes Benz" {...register('brand')}/>
                        <FormErrorMessage>{errors.brand?.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl id="model" isInvalid={!!errors}>
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Modelo</FormLabel>
                        <Input type="text" placeholder="A 200CGI Advance Sedan" {...register('model')} />
                        <FormErrorMessage>{errors.model?.message}</FormErrorMessage>
                    </FormControl>

                    <Flex width="100%" wrap={"wrap"} justifyContent={"space-between"}>
                        <FormControl id="year" width="48%" isInvalid={!!errors}>
                            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Ano</FormLabel>
                            <Input readOnly type="text" placeholder="Ano" {...register('year')} />
                            <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl id="fuel_type" width="48%" isInvalid={!!errors}>
                            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Combustível</FormLabel>
                            <Input readOnly type="text" placeholder="Gasolina/Etanol" {...register('fuel_type')} />
                            <FormErrorMessage>{errors.fuel_type?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl id="kilometers" width="48%" isInvalid={!!errors}>
                            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Quilometragem</FormLabel>
                            <Input type="number" min={0} placeholder="30.000" {...register ('kilometers')}/>
                            <FormErrorMessage>{errors.kilometers?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl id="color" width="48%" isInvalid={!!errors}>
                            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Cor</FormLabel>
                            <Input type="text" placeholder="Branco" {...register('color')} />
                            <FormErrorMessage>{errors.color?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl id="fipe_price" width="48%" isInvalid={!!errors}>
                            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Preço tabela FIPE</FormLabel>
                            <Input readOnly type="number" placeholder="R$30.000,00" {...register('fipe_price')}/>
                            <FormErrorMessage>{errors.fipe_price?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl id="price" width="48%" isInvalid={!!errors}>
                            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Preço</FormLabel>
                            <Input type="number" placeholder="R$50.000,00" {...register('price')}/>
                            <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
                        </FormControl>
                    </Flex>

                    <FormControl id="description" isInvalid={!!errors}>
                        <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>Descrição</FormLabel>
                        <Input type="text" placeholder="Descreva seu anúncio aqui" maxLength={600} {...register('description')} />
                        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
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
    )
}

export default PosterCreateModal