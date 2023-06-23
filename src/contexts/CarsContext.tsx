import { createContext, useEffect, useState } from "react"
import { IMockedCar } from "../interfaces/mocksInterfaces"
import { apiG21, apiKenzieKars } from '../services/api'
import { ICarProviderData } from "./Interfaces"
import { INewPoster } from "../interfaces/posterInterfaces"

export const CarContext = createContext<ICarProviderData>({} as ICarProviderData)

const CarProvider = ({ children }: { children: React.ReactNode }) => {

  //Lista de todos os carros da API Kenzie
  const [allCarsList, setAllCarsList] = useState([] as Array<IMockedCar>)
  //listas todos os carros da nossa API
  const [carList, setCarList] = useState([] as Array<IMockedCar>)
  //Lista com as marcas dos carros da API Kenzie
  const [carsByBrand, setCarsByBrand] = useState([] as Array<object>)
  //Lista de todos os modelos dos carros da API Kenzie
  const [carModels, setCarModels] = useState([])
  //Modelo do carro selecionado
  const [selectedCarModel, setSelectedCarModel] = useState(null)
  //filtra os carros da nossa API
  const [filteredCarList, setFilteredCarList] = useState<IMockedCar[]>([])

  const token = localStorage.getItem("@kenzie-cars:token")

  useEffect(() => {
    const getCars = async () => {
      try {
        const { data } = await apiG21.get('/car')
        console.log(data);

        setCarList(data)
        setFilteredCarList(data)
      } catch (error) {
        console.error(error)
      }
    }
    getCars()
  }, [])
  // Pega todos os carros da API
  useEffect(() => {
    const getCars = async () => {
      try {
        const { data } = await apiKenzieKars.get('/cars')
        setAllCarsList(data)
      } catch (error) {
        console.error(error)
      }
    }
    getCars()
  }, [])



  const createPoster = async (data: INewPoster) => {
    try {
      apiG21.defaults.headers.authorization = `Bearer ${token}`
      await apiG21.post("/posters", data);
      //Colocar função de carregar carros do usuário logado
    } catch {
      console.error(Error)
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

  //Pega a marca selecionada
  const getSelectedCarModel = async (name: string, brand: string) => {
    const { data } = await apiKenzieKars.get(`/cars?brand=${brand}`);
    data.map((value: any) => {
      if (value.name === name) {
        setSelectedCarModel(value)
      }
    })
  }


  return (
    <>
      <CarContext.Provider value={{
        createPoster,
        allCarsList,
        carList,
        filteredCarList,
        setFilteredCarList,
        carsByBrand,
        getCarsByBrand,
        getCarModels,
        getSelectedCarModel,
        carModels,
        setSelectedCarModel,
        selectedCarModel,
      }}>
        {children}
      </CarContext.Provider>
    </>
  );
}

export default CarProvider