import { Flex, FormLabel, Input } from "@chakra-ui/react"

interface InputWithLabelProps {
    placeHolder: string
    id: string
    label: string
    value?: string
    type: string
}

const InputWithLabel = ({ placeHolder, id, label, value, type }: InputWithLabelProps) => {
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
                _focus={{ borderColor: 'brand.2' }}>
            </Input>
        </Flex>
    )
}

export default InputWithLabel