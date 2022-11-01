import { useEffect, useState } from "react"
import { getPokeInfo } from "../../api/getImgURL"
import { PokeInterface } from "../../interfaces/interfaces"

export default (name: string, url: string) => {
    const [poke, setPoke] = useState<PokeInterface | null>(null)
    const [openFullInfo, setOpenFullInfo] = useState<boolean>(false)
    
    const handleFullInfo = () => {
        setOpenFullInfo(!openFullInfo)
    }

    const setPokeInfo = async (url: string) => {
        const pokeInfo = await getPokeInfo(url)
        setPoke({...pokeInfo, name})
    }

    useEffect(()=>{
        setPokeInfo(url)
    }, [])

    return {
        poke,
        openFullInfo,
        handleFullInfo,
    }
}