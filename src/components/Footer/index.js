import React from 'react'
import { useSelector } from 'react-redux'
import {NO_CATCH_POKEMON,CATCH_POKEMON_COUNT}from '../../const'
import './styles.css'

const Footer=()=>{
    const catchPokemon=useSelector(state=>state.poke)
        return(
            <footer className="appFooter">
                    <p>{catchPokemon.catchedPokemons.length >0 ?CATCH_POKEMON_COUNT +catchPokemon.catchedPokemons.length :NO_CATCH_POKEMON }</p>
              
            </footer>
        )
}
export default  React.memo(Footer)