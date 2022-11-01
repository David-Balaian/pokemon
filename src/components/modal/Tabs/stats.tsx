import { Box } from '@mui/system';
import { StatsType } from '../../../interfaces/interfaces';

type StatsProps = {data: StatsType | undefined}

export const Stats = ({data}: StatsProps) => {
 return <Box sx={{display: 'flex'}}>
    {data && data.map(item=>{
    return <Box key={item.stat.name} sx={{margin: '10px'}}>
      <h3>{item.stat.name}</h3>
      <Box>
        <div>base: {item.base_stat}</div>
        <div>effort: {item.effort}</div>
      </Box>
    </Box>
    })}
  </Box>
};