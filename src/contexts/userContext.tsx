import { createContext, useEffect, useState } from "react"
import { IUserData, IUserProviderData } from "./Interfaces"
import { LoginData } from "../components/forms/loginForm/loginSchema"
import { apiG21 } from "../services/api"
import { useNavigate } from "react-router-dom"
import { IEditUser } from "../interfaces/userInterfaces"
import { RegisterData } from "../components/forms/registerForm/registerSchema"

export const UserContext = createContext<IUserProviderData>({} as IUserProviderData)

const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<IUserData | null>(null)
    const [isSeller, setIsSeller] = useState<boolean>(false)

    const navigate = useNavigate()

    useEffect(() => {
        const auth = async () => {
            const token = localStorage.getItem('@kenzie-cars:token')

            if (!token) {
                localStorage.clear()
                return
            }
            try {
                const { data } = await apiG21.get('/user/profile', {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                setIsSeller(data.is_seller)
            } catch (error) {
                console.error(error)
                window.localStorage.clear();
            }
        }
        auth()
    }, [])

    const loginUser = async (loginData: LoginData): Promise<void> => {
        try {
            setLoading(true);
            const { data } = await apiG21.post('/login', loginData)
            console.log(data);
            window.localStorage.setItem("@kenzie-cars:token", data.token);

        } catch (error) {
            console.error(error)
            window.localStorage.clear()
        } finally {
            setLoading(false)
        }
    }

    const createUser = async (data: RegisterData): Promise<void> => {
        try {
            setLoading(true)
            await apiG21.post('/user', data)

            navigate('/login')
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    const editUser = async (data: IEditUser) =>{
        if(user){
            try{
                const response = await apiG21.patch(`/user${user.id}`, data);
                setUser(response.data)
            }catch(error){
                console.error(error)
            }
        }
    }

    const deleteUser = async () => {
        if(user){
            try{
                await apiG21.delete(`/user/${user.id}`);
                setUser(null)
                navigate("/")
            } catch (error){
                console.error(error)
            }
        }
    }

    return (
        <>
            <UserContext.Provider value={{
                loginUser,
                createUser,
                user,
                loading,
                isSeller,
                setLoading,
                logout,
                editUser,
                deleteUser
            }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserProvider