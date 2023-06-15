import { createContext, useEffect, useState } from "react"
import { MockedCarPostList } from "../mocks"
import { IMockedCar } from "../interfaces/mocksInterfaces"
import { apiKenzieKars } from '../services/api'
import { ICarProviderData } from "./Interfaces"

export const CarContext = createContext<ICarProviderData>({} as ICarProviderData)

const CarProvider = ({ children }: { children: React.ReactNode }) => {

  const [carList, setCarList] = useState([] as Array<IMockedCar>)
  const [filteredCarList, setFilteredCarList] = useState<IMockedCar[]>([])
  const [fipeCars, setFipeCars] = useState([] as Array<object>)
  const [fipeCarsByBrand, setFipeCarsByBrand] = useState([] as Array<object>)

  useEffect(() => {
    const getFipeCars = async () => {
      try {
        const { data } = await apiKenzieKars.get('/cars')
        setFipeCars(data)
      } catch (error) {
        console.error(error)
      }
    }
    getFipeCars()
  }, [])

  const getFipeCarsByBrand = async (brand: string) => {
    try {
      const { data } = await apiKenzieKars.get('/cars', {
        params: {
          brand: brand
        }
      })
      setFipeCarsByBrand(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setCarList(MockedCarPostList)
    setFilteredCarList(MockedCarPostList)
  }, [])

  return (
    <>
      <CarContext.Provider value={{
        carList,
        filteredCarList,
        setFilteredCarList,
        fipeCars,
        fipeCarsByBrand,
        getFipeCarsByBrand
      }}>
        {children}
      </CarContext.Provider>
    </>
  );
}

export default CarProvider