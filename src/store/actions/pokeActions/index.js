import {CATCH_POKEMON_ACTION, REMOVE_CATCH_POKE_ACTION} from '../../../const'
export function AddPoke(payload){
    return {type:CATCH_POKEMON_ACTION,payload}
}
export function RemovePoke(payload){
    return {type:REMOVE_CATCH_POKE_ACTION,payload}
}