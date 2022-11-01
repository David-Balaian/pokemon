import { api } from "./config"

export const getPokeInfo = async (url: string) => {
    const {data: pokeInfo} = await api.get(url);
    return pokeInfo

    
}