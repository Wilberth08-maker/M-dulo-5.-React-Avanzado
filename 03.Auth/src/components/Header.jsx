import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import { toast } from 'react-toastify'
import './header.scss'


const Header = () => {
    const {logout, isAuth} = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        toast.info("🖐️ Sesión cerrada correctamente");
        logout();
        navigate("/login");
    };

    // modificador
    const linkIsActive = (isActive) =>
        isActive
            ? "header__item-link header__item-link--is-active text-white hover:text-gray-400 transition-colors"
            : "header__item-link text-white hover:text-gray-400 transition-colors"; // Aquí combinamos ambas clases
    return (
        // Bloque
            <nav className="header bg-gray-800 p-4 shadow-md">
                {/* bloque__elemento */}
                <NavLink className="header__logo text-white text-2xl font-bold" to="/">
                    LOGO
                </NavLink>

                {/* Lista de navegación */}
                {/* bloque__elemento */}
                <ul className="header__nav-list flex space-x-8">
                    <li className="header__list-item">
                        <NavLink
                            className={({ isActive }) => linkIsActive(isActive)}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="header__list-item">
                        <NavLink
                            className={({ isActive }) => linkIsActive(isActive)}
                            to="/dashboard">
                            Dashboard
                        </NavLink>
                    </li>
                    {/* Bloque condicional */}
                    {isAuth ? (
                        <>
                            <li className="header__list-item">
                                <NavLink
                                    className={({ isActive }) => linkIsActive(isActive)}
                                    to="/secret">
                                    Secret
                                </NavLink>
                            </li>
                            <li className="header__list-item">
                                <button
                                        onClick={handleLogout}
                                        className="header__item-link text-red-500 hover:text-red-600 transition-colors font-medium"
                                        style={{
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            padding: "0", // mismo padding que NavLink si se aplicará por clase
                                            display: "inline-block",
                                        }}
                                    >
                                        Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="header__list-item">
                                <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/login">
                                    Login
                                </NavLink>
                            </li>
                            <li className="header__list-item">
                                <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/signup">
                                    Signup
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        );
};
export default Header;
