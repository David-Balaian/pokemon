import { useCallback, useEffect, useState } from "react"
import { getPokeInfo } from "../../api/getPokeInfo"
import { PokeInterface } from "../../interfaces/interfaces"

const useCard = (name: string, url: string, searchedPoke?: PokeInterface) => {
    const [poke, setPoke] = useState<PokeInterface | null>(null)
    const [openFullInfo, setOpenFullInfo] = useState<boolean>(false)
    
    const handleFullInfo = () => {
        setOpenFullInfo(!openFullInfo)
    }

    const setPokeInfo = useCallback(async (url: string) => {
        const pokeInfo = await getPokeInfo(url)
        setPoke({...pokeInfo, name})
    }, [name])

    useEffect(()=>{
        if(searchedPoke){
            setPoke(searchedPoke)
        }else{
            setPokeInfo(url)
        }
    }, [searchedPoke, url, setPokeInfo])

    return {
        poke,
        openFullInfo,
        handleFullInfo,
    }
}

export default useCard