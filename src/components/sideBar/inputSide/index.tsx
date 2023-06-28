import { Input } from "@chakra-ui/react"

type InputSideProps = {
    placetext: string
    id: string
    register: any
}

const InputSide = ({ placetext, id, register }: InputSideProps) => {
    return (
        <Input
            type="number"
            color='grey.0'
            fontWeight="semibold"
            backgroundColor='grey.5'
            _placeholder={{ color: 'grey.3', fontWeight: "semibold", fontSize: "heading.2", textAlign: "center" }}
            placeholder={placetext}
            id={id}
            {...register}
        >
        </Input>
    )
}

export default InputSide