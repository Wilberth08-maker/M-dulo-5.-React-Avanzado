// import reactLogo from '@/assets/react.svg'
import {useForm} from "react-hook-form"
import { registerUserService } from "@/service/userService"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    // usamos useForm 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log("datos a enviar:", data)
        try {
            const response = await registerUserService(data);
            if (response.status === 201) {
                toast.success("🎉 Usuario registrado exitosamente")
                navigate("/login")
                // reset()
            } else {
                toast.error("❌ Error al registrar usuario.")
            }
        } catch (error) {
            console.log("Ocurrio un error en signup:", error);
            toast.error(error.message || "Error al registrar usuario")
        }
    }
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6">
                    <div>
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-600 mb-1">Nombre</label>
                        <input
                            id="first_name"
                            name="first_name"
                            type="text"
                            placeholder="Nombre"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
                            {...register('first_name', {required: "El nombre es obligatorio"})}
                            />
                            {errors.first_name && <p className="text-sm text-red-500">{errors.first_name.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-600 mb-1">Apellido</label>
                        <input
                            id="last_name"
                            name="last_name"
                            type="text"
                            placeholder="Apellido"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
                            {...register('last_name', {required: "El apellido es obligatorio"})}
                            />
                            {errors.last_name && <p className="text-sm text-red-500">{errors.last_name.message}</p>}
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
                        Género
                    </label>
                    <select id="gender"
                        {...register('gender', { required: "Selecciona un género" })}
                        className={`block w-full rounded-md border
                        border-gray-300 bg-white
                        py-2 px-3
                        shadow-sm
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                        ${errors.gender ? "border-red-500" : ""}
                        transition
                        ease-in-out duration-150
                        `}
                    >
                        <option value="">Choose...</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    {errors.gender && <p className="text-sm text-red-500">{errors.gender.message}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Correo electrónico</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Correo electrónico"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
                        {...register('email', {required: "El correo electrónico es obligatorio"})}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Contraseña</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
                        {...register('password', {required: "La contraseña es obligatoria"})}
                        />
                        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
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