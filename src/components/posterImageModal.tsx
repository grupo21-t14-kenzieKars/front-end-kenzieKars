import { Modal, ModalContent, ModalOverlay, Image, Flex, Heading, ModalCloseButton } from "@chakra-ui/react"

interface IPosterImageModalProps{
    isOpen: boolean;
    onClose: () => void;
    posterImg: string;
}

const PosterImageModal = ({posterImg, isOpen, onClose}: IPosterImageModalProps) =>{

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent color={"grey.1"} bgColor={"white"} w={"520px"} maxH={"354px"}
                display={"flex"} flexDirection={"column"} gap={"20px"} p={"10px"}
            >
                <Flex justify={"space-between"} p={"20px"}>
                    <Heading fontSize={"heading.2"} fontFamily={"heading"}>
                        Imagem do veículo
                    </Heading>
                    <ModalCloseButton color={"grey.4"}/>
                </Flex>
                <Flex w={"100%"} maxW={"465px"} h={"100%"} maxH={"240px"} bgColor={"grey.7"} justify={"center"} align={"center"} p={"57px 43px"}>
                        <Image src={posterImg} objectFit={"contain"} fallbackSrc='https://via.placeholder.com/350x200'/>
                  </Flex>
            </ModalContent>
        </Modal>
    )
}

export default PosterImageModal