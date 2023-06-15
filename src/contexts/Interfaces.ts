import { LoginData } from "../components/forms/loginForm/loginSchema"
import { RegisterData } from "../components/forms/registerForm/registerSchema"
import { IMockedCar } from "../interfaces/mocksInterfaces"

export interface ICarProviderData {
    carList: Array<IMockedCar>
    filteredCarList: Array<IMockedCar>
    setFilteredCarList: React.Dispatch<React.SetStateAction<IMockedCar[]>>
    fipeCars: Array<object>
    fipeCarsByBrand: Array<object>
    getFipeCarsByBrand: (brand: string) => void
}

export interface IUserProviderData {
    loginUser: (data: LoginData) => Promise<void>
    createUser: (data: RegisterData) => Promise<void>
}
