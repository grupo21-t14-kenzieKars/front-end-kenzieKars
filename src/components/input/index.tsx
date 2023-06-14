import { Flex, FormLabel, Input } from "@chakra-ui/react"
import { UseFormRegisterReturn } from "react-hook-form"

interface InputWithLabelProps {
    placeHolder: string
    id: string
    label: string
    value?: string
    type: string
    register?: UseFormRegisterReturn
}

const InputWithLabel = ({ placeHolder, id, label, value, type, register }: InputWithLabelProps) => {
    return (
        <Flex
            direction={"column"}
            justify={"start"}
            alignItems={"start"}
            w={"full"}
            fontFamily={'body'}>
            <FormLabel
                w={"full"}
                textAlign={"left"}
                fontSize='heading.1'
                fontWeight='medium'
                color='grey.1'
                htmlFor={id}>
                {label}
            </FormLabel>
            <Input
                id={id}
                type={type}
                placeholder={placeHolder}
                w={"full"}
                value={value}
                _placeholder={{ color: 'grey.3', fontWeight: 'normal' }}
                _focus={{ borderColor: 'brand.2' }}
                {...register}>
            </Input>
        </Flex>
    )
}

export default InputWithLabel