import { listGetter } from "../interfaces/interfaces"
import { api } from "./config"

export const getList = async (options: listGetter) => {
    return await api.get(options.url, {params: options.params})
}