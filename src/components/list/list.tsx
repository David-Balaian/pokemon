import { Pagination, Paper, TextField } from '@mui/material';
import { PokeCard } from '../card/card';
import styles from './styles.module.css'
import useList from './useList';

export const List = () => {

    const {
        list,
        count,
        search,
        searchData,
        helperText,
        handlePagination,
        handleSearch,
    } = useList()

    return (
        <Paper classes={{root: styles.box}}>
            <TextField value={search} onChange={handleSearch} />
            <Paper classes={{root: styles.cards}}>
                {helperText || (
                    !!searchData ? (
                    <PokeCard searchedPoke={searchData} /> 
                ) : (
                    list?.map(item=>( <PokeCard key={item.url} name={item.name} url={item.url} /> ))
                ))
                }
            </Paper>
            <Pagination onChange={handlePagination} count={searchData ? 1 : Math.floor(count/16)} color="primary" />
        </Paper>
    )
};