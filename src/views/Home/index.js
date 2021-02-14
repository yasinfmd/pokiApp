import React,{useEffect, useState} from 'react'
import {APP_LOADING_TEXT} from '../../const'
import './styles.css'

import {FETCH_POKE} from '../../services/pokeService'
import PokeCard from '../../components/PokeCard'
import {useHistory} from 'react-router-dom'
const Home=()=>{
    const history=useHistory();
    const [pokeIsLoading,setPokeIsLoading]=useState(false)
    const [pokeList,setPokeList]=useState([])
    useEffect(() => {
        getPokemonList();
    }, [])

    const getPokemonList=async ()=>{
            setPokeIsLoading(true)
            const result=await FETCH_POKE();
            setPokeList(result.data);
            setPokeIsLoading(false)
    }

    const onNavigateCatchPokemonList=()=>{
            history.push("/show-catch-pokemon-list")
    }
return(
    <div className="pokeContainer">
        <div className="catchPokeLink" onClick={onNavigateCatchPokemonList}>Yakalanan Pokemonları Göster</div>
        {pokeIsLoading && <div>{APP_LOADING_TEXT}</div>}
        <div className="pokeRow">
            {(pokeList.length && !pokeIsLoading) && pokeList.map((item,index)=>{
                return(
                    <div className="pokeCol" key={index}>
 
                        <PokeCard id={item.id} name={item.name} image={item.image} types={item.types} />
                        </div>
                )
            })}
              
               
        </div>
    </div>
)
}
export default  Home