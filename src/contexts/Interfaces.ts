import React from "react"
import { LoginData } from "../components/forms/loginForm/loginSchema"
import { RegisterData } from "../components/forms/registerForm/registerSchema"
import { IForgotPassword, IResetPassword } from "../interfaces/forgotPassword.interfaces"
import { IMockedCar, IMockedUser } from "../interfaces/mocksInterfaces"
import { IModelCar, INewPoster } from "../interfaces/posterInterfaces"


export interface ICarProviderData {
    createPoster: (data: INewPoster) => void
    allCarsList: Array<IMockedCar>
    carList: Array<IMockedCar>
    filteredCarList: Array<IMockedCar>
    setFilteredCarList: React.Dispatch<React.SetStateAction<IMockedCar[]>>
    carsByBrand: Array<object>
    getCarsByBrand: (brand: string) => void
    getCarModels: (model: string) => Promise<void>
    getSelectedCarModel: (name: string, brand: string) => Promise<void>
    carModels: Array<IMockedCar>
    selectedCarModel: IModelCar | null
    setSelectedCarModel: React.Dispatch<React.SetStateAction<any | null>>


}

export interface IUserProviderData {
    loginUser: (data: LoginData) => Promise<void>;
    createUser: (data: RegisterData) => Promise<void>;
    user: IUserData | null;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isSeller: boolean;
    logout: () => void;
    sendResetPassworEmail: (data: IForgotPassword) => Promise<void>;
    resetPassword: (data: IResetPassword, token: string) => Promise<void>
}

export interface IUserAddressData {
    zip_code: string
    city: string
    state: string
    street: string
    number: string | null
    complement: string | null
}

export interface IUserData {
    id: string
    email: string
    name: string
    cpf: string
    phone: string
    birth_date: string
    description: string
    is_seller: boolean
    address: IUserAddressData
}

export interface ICar {
    brand: string;
    model: string;
    year: string;
    fuel_type: string;
    color: string;
    images: Images;
    kilometers: number;
    fipe_price: number;
    price: number;
    description: string;
    id: string;
    user: ICarUser;
    createdAt: Date;
    comments: IComment[];
}

export interface IComment {
    content: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    user: CommentUser;
}

export interface CommentUser {
    id: string;
    name: string;
}

export interface Images {
    one: string;
    two: string | null;
    three: string | null;
    four: string | null;
    five: string | null;
    six: string | null;
}

export interface ICarUser {
    name: string;
    id: string;
    description: string;
}