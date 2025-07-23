// rutas privadas 
import { Navigate } from "react-router-dom";
import {useAuthContext} from "@/hooks/useAuthContext"

const ProtectedRoute = ({children}) => {
    const {auth} = useAuthContext(); // ¿Estás Autenticado?
    return auth ? children : <Navigate to="/login" replace/>
}

export default ProtectedRoute