import { useForm } from "react-hook-form"
import Header from "../../components/header"
import { Button, Link, Input, Flex, Text, FormLabel, Center } from "@chakra-ui/react"
import InputWithLabel from "../../components/input"


const Login = () => {

    const { register, handleSubmit, reset } = useForm({
        mode: 'onSubmit',
    })

    const onSubmit = (data: any) => {
        console.log(data, "login");
        reset()
    }
    return (
        <>
            <Header />
            <Flex w={"full"} justifyContent={"center"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex
                        direction={'column'}
                        w='90%'
                        maxWidth='412px'
                        padding='44px'
                        alignItems={"center"}
                        justifyContent={"center"}
                        fontFamily='heading'
                        marginTop={{ base: '52px', md: '122px' }}>
                        <Text w={"full"} textAlign={"left"} fontSize='heading.4' fontWeight='medium' color='grey.0'>Login</Text>
                        <InputWithLabel placeHolder={"Digitar email"} id={"email"} type="email" label={"Email"}></InputWithLabel>
                        <InputWithLabel placeHolder={"Digitar senha"} id={"password"} type="password0 " label={"Senha"}></InputWithLabel>
                        <Link>Esqueci minha senha</Link>
                        <Button type="submit">Entrar</Button>
                        <Text >Ainda não possui conta</Text>
                        <Link href="/register"><Button>Cadastrar</Button></Link>
                    </Flex>
                </form>
            </Flex>
        </>
    )
}

export default Login