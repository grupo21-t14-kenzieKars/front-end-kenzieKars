import { createContext, useEffect, useState } from "react"
import { apiG21, apiKenzieKars } from '../services/api'
import { ICarProviderData } from "./Interfaces"
import { IAllCars, INewPoster } from "../interfaces/posterInterfaces"

export const CarContext = createContext<ICarProviderData>({} as ICarProviderData)

const CarProvider = ({ children }: { children: React.ReactNode }) => {

  //Lista de todos os carros da API Kenzie
  const [allCarsList, setAllCarsList] = useState([] as Array<IAllCars>)

  //listas todos os carros da nossa API
  const [carList, setCarList] = useState([] as Array<IAllCars>)

  //Lista com as marcas dos carros da API Kenzie
  const [carsByBrand, setCarsByBrand] = useState([] as Array<object>)
  //Lista de todos os modelos dos carros da API Kenzie
  const [carModels, setCarModels] = useState([])
  //Modelo do carro selecionado
  const [selectedCarModel, setSelectedCarModel] = useState(null)

  //filtra os carros da nossa API
  const [filteredCarList, setFilteredCarList] = useState<IAllCars[]>([])


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
    const token = localStorage.getItem("@kenzie-cars:token")

    try {
      const response = await apiG21.post("/car", data, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
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