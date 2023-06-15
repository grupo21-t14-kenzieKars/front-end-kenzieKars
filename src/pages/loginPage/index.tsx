import Header from "../../components/header"
import { Flex } from "@chakra-ui/react"
import LoginForm from "../../components/forms/loginForm"
import Footer from "../../components/footer"


const Login = () => {

    return (
        <>
            <Header />
            <Flex w={"full"} justifyContent={"center"} marginBottom='140px'>
                <LoginForm />
            </Flex>
            <Footer />
        </>
    )
}

export default Login