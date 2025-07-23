import { useState, useEffect } from "react";
import { getAllItemsService } from "@/service/itemService";

const Home = () => {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        const fetchItemsData = async () => {
            try {
                const response = await getAllItemsService();
                // debug en consola
                // console.log("Respuesta en Home:", response)
                setItemsList(response);
            } catch (error) {
                console.log("Ocurrió un error en Home", error);
            }
        };
        fetchItemsData();
    }, []);

    return (
        <>
            <h1>Bienvenido al Home </h1>
            {/* debug visual
    <pre>{JSON.stringify(itemsList, null, 2)}</pre> */}
            <div className="flex flex-wrap justify-center gap-6 py-6">
                {/* Si itemsData no esta vacio, recorro el arreglo con Map y creo un Card para cada elemento */}
                {itemsList &&
                    itemsList.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden w-72 transition-transform hover:scale-105"
                        >
                            <img
                                src={product.image || "https://via.placeholder.com/300?text=Sin+Imagen"}
                                alt={product.product_name}
                                className="w-full h-48 object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = "https://via.placeholder.com/300?text=Imagen+no+disponible";
                                }}
                            />
                            <div className="p-4">
                                <h5 className="text-lg font-semibold text-gray-800 mb-2">{product.product_name}</h5>
                                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                                {/* Aqui no se implementa el botón, pero basta con sustituir "a" por Link de react-router-dom y la ruta del enlace indicar el componente que mostrará la información de un solo producto, seguido del id del producto */}
                                <a
                                    href="#"
                                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                                >
                                    Comprar
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Home;