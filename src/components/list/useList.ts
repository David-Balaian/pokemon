import { useEffect, useRef, useState } from "react"
import { getList } from "../../api/getList"
import { getPokebyName } from "../../api/getPokebyName"
import { listGetter, PokeInterface } from "../../interfaces/interfaces"
import { CARDS_PER_PAGE } from "./constants"

const useList = () => {

    const [list, setList] = useState<{name: string, img: string, url: string}[]>([])
    const [search, setSearch] = useState<string>('')
    const [count, setCount] = useState<number>(0)
    const [searchData, setSearchData] = useState<PokeInterface>()
    const [helperText, setHelperText] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(0)

    const timeoutId = useRef<any>()

    const setPokemonsList = async (options: listGetter) => {
        const {data: {results: pokeList, count}} = await getList(options) 
        setCount(count);
        if(Array.isArray(pokeList)){
            setList(pokeList)
        }
    }

    const setPokeByName = async (name: string) => {
        try {
            const { data } = await getPokebyName(name)
            if(data){
                setSearchData(data)
                setHelperText(null)
            }
        } catch (error) {
            setSearchData(undefined)
            setHelperText('no pokemon found')
        }
        
    }

    const handlePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
    }

    const handleSearch = (e: any) => {
        const search = e.target.value
        setSearch(search)
        if(search?.length > 2){
            if(timeoutId.current) clearTimeout(timeoutId.current)
            timeoutId.current = setTimeout(()=>{
                setPokeByName(search)
            }, 600)
        }else{
            setHelperText(null)
            setSearchData(undefined)
        }
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
        search,
        searchData,
        helperText,
        handlePagination,
        handleSearch,
    }
}

export default useList