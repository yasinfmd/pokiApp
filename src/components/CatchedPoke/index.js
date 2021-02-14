import React from 'react'
import PropTypes from 'prop-types'; 
import {Link} from 'react-router-dom'
import {REMOVE_FAVORITE_POKEMON_TEXT,OOPSS,SUCCESS_REMOVE_CATCH_POKEMON} from '../../const'

import './styles.css'
import { useDispatch } from 'react-redux';
import {RemovePoke} from '../../store/actions/pokeActions'
import Swal from 'sweetalert2'
const CatchedPoke=({catchPokeList})=>{
        const dispatch=useDispatch();
   
        const removeFavoritePokemon=(id,name)=>{
            dispatch(RemovePoke(id))
            Swal.fire({
                icon:"success",
                title:OOPSS ,
                text: name + " " +SUCCESS_REMOVE_CATCH_POKEMON,
              })
            //catchPokemon.catchedPokemons
        }
        return(
            <>
            <Link className="goBack" to={'/'}>
            Geri Dön
            </Link>
            {(catchPokeList && catchPokeList.length && catchPokeList.length>0) && catchPokeList.map((item,index)=>{

                    return(
                        <div className="catchedPokeContainer">
                            <div className="catchedPokeList">
                                    <div className="idSection">
                                        # {item.id}
                                    </div>
                                    <div className="imageSection">
                                            <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="nameSection">
                                        {item.name}
                                    </div>
                            </div>
                            <div className="typesSection">
                                {item.types && item.types.map((typeItem,index)=>{
                                    return(
                                        <div className="catchedPokeTypeItem">
                                                    {typeItem.type.name}
                                            </div>
                                    )
                                })}
                            </div>
                            <div className="actionSection">
                                <div className="actionSectionDelete" onClick={()=>{
                                    removeFavoritePokemon(item.id,item.name)
                                }}>
                                     {REMOVE_FAVORITE_POKEMON_TEXT}
                                </div>
                            </div>
                        </div>
                    )

            })}
            
    
        </>
        )

}
CatchedPoke.propTypes={
    catchPokeList:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        image:PropTypes.string,
        types:PropTypes.array
    }))
}
export default CatchedPoke;