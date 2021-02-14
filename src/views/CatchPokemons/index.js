import React from 'react'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import {NO_CATCH_POKEMON_LENGTH} from '../../const'
import {useHistory} from 'react-router-dom'
import CatchedPoke from '../../components/CatchedPoke'
const CatchPokemons=()=>{
    const history=useHistory();
    const onNavigateHome=()=>{
            history.replace('/')
    }
    const catchPokemon=useSelector(state=>state.poke)
        return(
            <div className="catchedPokeListContainer" >
                {catchPokemon.catchedPokemons.length<1 && <div onClick={onNavigateHome} className="nocatchPokeTitle">
                       {NO_CATCH_POKEMON_LENGTH}
                </div>} 

                {catchPokemon.catchedPokemons.length>0 && <div>
                    <CatchedPoke catchPokeList={catchPokemon.catchedPokemons} />
                </div>} 
            </div>
        )
}
export default  CatchPokemons