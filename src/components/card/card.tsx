import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css'
import PokeInfo from '../modal/dialog';
import useCard from './useCard';
import { PokeInterface } from '../../interfaces/interfaces';

type PokeCardProps = {
    name: string,
    url: string,
    searchedPoke?: PokeInterface
}

export const PokeCard = ({name, url, searchedPoke}: PokeCardProps) => {

    const {
        poke,
        openFullInfo,
        handleFullInfo,
    } = useCard(name, url, searchedPoke)

    
    return (
         <Card classes={{root: styles.card}}>
            <CardMedia
                classes={{root: styles.img}}
                component="img"
                image={poke?.sprites?.front_default}
                alt={poke?.name}
            />
            <CardContent classes={{root: styles.cardContent}}>
            <Typography  variant="h5" component="div">
                {poke?.name}
            </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleFullInfo} size="small">Show More</Button>
            </CardActions>
            <PokeInfo open={openFullInfo} handleClose={handleFullInfo} poke={poke} />
        </Card>
    )
};

PokeCard.defaultProps = {
    url: '',
    name: ''
}
