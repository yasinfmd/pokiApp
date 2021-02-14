import React from 'react'
import TypesItem from '../TypesItem'
import PropTypes from 'prop-types'; 
import {POKEMON_DETAIL,CATCH_POKEMON,ALREADY_CATCH_TEXT,SUCCESS_CATCH_POKEMON,OOPSS,PERFECT} from  '../../const'
import {AddPoke} from '../../store/actions/pokeActions'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

const showMessage=(icon,title,text)=>{
    Swal.fire({
        icon:icon,
        title: title,
        text: text,
      })
}

const PokeCard=({name,image,id,types})=>{
    const dispatch=useDispatch();
    const catchedPokes=useSelector(state=>state.poke)

    const catchPokemon=(id,name)=>{
            if(catchedPokes.catchedPokemons.length){
                var findedPoke=catchedPokes.catchedPokemons.find((item)=>{
                    return item.id==id
                })
                if(findedPoke){
                    showMessage("error",OOPSS,`${findedPoke.name.toUpperCase()} ${ALREADY_CATCH_TEXT}`)
                    return;
                }
            }
            console.log(findedPoke)
        dispatch(AddPoke({id,name,image,types}))
        showMessage("success",PERFECT,`${name.toUpperCase()} ${SUCCESS_CATCH_POKEMON}`)

    }

    return(
        <div className="pokeCardContainer">
                    <div className="pokeCard">
                            <div className="titleSection">
                                {name}
                            </div>
                            <div className="imageSection">
                                <img src={image} alt={name} />
                            </div>
                                <TypesItem types={types} />

                            <div className="pokeDetailLink">
                                <Link to={`poke-detail/${id}`}>
                                {POKEMON_DETAIL}
                                </Link>
                            </div>

                            <div className="catchPokemon" onClick={()=>{
                                catchPokemon(id,name)
                            }}>
                               {name} - {CATCH_POKEMON}
                            </div>
                    </div>
        </div>
    )

}
PokeCard.propTypes={
    name:PropTypes.string,
    image:PropTypes.string,
    id:PropTypes.number,
    types:PropTypes.array
}
export default React.memo(PokeCard)