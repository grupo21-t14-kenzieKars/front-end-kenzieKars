import { IMockedCar } from "../interfaces/mocksInterfaces"

interface ICarProviderData {
    carList: Array<IMockedCar>
    filteredCarList: Array<IMockedCar>
    setFilteredCarList: React.Dispatch<React.SetStateAction<IMockedCar[]>>
    fipeCars: Array<object>
    fipeCarsByBrand: Array<object>
    getFipeCarsByBrand: (brand: string) => void
}

export default
    ICarProviderData