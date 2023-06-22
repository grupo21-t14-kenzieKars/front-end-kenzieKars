import { createContext, useEffect, useState } from "react";
import { IUserProviderData } from "./Interfaces";
import { LoginData } from "../components/forms/loginForm/loginSchema";
import { RegisterData } from "../components/forms/registerForm/registerSchema";
import { apiG21 } from "../services/api";
import { useNavigate } from "react-router-dom";
import { IMockedUser } from "../interfaces/mocksInterfaces";
import { IForgotPassword } from "../interfaces/forgotPassword.interfaces";
import { useToast } from "@chakra-ui/react";

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

const
    UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IMockedUser | null>(null);
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const toast = useToast();

  const navigate = useNavigate();

  useEffect(() => {
    const auth = async () => {
      const token = localStorage.getItem("@kenzie-cars:token");

      if (!token) {
        localStorage.clear();
        return;
      }
      try {
        const { data } = await apiG21.get("/user/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        setIsSeller(data.is_seller);
      } catch (error) {
        console.error(error);
        window.localStorage.clear();
      }
    };
    auth();
  }, []);

  const loginUser = async (loginData: LoginData): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await apiG21.post("/login", loginData);
      console.log(data);
      window.localStorage.setItem("@kenzie-cars:token", data.token);

      const user = await apiG21.get("/user/profile", {
        headers: {
          authorization: `Bearer ${data.token}`,
        },
      });
      setUser(user.data);
      setIsSeller(user.data.is_seller);
      navigate("/");
    } catch (error) {
      console.error(error);
      window.localStorage.clear();
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (createUserData: any): Promise<void> => {
    try {
      setLoading(true);
      await apiG21.post("/user", createUserData);

      navigate("/login");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const sendResetPassworEmail = async (data: IForgotPassword) => {
    try {
      await apiG21.post("/recovery", data);

      toast({
        status: "success",
        description: "Email enviado com sucesso",
        duration: 3000,
        position: "bottom-right",
        containerStyle: {
          color: "white",
        },
        isClosable: true,
      });
    } catch (error: any) {
      console.error(error);
      toast({
        status: "error",
        description:
          error.response?.data.message ||
          "Ops... ocorreu um erro ! tente novamente mais tarde",
        duration: 3000,
        position: "bottom-right",
        containerStyle: {
          color: "white",
        },
      });
    }
  };

  return (
    <>
      <UserContext.Provider
        value={{
          loginUser,
          createUser,
          sendResetPassworEmail,
          user,
          loading,
          isSeller,
          setLoading,
          logout,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
