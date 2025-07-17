import { NavLink } from 'react-router-dom'
import './header.css'


const Header = () => {
    // modificador
    const linkIsActive = (isActive) =>
        isActive
            ? "header__item-link header__item-link--is-active text-white hover:text-gray-400 transition-colors"
            : "header__item-link text-white hover:text-gray-400 transition-colors"; // Aquí combinamos ambas clases
    return (
        <>
            {/* bloque*/}
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
                    <li className="header__list-item">
                        <NavLink
                            className={({ isActive }) => linkIsActive(isActive)}
                            to="/secret">
                            Secret
                        </NavLink>
                    </li>
                    <li className="header__list-item">
                        <NavLink
                            className={({ isActive }) => linkIsActive(isActive)}
                            to="/login">
                            Login
                        </NavLink>
                    </li>
                    <li className="header__list-item">
                        <NavLink
                            className={({ isActive }) => linkIsActive(isActive)}
                            to="/signup">
                            Signup
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header
