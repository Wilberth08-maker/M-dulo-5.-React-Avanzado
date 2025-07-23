import axiosInstance from "./axiosConfig"

// 🔍 Obtener todos los items
const getAllItemsService = async () => {
    const { data } = await axiosInstance.get("/items")
    return data
}

// 🔎 Obtener un item por ID
const getOneItemService = async (id) => {
    try {
        const { data } = await axiosInstance.get(`/items/${id}`)
        return data
    } catch (error) {
        console.error("Error al obtener el item:", error)
        throw error
    }
}

// 🆕 Crear nuevo item
const createItemService = async (data) => {
    const { data: createdItem } = await axiosInstance.post("/items", data)
    return createdItem
}

export {
    getAllItemsService,
    getOneItemService,
    createItemService
}