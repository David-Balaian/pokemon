import { MovesType } from '../../../interfaces/interfaces';

type MovesProps = {data: MovesType | undefined}

export const Moves = ({data}: MovesProps) => <>{data && data.map(item=>item.move.name).join(', ')}</>;