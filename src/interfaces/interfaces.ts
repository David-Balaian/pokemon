export interface listGetter {url: string, params: {limit: number, offset: number}}

export type nameUrl = {name: string, url: string}

export type StatsType = {base_stat: number, effort: number, stat: nameUrl}[]

export type TypesType = {slot: number, type: nameUrl}[]

export type MovesType = {move: nameUrl, version_group_details: {level_learned_at: number, move_learn_method: nameUrl, version_group: nameUrl}[]}[]

export interface PokeInterface {
    species: nameUrl,
    stats: StatsType
    types: TypesType,
    weight: number,
    moves: MovesType,
    sprites?: {front_default: string}
    name?: string,
}