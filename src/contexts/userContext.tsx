import { createContext } from "react"
import { IUserProviderData } from "./Interfaces"
import { LoginData } from "../components/forms/loginForm/loginSchema"
import { RegisterData } from "../components/forms/registerForm/registerSchema"
import { apiG21 } from "../services/api"

export const UserContext = createContext<IUserProviderData>({} as IUserProviderData)

const UserProvider = ({ children }: { children: React.ReactNode }) => {

    const loginUser = async (loginData: LoginData): Promise<void> => {
        try {
            const { data } = await apiG21.post('/login/', loginData)
            const token = data

        } catch (error) {
            console.error(error)
        }
    }

    const createUser = async (createUserData: RegisterData): Promise<void> => {
        try {
            await apiG21.post('/user/', createUserData)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <UserContext.Provider value={{
                loginUser,
                createUser
            }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserProvider