import { Flex } from "@chakra-ui/react";
import RegisterForm from "../../components/forms/registerForm";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Register = () => {
  return (
    <>
      <Header />
      <Flex w={"full"} justifyContent={"center"} marginBottom="140px">
        <RegisterForm />
      </Flex>
      <Footer />
    </>
  );
};

export default Register;
