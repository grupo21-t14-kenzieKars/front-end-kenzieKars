import { createContext, useState } from "react"
import { IUserProviderData } from "./Interfaces"
import { LoginData } from "../components/forms/loginForm/loginSchema"
import { RegisterData } from "../components/forms/registerForm/registerSchema"
import { apiG21 } from "../services/api"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext<IUserProviderData>({} as IUserProviderData)

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const loginUser = async (loginData: LoginData): Promise<void> => {
        try {
            setLoading(true);
            const { data } = await apiG21.post('/login', loginData)
            console.log(all);

            window.localStorage.setItem("TOKEN", data.token);
            /* navigate('/') */
        } catch (error) {
            console.error(error)
            window.localStorage.clear()
        } finally {
            setLoading(false)
        }
    }

    const createUser = async (createUserData: RegisterData): Promise<void> => {
        try {
            setLoading(true)
            await apiG21.post('/user', createUserData)

            navigate('/login')
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
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