import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { PokeInterface } from '../../interfaces/interfaces';
import { CardMedia } from '@mui/material';
import styles from './styles.module.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useDialog from './useDialog';

import { Species } from './Tabs/species';
import { Stats } from './Tabs/stats';
import { Types } from './Tabs/types';
import { Moves } from './Tabs/moves';
import { Weight } from './Tabs/weight';

type PokeInfoProps = {
    open: boolean,
    handleClose: ()=>void,
    poke: PokeInterface | null,
}

export default function PokeInfo({open, handleClose, poke}: PokeInfoProps) {
    const TAB_NAMES = [
        {label: 'species', id: '1', component: <Species data={poke?.species} />}, 
        {label: 'stats', id: '2', component: <Stats data={poke?.stats}/>}, 
        {label: 'types', id: '3', component: <Types data={poke?.types}/>}, 
        {label: 'weight', id: '4', component: <Weight data={poke?.weight}/>}, 
        {label: 'moves', id: '5', component: <Moves data={poke?.moves}/>}
    ]

    const {
        tabValue,
        handleChange,
    } = useDialog()


  return (
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='lg'
        fullWidth
      >
        <DialogTitle>
          {poke?.name}
        </DialogTitle>
        <DialogContent>
        <CardMedia
            classes={{root: styles.img}}
            component="img"
            image={poke?.sprites?.front_default}
            alt={poke?.name}
            />
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabValue}>
                <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} >
                    {TAB_NAMES.map((item)=><Tab key={item.id} label={item.label} value={item.id} />)}
                </TabList>
                </Box>
                {TAB_NAMES.map((item)=><TabPanel key={item.id} value={item.id}>{item.component}</TabPanel>)}
            </TabContext>
           </Box>
        </DialogContent>
      </Dialog>
  );
}
