// import reactLogo from '@/assets/react.svg'

const Signup = () => {
    return (
        <div className="max-w-md mx-auto mt-16 p-10 bg-white rounded-xl shadow-xl border border-gray-200">
            {/* <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
                <span className="inline-flex items-center justify-center gap-2">
                    <img
                        src={reactLogo}
                        alt="React Logo"
                        className="w-10 h-10 animate-spin"
                    />
                    Crear Cuenta
                </span>
            </h2> */}
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Crear Cuenta</h2>
            <form className="space-y-6">
                <div className="grid gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-1">Nombre</label>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="Nombre"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-1">Apellido</label>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Apellido"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
                        Género
                    </label>
                    <select id="gender"
                        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
                    >
                        <option value="">Choose...</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Correo electrónico</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo electrónico"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200"
                >
                    Registrarse
                </button>
            </form>
        </div>
    )
}

export default Signup