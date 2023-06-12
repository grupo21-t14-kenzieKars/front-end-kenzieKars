import { IMockedCar } from "../interfaces/moks.interfaces"

interface ICarProviderData {
    carList: Array<IMockedCar>
    filteredCarList: Array<IMockedCar>
    setFilteredCarList: React.Dispatch<React.SetStateAction<IMockedCar[]>>
}

export default
    ICarProviderData