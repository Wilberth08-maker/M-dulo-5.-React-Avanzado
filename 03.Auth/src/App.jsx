import Header from '@/components/Header'
import RoutesIndex from '@/routes/RoutesIndex'
import { ToastContainer } from 'react-toastify' // Importamos el ToastContainer
import 'react-toastify/dist/ReactToastify.css' // Estilos por defecto de react-toastify
import { AuthProvider } from '@/context/AuthContext'

function App() {
  
  return (
    <>
      <ToastContainer />
      <AuthProvider>
      <Header />
      <RoutesIndex />
      </AuthProvider>
    </>
  )
}

export default App
