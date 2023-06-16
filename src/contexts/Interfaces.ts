import { LoginData } from "../components/forms/loginForm/loginSchema"
import { RegisterData } from "../components/forms/registerForm/registerSchema"
import { IMockedCar } from "../interfaces/mocksInterfaces"
import { IModelCar, INewPoster } from "../interfaces/posterInterfaces"

export interface ICarProviderData {
    createPoster: (data: INewPoster) => void
    carList: Array<IMockedCar>
    filteredCarList: Array<IMockedCar>
    setFilteredCarList: React.Dispatch<React.SetStateAction<IMockedCar[]>>
    carsByBrand: Array<object>
    getCarsByBrand: (brand: string) => void
    getCarModels: (model: string) => Promise<void>
    getSelectedCarModel: (name: string, brand: string) => Promise<void>
    carModels: Array<IMockedCar>
    selectedCarModel: IModelCar | null
}

export interface IUserProviderData {
    loginUser: (data: LoginData) => Promise<void>
    createUser: (data: RegisterData) => Promise<void>
}
