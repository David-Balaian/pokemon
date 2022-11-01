import { useEffect, useState } from "react"
import { getList } from "../../api/getList"
import { listGetter } from "../../interfaces/interfaces"
import { CARDS_PER_PAGE } from "./constants"

export default () => {

    const [list, setList] = useState<{name: string, img: string, url: string}[]>([])
    const [count, setCount] = useState<number>(0)
    
    const [currentPage, setCurrentPage] = useState<number>(0)

    const setPokemonsList = async (options: listGetter) => {
        const {data: {results: pokeList, count}} = await getList(options) 
        setCount(count);
        if(Array.isArray(pokeList)){
            setList(pokeList)
        }
    }

    const handlePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
    }

    useEffect(()=>{
        const options = {
            url: '/pokemon',
            params: {
                offset: CARDS_PER_PAGE*currentPage,
                limit: CARDS_PER_PAGE
            }
        }
        setPokemonsList(options)
    }, [currentPage])

    return {
        list,
        count,
        handlePagination,
    }
}