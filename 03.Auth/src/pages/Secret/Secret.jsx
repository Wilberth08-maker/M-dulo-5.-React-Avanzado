import { useAuthContext } from "@/hooks/useAuthContext";

const Secret = () => {
    const { userPayload } = useAuthContext();

    const role = userPayload?.role;

    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-xl font-bold text-gray-800 mb-4">Tipo de usuario 🧑</h1>

            <div className="mb-6">
                {role === "ADMIN" ? (
                    <h2 className="text-lg font-semibold text-blue-600 mb-2">
                        Hola Admin! Bienvenido a tu perfil 💥
                    </h2>
                ) : (
                    <h2 className="text-lg font-semibold text-green-600 mb-2">
                        Hola Customer! Bienvenido a tu perfil 🎈 
                    </h2>
                )}
                <p className="text-sm text-gray-500">
                    Este espacio es personalizado según tu rol dentro del sistema.
                </p>
            </div>

            {role === "ADMIN" && (
                <div className="bg-blue-50 p-4 rounded">
                    <h3 className="text-blue-700 font-medium">Saludos Admin 🫲</h3>
                    <p className="text-sm text-blue-500">Tienes acceso a herramientas administrativas.</p>
                </div>
            )}

            {role === "CUSTOMER" && (
                <div className="bg-green-50 p-4 rounded">
                    <h3 className="text-green-700 font-medium">Saludos Customer 🫲</h3>
                    <p className="text-sm text-green-500">Explora tu perfil y tus compras aquí.</p>
                </div>
            )}
        </div>
    );
};

export default Secret;