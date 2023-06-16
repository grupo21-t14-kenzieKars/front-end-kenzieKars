import { Flex } from "@chakra-ui/react";
import RegisterForm from "../../components/forms/registerForm";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Register = () => {
  return (
    <>
      <Header />
      <Flex
        w={"full"}
        justifyContent={"center"}
        paddingBottom={{ base: "50px", md: "140px" }}
        bg="grey.8"
      >
        <RegisterForm />
      </Flex>
      <Footer />
    </>
  );
};

export default Register;
