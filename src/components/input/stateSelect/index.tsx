import { Flex, FormLabel, Select } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";
interface InputStateSelectProps {
    id: string
    label: string
    register?: UseFormRegisterReturn
}

const StateSelect = ({ label, id, register }: InputStateSelectProps) => {
    const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];


    return (
        <>
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
                <Select
                    border={"none"}
                    variant='unstyled'
                    required
                    {...register}>
                    <option value=''>--</option>
                    {states.map((state) => <option key={state} value={state}>{state}</option>)}
                </Select>
            </Flex>

        </>
    )
}

export default StateSelect