import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-ecommerce-serratec.herokuapp.com/'
})

export default api;