import { useEffect, useState } from 'react';
import { getSpecies } from '../../../api/getSpecies';
import { nameUrl } from '../../../interfaces/interfaces';

type SpeciesProps = {
  data: nameUrl | undefined
}

export const Species = ({data}: SpeciesProps) => {
  const [list, setList] = useState<{base_happiness: number, capture_rate: number}>()

  const setSpecies = async (url: string) => {
    const {data: {base_happiness, capture_rate}} = await getSpecies(url)
    if(base_happiness && capture_rate){
      setList({base_happiness, capture_rate})
    }
  }
 
  

  useEffect(()=>{
    data && setSpecies(data.url)
  }, [data])
 
 return <>
    {list && Object.entries(list).map(([key, value]) => <div key={key} >{key}: {value}</div>)}
  </>
};