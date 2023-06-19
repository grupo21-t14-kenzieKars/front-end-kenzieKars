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
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { createPosterSchema } from "../schemas/createPosterSchema";
import { CarContext } from "../contexts/carsContext";
import { INewPoster } from "../interfaces/posterInterfaces";

interface IPosterCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PosterCreateModal = ({ isOpen, onClose }: IPosterCreateModalProps) => {
  const [loading, setLoading] = useState(false);
  const [carBrand, setCarBrand] = useState("");
  const [imagesCount, setImagesCount] = useState(1);

  const handleAddImageButton = () => {
    if(imagesCount != 6){
        setImagesCount(imagesCount + 1)
    }
  }

  const {
    createPoster,
    allCarsList,
    carModels,
    getCarModels,
    getSelectedCarModel,
    selectedCarModel,
    setSelectedCarModel,
  } = useContext(CarContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<INewPoster>({
    mode: "onBlur",
    resolver: zodResolver(createPosterSchema),
  });

  const handleBrandSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCarModel(null);
    const brand = e.target.value;
    setCarBrand(brand);
    getCarModels(brand);
  };

  const handleModelSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCarModel(null);
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

  const onSubmit = (newData: INewPoster) => {
    createPoster(newData);
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeAndReset}>
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

          <FormControl id="brand" isInvalid={!!errors}>
            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
              Marca
            </FormLabel>
            <Select {...register("brand")} onChange={handleBrandSelect} >
              <option value="">Escolha a marca</option>
                {carOptionsSelect}
            </Select>
            <FormErrorMessage>{errors.brand?.message?.toString()}</FormErrorMessage>
          </FormControl>

          <FormControl id="model" isInvalid={!!errors}>
            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
              Modelo
            </FormLabel>
            <Select placeholder="Selecione o modelo" {...register("model")} onChange={handleModelSelect}>
                {carModelOptionsSelect}
            </Select>
            <FormErrorMessage>{errors.model?.message?.toString()}</FormErrorMessage>
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
                value={selectedCarModel?.year}
                {...register("year")}
              />
              <FormErrorMessage>{errors.year?.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl id="fuel_type" width="48%" isInvalid={!!errors}>
              <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
                Combustível
              </FormLabel>
              <Input
                readOnly
                type="text"
                placeholder="Gasolina/Etanol"
                value={
                    (selectedCarModel && selectedCarModel.fuel === 1) ? "Flex" :
                    (selectedCarModel && selectedCarModel.fuel === 2) ? "Híbrido" :
                    (selectedCarModel && selectedCarModel.fuel === 3) ? "Elétrico" :
                    ""}
                {...register("fuel_type")}
              />
              <FormErrorMessage>{errors.fuel_type?.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl id="kilometers" width="48%" isInvalid={!!errors}>
              <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
                Quilometragem
              </FormLabel>
              <Input
                type="number"
                min={0}
                placeholder="30.000"
                {...register("kilometers")}
              />
              <FormErrorMessage>{errors.kilometers?.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl id="color" width="48%" isInvalid={!!errors}>
              <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
                Cor
              </FormLabel>
              <Input type="text" placeholder="Branco" {...register("color")} />
              <FormErrorMessage>{errors.color?.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl id="fipe_price" width="48%" isInvalid={!!errors}>
              <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
                Preço tabela FIPE
              </FormLabel>
              <Input
                readOnly
                type="text"
                placeholder="R$30.000,00"
                value={selectedCarModel? `R$ ${selectedCarModel?.value},00` : "R$0,00"}
                {...register("fipe_price")}
              />
              <FormErrorMessage>{errors.fipe_price?.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl id="price" width="48%" isInvalid={!!errors}>
              <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
                Preço
              </FormLabel>
              <Input
                type="number"
                placeholder="R$50.000,00"
                {...register("price")}
              />
              <FormErrorMessage>{errors.price?.message?.toString()}</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl id="description" isInvalid={!!errors}>
            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
              Descrição
            </FormLabel>
            <Input
              type="text"
              placeholder="Descreva seu anúncio aqui"
              maxLength={600}
              {...register("description")}
            />
            <FormErrorMessage>{errors.description?.message?.toString()}</FormErrorMessage>
          </FormControl>

          <FormControl id="img">
            <FormLabel fontSize={"heading.1"} fontWeight={"semibold"}>
              Imagem da capa
            </FormLabel>
            <Input type="text" placeholder="https://image.com" {...register('images.0.image_url')}/>
          </FormControl>
                
            {Array.from({length: imagesCount}, (_, index) =>(
                <>
                    <FormLabel id="image_url">{index+1}ª Imagem da galeria</FormLabel>
                    <Input type="text" placeholder="https://image.com" {...register(`images.${index}.image_url` )}/>
                    <FormErrorMessage>{errors.images?.message?.toString()}</FormErrorMessage>
                </>
            ))}

          <Flex width="100%" justifyContent={"flex-start"} paddingTop={"15px"}>
            <Button width="75%" variant={"brandOpacity"} onClick={handleAddImageButton}>
              Adicionar campo para imagem da galeria
            </Button>
          </Flex>

          <Flex justifyContent={"flex-end"} p={"30px 10px 5px 0"} gap={"10px"}>
            <Button onClick={onClose} variant={"negative"}>
              Cancelar
            </Button>
            <Button type="submit" variant={"brandDisable"}>
              Criar anúncio
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default PosterCreateModal;
