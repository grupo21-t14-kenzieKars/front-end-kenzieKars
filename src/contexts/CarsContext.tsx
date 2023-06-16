import { createContext, useEffect, useState } from "react"
import { MockedCarPostList } from "../mocks"
import { IMockedCar } from "../interfaces/mocksInterfaces"
import { apiG21, apiKenzieKars } from '../services/api'
import { ICarProviderData } from "./Interfaces"
import { INewPoster } from "../interfaces/posterInterfaces"

export const CarContext = createContext<ICarProviderData>({} as ICarProviderData)

const CarProvider = ({ children }: { children: React.ReactNode }) => {

  const [carList, setCarList] = useState([] as Array<IMockedCar>)

  const [carModels, setCarModels] = useState([])
  const [selectedCarModel, setSelectedCarModel] = useState(null)

  const [filteredCarList, setFilteredCarList] = useState<IMockedCar[]>([])
  const [carsByBrand, setCarsByBrand] = useState([] as Array<object>)

  const token = localStorage.getItem("@kenzie-cars:token")
  const userId = localStorage.getItem("@kenzie-cars:userID")

  //Pega todos os carros da API
  // useEffect(() => {
  //   const getCars = async () => {
  //     try {
  //       const { data } = await apiKenzieKars.get('/cars')
  //       setCarList(data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   getCars()
  // }, [])

  const createPoster = async (data: INewPoster) =>{
    if(userId){
      try{
        apiG21.defaults.headers.authorization = `Bearer ${token}`
        await apiG21.post("/posters", data);
        //Colocar função de carregar carros do usuário logado
      } catch {
        console.error(Error)
      }
    }
  }

  //Pega os carros pela marca
  const getCarsByBrand = async (brand: string) => {
    try {
      const { data } = await apiKenzieKars.get('/cars', {
        params: {
          brand: brand
        }
      })
      setCarsByBrand(data)
    } catch (error) {
      console.error(error)
    }
  }

  //Pega os carros pelo modelo
  const getCarModels = async (model: string) => {
    const { data } = await apiKenzieKars.get(`/cars?brand=${model}`);
    setCarModels(data);
  }

  const getSelectedCarModel = async (name: string, brand: string) => {
    const { data } = await apiKenzieKars.get(`/cars?brand=${brand}`);
    data.map((value: any) =>{
      if(value.name === name){
        setSelectedCarModel(value)
      }
    })
  }

  useEffect(() => {
    setCarList(MockedCarPostList)
    setFilteredCarList(MockedCarPostList)
  }, [])

  return (
    <>
      <CarContext.Provider value={{
        createPoster,
        carList,
        filteredCarList,
        setFilteredCarList,
        carsByBrand,
        getCarsByBrand,
        getCarModels,
        getSelectedCarModel,
        carModels,
        selectedCarModel,
      }}>
        {children}
      </CarContext.Provider>
    </>
  );
}

export default CarProvider