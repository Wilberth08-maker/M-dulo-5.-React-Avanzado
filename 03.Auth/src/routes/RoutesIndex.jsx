import {Routes, Route} from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Login from '@/pages/Login/Login'
import Secret from '@/pages/Secret/Secret'
import Signup from '@/pages/Signup/Signup'
import ProtectedRoute from './ProtectedRoute'

const RoutesIndex = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route 
            path='/dashboard' 
            element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } />
            <Route 
            path='/secret' 
            element={
                <ProtectedRoute>
                    <Secret />
                </ProtectedRoute>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
        </>
    )
}

export default RoutesIndex