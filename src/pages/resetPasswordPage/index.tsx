import Header from "../../components/header";
import { Flex } from "@chakra-ui/react";
import Footer from "../../components/footer";
import ResetPasswordForm from "../../components/forms/resetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <>
      <Header />
      <Flex
        w={"full"}
        justifyContent={"center"}
        paddingTop={{ base: "80px",md: "0px" }}
        paddingBottom={{ base: "50px", md: "140px" }}
        bg="grey.8"
      >
        <ResetPasswordForm />
      </Flex>
      <Footer />
    </>
  );
};

export default ResetPasswordPage;
