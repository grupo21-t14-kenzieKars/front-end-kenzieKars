import Header from "../../components/header"
import { Flex } from "@chakra-ui/react"
import LoginForm from "../../components/forms/loginForm"


const Login = () => {

    return (
        <>
            <Header />
            <Flex w={"full"} justifyContent={"center"}>
                <LoginForm />
            </Flex>
        </>
    )
}

export default Login