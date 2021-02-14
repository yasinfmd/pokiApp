import { func } from 'prop-types'
import {CATCH_POKEMON_ACTION,REMOVE_CATCH_POKE_ACTION} from '../../../const'
const initialState={
    catchedPokemons:[]
}
export default function pokeReducer (state=initialState,action){
    const {type,payload}=action
    switch (type) {
        case CATCH_POKEMON_ACTION:
            return {...state,catchedPokemons:state.catchedPokemons.concat(payload)}
            case REMOVE_CATCH_POKE_ACTION:
                return {...state,catchedPokemons:state.catchedPokemons.filter((item)=>{return item.id !== payload})}
        default:
            return state;
    }
} 