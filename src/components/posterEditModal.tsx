import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Select,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
import { useContext, useState } from "react"
import { CarContext } from "../contexts/CarsContext"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editPosterSchema } from "../schemas/posterSchema";
import { UserContext } from "../contexts/userContext";

interface IPosterEditModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

const EditPosterModal = ({isOpen, onClose}: IPosterEditModalProps) => {
    const { user } = useContext(UserContext)
  
    const {
        allCarsList,
        carModels, 
        getCarModels, 
        getSelectedCarModel, 
        selectedCarModel, 
        setSelectedCarModel,
        editCarPoster,
        deleteCarPoster,
        carData,
        setCarData,
        carId
    } = useContext(CarContext)

  

    const { isOpen: isOpenDeleteModal, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal} = useDisclosure()

    const [imagesCount, setImagesCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const [carBrand, setCarBrand] = useState("");
    const [ isActive, setIsActive ] = useState(true)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm({
        mode: "onBlur",
        resolver: zodResolver(editPosterSchema),
      });

    const handleAddImageButton = () => {
        if(imagesCount != 6){
            setImagesCount(imagesCount + 1)
        }
    }

    const handleBrandSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCarModel(null);
    const brand = e.target.value;
    setCarBrand(brand);
    getCarModels(brand);
    };
    
    const handleModelSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = e.target.value;
    getSelectedCarModel(model, carBrand);
    };
    
    const closeAndReset = () =>{
    setImagesCount(1)
    setSelectedCarModel(null)
    reset()
    onClose()
    }

    const carOptionsSelect =
    allCarsList &&
    Object.keys(allCarsList).map((brand) => (
      <option key={brand} value={brand}>
        {brand}
      </option>
    ));

  const carModelOptionsSelect = carModels.map((model: any) => (
    <option key={model.name} value={model.name}>
      {model.name}
    </option>
  ));

  const onSubmit = (data: any) => {
      const filledData = Object.entries(data).reduce((acc: any, [key, value]) => {
        if (value !== "R$0,00" && value !== "") {
          acc[key] = value;
        }
        return acc;
      }, {});
      console.log(Object.entries(filledData.images));
      const filledDataImages = Object.entries(filledData.images).reduce((acc: any, [key, value]) => {
        if (value !== "") {
          acc[key] = value;
        }
        return acc;
      }, {})
      filledData.images = filledDataImages

      if (filledData.price) {
        filledData.price = Number(filledData.price)
      }
      editCarPoster(filledData)
      reset();
      onClose()
      setLoading(false);
  }

  const deleteAndClose = () =>{
    onCloseDeleteModal()
    onClose()
    deleteCarPoster()
  }

  return(
    <>
    <Modal isOpen={isOpen} onClose={closeAndReset} closeOnOverlayClick>
      <ModalOverlay width="100%" height="100%" />
      <ModalContent
        color={"grey.1"}
        width="100%"
        maxW={"520px"}
        backgroundColor={"white"}
        p={"18px"}
        fontFamily={"heading"}
      >

        <FormControl
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
        isInvalid={!!errors}
        >

         <Flex width="100%" height="100%" p={"15px"}>
          <Heading fontWeight={"semibold"} fontSize={"heading.2"}>
            Editar anúncio
          </Heading>
          <ModalCloseButton color={"grey.4"} />
        </Flex>

        <Flex flexDirection={"column"} gap={"15px"}>
          <Text as={"h3"} fontWeight={"semibold"} fontSize={"heading.1"}>
            Informações do veículo
          </Text>

          <FormControl id="brand">
            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
              Marca
            </FormLabel>
            <Select {...register("brand")} onChange={handleBrandSelect} >
              {selectedCarModel === null && <option value={carData.brand}>{carData.brand}</option>}
                {carOptionsSelect}
            </Select>
            <FormErrorMessage>{errors && errors.brand?.message?.toString()}</FormErrorMessage>
          </FormControl>

          <FormControl id="model">
            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
              Modelo
            </FormLabel>
            <Select {...register("model")} onChange={handleModelSelect}>
              {selectedCarModel === null && <option value={carData.model}>{carData.model}</option>}
               {carModelOptionsSelect}
            </Select>
          </FormControl>

          <Flex width="100%" wrap={"wrap"} justifyContent={"space-between"}>
            <FormControl id="year" width="48%" isInvalid={!!errors}>
              <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
                Ano
              </FormLabel>
              <Input
                readOnly
                type="text"
                placeholder="Ano"
                value={selectedCarModel === null? carData.year : selectedCarModel.year}
                {...register("year")}
              />
              <FormErrorMessage>{errors && errors.year?.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl id="fuel_type" width="48%" isInvalid={!!errors}>
              <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
                Combustível
              </FormLabel>
              <Input
                readOnly
                type="text"
                placeholder="Gasolina/Etanol"
                value={selectedCarModel === null? carData.fuel_type :
                    (selectedCarModel && Number(selectedCarModel.fuel) === 1) ? "Flex" :
                    (selectedCarModel && Number(selectedCarModel.fuel) === 2) ? "Híbrido" :
                    (selectedCarModel && Number(selectedCarModel.fuel) === 3) ? "Elétrico" :
                    ""}
                {...register("fuel_type")}
              />
              <FormErrorMessage>{errors && errors.fuel_type?.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl id="kilometers" width="48%" isInvalid={!!errors}>
              <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
                Quilometragem
              </FormLabel>
              <Input
                type="number"
                min={0}
                {...register("kilometers")}
              />
              <FormErrorMessage>{errors && errors.kilometers?.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl id="color" width="48%" isInvalid={!!errors}>
              <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
                Cor
              </FormLabel>
              <Input type="text" 
              {...register("color")} />
              <FormErrorMessage>{errors && errors.color?.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl id="fipe_price" width="48%" isInvalid={!!errors}>
              <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
                Preço tabela FIPE
              </FormLabel>
              <Input
                readOnly
                type="text"
                placeholder="R$30.000,00"
                value={carData.fipe_price? `R$${carData?.fipe_price}`: "R$0,00"}
                {...register("fipe_price")}
              />
              <FormErrorMessage>{errors && errors.value?.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl id="price" width="48%" isInvalid={!!errors}>
              <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
                Preço
              </FormLabel>
              <Input
                type="number"
                {...register("price")}
              />
              <FormErrorMessage>{errors && errors.price?.message?.toString()}</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl id="description" isInvalid={!!errors}>
            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
              Descrição
            </FormLabel>
            <Input
              type="text"
              maxLength={600}
              {...register("description")}
            />
            <FormErrorMessage>{errors && errors.description?.message?.toString()}</FormErrorMessage>
          </FormControl>

          <Text
            w={"full"}
            textAlign={"left"}
            fontSize="heading.1"
            fontWeight="medium"
            color="grey.0"
            marginBottom={2}
          >
            Publicado
          </Text>
          
          {!isActive ? (
        <Flex w={"full"} justifyContent={"space-between"}>
          <Button
            size={"md"}
            type="button"
            w="45%"
            onClick={() => setIsActive(false)}
          >
            Sim
          </Button>
          <Button
            size={"md"}
            type="button"
            variant={"outline2"}
            w="45%"
            onClick={() => setIsActive(true)}
          >
            Não
          </Button>
        </Flex>
      ) : (
        <Flex w={"full"} justifyContent={"space-between"}>
          <Button
            size={"md"}
            type="button"
            w="45%"
            variant={"outline2"}
            onClick={() => setIsActive(false)}
          >
            Sim
          </Button>
          <Button
            size={"md"}
            type="button"
            w="45%"
            onClick={() => setIsActive(true)}
          >
            Não
          </Button>
        </Flex>
      )}

          <FormControl id="main_image">
            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
              Imagem da capa
            </FormLabel>
            <Input type="text" 
            // defaultValue={carData.images?.one} 
            {...register('images.one')}/>
          </FormControl>
                
            {Array.from({length: imagesCount}, (value, index) =>(
                <>
                    <FormLabel id={`images${index + 1}`}>{index+1}ª Imagem da galeria</FormLabel>
                    <Input key={index} type="text" 
                    // defaultValue={carData.images[index === 0 ? "two" : index === 1 ? "three" : index === 2 ? "four" : index === 3 ? "five" : "six"] ?? ""}
                    {...register(`images.${index === 0? "two" : index === 1 ? "three" : index === 2 ? "four": index === 3 ? "five" : "six"}`)}/>
                    <FormErrorMessage>{errors && errors.images?.message?.toString()}</FormErrorMessage>
                </>
            ))}

          <Flex width="100%" justifyContent={"flex-start"} paddingTop={"15px"}>
            <Button width="75%" variant={"brandOpacity"} onClick={handleAddImageButton}>
              Adicionar campo para imagem da galeria
            </Button>
          </Flex>

          <Flex justifyContent={"flex-end"} p={"30px 10px 5px 0"} gap={"10px"}>
            <Button onClick={onOpenDeleteModal} variant={"negative"}>
              Excluir anúncio
            </Button>
            <Button type="submit" variant={"brand1"}>
              Salvar alterações
            </Button>
          </Flex>
        </Flex>

      </FormControl>
      </ModalContent>
    </Modal>

    <Modal isOpen={isOpenDeleteModal} onClose={onCloseDeleteModal}>
      <ModalOverlay />
      <ModalContent
                width="100%"
                maxWidth="520px" 
                color={"grey.1"}
                backgroundColor={"white"}
                gap={"15px"}
                p={"15px"} 
                fontFamily={"heading"}
                borderRadius={"6px"} 
                fontWeight={"semibold"} >
            <Flex width="100%" height="100%" p={"15px"}>
              <Heading fontWeight={"semibold"} fontSize={"heading.2"}>
                Excluir anúncio
              </Heading>
              <ModalCloseButton color={"grey.4"} />
            </Flex>
          <Flex flexDirection={"column"} p={"10px"} gap={"20px"}>

              <Text fontSize={"heading.1"} color={"grey.1"}>Tem certeza que deseja remover este anúncio? </Text>
              <Text fontSize={"heading.1"} fontWeight={"light"} color={"grey.3"}>Essa ação não pode ser desfeita. Isso excluirá permanentemente seu anúncio dos nossos servidores</Text>
          </Flex>
        <Flex flexDirection={"row"} justifyContent={"flex-end"} gap={"15px"}>
          <Button variant={"negative"} size={"lg"} onClick={onCloseDeleteModal}>Cancelar</Button>
          <Button variant={"alert"} size={"lg"} onClick={deleteAndClose}>Sim, excluir anúncio</Button>
        </Flex>

      </ModalContent>
    </Modal>
    </>
  )
}

export default EditPosterModal;