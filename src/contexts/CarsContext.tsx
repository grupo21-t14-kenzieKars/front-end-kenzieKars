import { createContext, useContext, useEffect, useState } from "react"
import { apiG21, apiKenzieKars } from '../services/api'
import { ICarProviderData } from "./Interfaces"
import { IAllCars, IEditPoster, INewPoster } from "../interfaces/posterInterfaces"
import { useToast } from "@chakra-ui/react"
import { UserContext } from "./userContext"

export const CarContext = createContext<ICarProviderData>({} as ICarProviderData)

const CarProvider = ({ children }: { children: React.ReactNode }) => {

  const { setUserCars, userCars, setLoading } = useContext(UserContext)

  //Lista de todos os carros da API Kenzie
  const [allCarsList, setAllCarsList] = useState([] as Array<IAllCars>)

  //listas todos os carros da nossa API
  const [carList, setCarList] = useState([] as Array<IAllCars>)

  //Pega o id do carro
  const [carId, setCarId] = useState("")

  //Dados do carro por ID
  const [carData, setCarData] = useState({} as IAllCars)

  //Lista com as marcas dos carros da API Kenzie
  const [carsByBrand, setCarsByBrand] = useState([] as Array<object>)
  //Lista de todos os modelos dos carros da API Kenzie
  const [carModels, setCarModels] = useState([])
  //Modelo do carro selecionado
  const [selectedCarModel, setSelectedCarModel] = useState(null)

  //filtra os carros da nossa API
  const [filteredCarList, setFilteredCarList] = useState<IAllCars[]>([])

  const toast = useToast()
  const token = localStorage.getItem("@kenzie-cars:token")

  useEffect(() => {
    const getCars = async () => {
      try {
        setLoading(true)
        const { data } = await apiG21.get('/car')

        setCarList(data)
        setFilteredCarList(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getCars()
  }, [])

  // Pega todos os carros da API
  useEffect(() => {
    console.log("useEffect getCars");

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
      setLoading(true)
      const response = await apiG21.post("/car", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast({
        status: "success",
        description: "Anúncio criado com sucesso",
        duration: 3000,
        position: "bottom-right",
        containerStyle: {
          color: "white",
        },
        isClosable: true,
      });
      setUserCars([...userCars, response.data])
    } catch (error: any) {
      console.error(Error)
      toast({
        status: "error",
        description:
          error.response?.data.message ||
          "Ops... ocorreu um erro! Tente novamente mais tarde.",
        duration: 3000,
        position: "bottom-right",
        variant: "subtle",
      });
    } finally {
      setLoading(false)
    }
  }

  const editCarPoster = async (data: IEditPoster) => {
    try {
      setLoading(true)
      await apiG21.patch(`/car/${carId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast({
        status: "success",
        description: "Anúncio editado com sucesso!",
        duration: 3000,
        position: "bottom-right",
        containerStyle: {
          color: "white",
        },
        isClosable: true,
      });

    } catch (error: any) {
      console.error(Error)
      toast({
        status: "error",
        description:
          error.response?.data.message ||
          "Ops... ocorreu um erro!",
        duration: 3000,
        position: "bottom-right",
        variant: "subtle",
      });
    } finally {
      setLoading(false)
    }
  }

  const deleteCarPoster = async () => {
    try {
      setLoading(true)
      await apiG21.delete(`/car/${carId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast({
        status: "success",
        description: "Anúncio deletado!",
        duration: 3000,
        position: "bottom-right",
        containerStyle: {
          color: "white",
        },
        isClosable: true,
      });
    } catch (error: any) {
      console.error(Error)
      toast({
        status: "error",
        description:
          error.response?.data.message ||
          "Ops... ocorreu um erro!",
        duration: 3000,
        position: "bottom-right",
        variant: "subtle",
      });
    } finally {
      setLoading(false)
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

  useEffect(() =>{
      try{
        setLoading(true)
        const getCarById = async () => {
          const { data } = await apiG21.get(`/car/${carId}`)
          setCarData(data)
        }
        getCarById()
      }catch(error){
        console.log(error)
      } finally {
        setLoading(false)
      }
  }, [carId])

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
        editCarPoster,
        deleteCarPoster,
        setCarId,
        carId,
        carData,
        setCarData
      }}>
        {children}
      </CarContext.Provider>
    </>
  );
}

export default CarProvider