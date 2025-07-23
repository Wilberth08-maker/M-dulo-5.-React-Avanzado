// useService.js es donde simularemos hacer la llamada a la API y para esto usaremos axios
// Necesitamos pasarle un endpoint para que la API sepa a donde tiene que ir la petición

// Importamos axios
import axiosInstance from './axiosConfig'

// Mandar información
// Registar un usuario (Signup)
const registerUserService = async (data) => {
    const response = await axiosInstance.post("/register", data)
    return response; // Retornamos toda la respuesta para manejar status
}
// http://localhost/register{json}

// Autenticar un usuario (Login)
const loginUserService = async (data) => {
    const response = await axiosInstance.post("/login", data)
    return response; // Retornamos toda la respuesta para manejar status
}
// http://localhost/login{json}

// 🔵 Obtener información del usuario autenticado
const getMeUserService = async () => {
    const {data} = await axiosInstance.get("/users/me")
    return data;
}

export {
    registerUserService,
    loginUserService,
    getMeUserService
}