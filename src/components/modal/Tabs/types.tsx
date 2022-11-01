import { Box } from '@mui/system';
import { TypesType } from '../../../interfaces/interfaces';

type TypesProps = {data: TypesType | undefined}

export const Types = ({data}: TypesProps) => {
  return <Box sx={{display: 'flex'}}>
    {data && data.map(item=>{
    return <Box key={item.type.name} sx={{margin: '10px'}}>
      <h3>{item.type.name}</h3>
      <Box>
        <div>slot: {item.slot}</div>
      </Box>
    </Box>
    })}
  </Box>
};