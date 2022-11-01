import { api } from "./config"

export const getPokebyName = async (name: string) => {
    return await api.get(`/pokemon/${name}`)
}