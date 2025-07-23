import { useState, useEffect } from "react";
import { getMeUserService } from "@/service/userService";

const Dashboard = () => {
    const [userData, setUserData] = useState({}); // vacío
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await getMeUserService();
                setUserData(user);
                console.log("Datos completos del usuario:", user); // 👈 Esto sí está disponible al instante
            } catch (error) {
                console.error("Error al obtener usuario", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUserData();
    }, []);

    if (isLoading) return <p className="text-center mt-10">Cargando perfil...</p>;

    return (
        <>
            {/* Creamos una especie de Card */}
            <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Bienvenido a tu perfil {userData.first_name} 👋
                </h2>
                <p className="text-sm text-gray-500 mb-4">Tu perfil personal:</p>

                <div className="space-y-2 text-gray-700">
                    <p>
                        <span className="font-medium">Nombre:</span> {userData.first_name || "No disponible"}
                    </p>
                    <p>
                        <span className="font-medium">Apellido:</span> {userData.last_name || "No disponible"}
                    </p>
                    <p>
                        <span className="font-medium">Email:</span> {userData.email || "No disponible"}
                    </p>
                    <p>
                        <span className="font-medium">Rol:</span> {userData.role || "No definido"}
                    </p>
                </div>
            </div>
        </>
    );
};
export default Dashboard;