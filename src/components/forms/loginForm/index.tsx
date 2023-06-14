import { Button, FormControl, Link, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import InputWithLabel from "../../input";
import loginSchema, { LoginData } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod"

const LoginForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginData>({
        mode: 'onBlur',
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = (data: LoginData): void => {
        console.log(data, "login", errors)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', maxWidth: '412px', width: '90%', alignItems: 'center', justifyContent: 'center' }}>
            <FormControl
                w='90%'
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                fontFamily='heading'
                marginTop={{ base: '52px', md: '122px' }}
                gap={2}>
                <Text
                    w={"full"}
                    textAlign={"left"}
                    fontSize='heading.4'
                    fontWeight='medium'
                    color='grey.0'
                    marginBottom={6}>
                    Login
                </Text>
                <InputWithLabel
                    placeHolder={"Digitar email"}
                    id={"email"}
                    type="email"
                    label={"Email"}
                    register={register('email')} />
                <InputWithLabel
                    placeHolder={"Digitar senha"}
                    id={"password"}
                    type="password"
                    label={"Senha"}
                    register={register('password')} />
                <Link
                    fontSize={'heading.1'}
                    fontWeight={'medium'}
                    textAlign={"right"} w={"full"}
                    marginBottom={6}>
                    Esqueci minha senha
                </Link>
            </FormControl>
            <Button
                type="submit"
                size={'lg'}
                w='90%'>
                Entrar
            </Button>
            <Text
                fontSize={'heading.1'}
                fontWeight={'normal'}
                textAlign={"center"}
                w={"full"}
                margin={6}>
                Ainda não possui conta
            </Text>
            <Link
                href="/register"
                w='90%'
                maxWidth='412px'>
                <Button
                    size={'lg'}
                    variant={'outline2'}
                    w={"full"}>
                    Cadastrar
                </Button>
            </Link>
        </form>
    )
}

export default LoginForm

