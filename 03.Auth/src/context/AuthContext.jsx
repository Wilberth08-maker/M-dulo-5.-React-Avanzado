import { createContext } from "react";
import { jwtDecode } from "jwt-decode";

// 1. Crear el contexto de autenticación
const AuthContext = createContext();

// 2. Crear el proveedor de autenticación. Provider que envuelve a la app y maneja el estado de autenticación
function AuthProvider({ children }) {
    const [auth, setIsAuth] = useState(false); // ¿Usuario autenticado?
    const [userPayLoad, setUserPayLoad] = useState(null); // Datos decodificados del token

    const login = (token) => {
        try {
            localStorage.setItem('token', token); // Guardar el token en el localStorage
            const decodedToken = jwtDecode(token); // Decodificamos el payload
            
            // Verificar expiración del token(si "exp" existe y es menor a la fecha actual, el token ha expirado)
            if(decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
                console.log("El token ha expirado. Cerrando sesión...");
                logout();
                return;
            }
            setUserPayLoad(decodedToken); // Guardamos los datos decodificados
            setIsAuth(true)

        } catch (error) {
            console.error('Error al decodificar el token durante el login:', error);
            logout();
        } 
    }
    
    // Función para cerrar sesión
    const logout = () => {
        localStorage.removeItem('token'); // Eliminar el token del localStorage
        setUserPayLoad(null); // Limpiar los datos del usuario (payload)
        setIsAuth(false); // Desautenticar al usuario
    }

    // Efecto al montar: intentar recuperar sesión guardada desde el localStorage
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) {
            try {
                const decodedToken = jwtDecode(token); // Decodificamos el payload

                // Verificar expiración del token(si "exp" existe y es menor a la fecha actual, el token ha expirado)
                if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
                    console.log("El token ha expirado. Cerrando sesión...");
                    logout();
                    return;
                }
                setUserPayLoad(decodedToken); // Guardamos los datos decodificados
                setIsAuth(true)

            } catch (error) {
                console.error('Error al decodificar el token durante el login:', error);
                logout();
            }
        }
    }, []);

    // Datos compartidos por el contexto
    const data = {
        auth,
        userPayLoad,
        login,
        logout
    }

    // 3. Proveer el contexto a la app
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };








