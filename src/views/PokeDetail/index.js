import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {FETCH_POKE_BY_ID} from '../../services/pokeService'

const PokeDetail=()=>{
    const {id}=useParams();
    const [loading,setLoading]=useState(false)
    const [pokeDetail,setPokeDetail]=useState(null)
    useEffect(()=>{
        fetchPokeById()
    },[id])

    const fetchPokeById=async ()=>{
        setLoading(true)
        const result=await FETCH_POKE_BY_ID(id)
        if(result.isSucces){
            setPokeDetail(result.data)
        }
        setLoading(false)
    }
    return(
        <div style={{height:"100%"}}>
            {JSON.stringify(loading)}<br/>
            <pre>
            {JSON.stringify(pokeDetail,null,2)}

            </pre>
            Pokemon Detay Sayfası
        </div>
    )
}
export default PokeDetail