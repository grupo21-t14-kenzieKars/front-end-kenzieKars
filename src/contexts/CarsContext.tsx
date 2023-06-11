import { createContext, useEffect, useState } from "react"
import { MockedCarPostList } from "../mocks"
import ICarProviderData from "./Interfaces"
import { IMockedCar } from "../interfaces/moks.interfaces"


export const CarContext = createContext<ICarProviderData>({} as ICarProviderData)

const CarProvider = ({ children }: { children: React.ReactNode }) => {

  const [carList, setCarList] = useState([] as Array<IMockedCar>)
  const [filteredCarList, setFilteredCarList] = useState<IMockedCar[]>([])

  useEffect(() => {
    setCarList(MockedCarPostList)
    setFilteredCarList(MockedCarPostList)

  }, [])

  console.log(filteredCarList)
  return (
    <>
      <CarContext.Provider value={{
        carList,
        filteredCarList,
        setFilteredCarList
      }}>
        {children}
      </CarContext.Provider>
    </>
  );
}

export default CarProvider