import axios, { AxiosInstance } from 'axios'

const apiKenzieKars: AxiosInstance = axios.create({
    baseURL: 'https://kenzie-kars.herokuapp.com',
    timeout: 5000,
})

const apiG21: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
})


export {
    apiKenzieKars,
    apiG21
}