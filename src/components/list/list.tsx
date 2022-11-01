import { Pagination, Paper } from '@mui/material';
import { PokeCard } from '../card/card';
import styles from './styles.module.css'
import useList from './useList';

export const List = () => {

    const {
        list,
        count,
        handlePagination,
    } = useList()

    return (
        <Paper classes={{root: styles.box}}>
            <Paper classes={{root: styles.cards}} >
                {list?.map(item=>( <PokeCard key={item.url} name={item.name} url={item.url} /> ))}
            </Paper>
            <Pagination onChange={handlePagination} count={Math.floor(count/16)} color="primary" />
        </Paper>
    )
};