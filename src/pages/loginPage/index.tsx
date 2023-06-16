import Header from "../../components/header";
import { Flex } from "@chakra-ui/react";
import LoginForm from "../../components/forms/loginForm";
import Footer from "../../components/footer";

const Login = () => {
  return (
    <>
      <Header />
      <Flex
        w={"full"}
        justifyContent={"center"}
        paddingBottom={{ base: "50px", md: "140px" }}
        bg="grey.8"
      >
        <LoginForm />
      </Flex>
      <Footer />
    </>
  );
};

export default Login;
