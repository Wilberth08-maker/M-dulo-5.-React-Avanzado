// useService.js es donde simularemos hacer la llamada a la API y para esto usaremos axios
// Necesitamos pasarle un endpoint para que la API sepa a donde tiene que ir la petición

// Importamos axios
import axios from 'axios'

// Establecer el endpoint de la API
const BASE_URL = 'http://localhost:3000'

// Registrar un usuario (POST)
const registerUserServie = (data) => axios.post(`${BASE_URL}/register`, data)