import { api } from "./config"

export const getSpecies = async (url: string) => {
    return await api.get(url)
}