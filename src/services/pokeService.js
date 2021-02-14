import axios from 'axios'

const baseUrl="https://pokeapi.co/api/v2/"
axios.defaults.baseURL=baseUrl;

const returnObject={
    isSucces:false,
    error:false,
    data:null
}

export const FETCH_POKE_BY_ID=async(pokeId)=>{
    try {
        const {data}=await axios.get("pokemon/"+pokeId)
        const poke={
            name:data.name,
            id:data.id,
            abilities:data.abilities,
            types:data.types,
            height:data.height,
            weight:data.weight,
            stats:data.stats,
            images:[data.sprites.back_default,data.sprites.back_shiny,data.sprites.front_default,data.sprites.front_shiny]
        }
        returnObject.isSucces=true;
        returnObject.data=poke;
        return returnObject;
    } catch (error) {
        returnObject.error=true;
        return returnObject;
    }
}

export const FETCH_POKE=async ()=>{
    try{
        const pokeListArray=[]
        const {data:{results}}=await axios.get("pokemon")
        if(results.length>0){
            for(const pokeItem of results){
                const {data}=await axios.get(pokeItem.url)
                pokeListArray.push({
                    name:pokeItem.name,
                    id:data.id,
                    image:data.sprites.front_default,
                    types:data.types
                })
            }
            returnObject.error=false;
            returnObject.isSucces=true;
            returnObject.data=pokeListArray;
            return returnObject
        }
    }catch(e){
        returnObject.error=true;
        return returnObject;
    }
}