import React from 'react'
import PropTypes from 'prop-types'; 

import './styles.css'


const TypesItem=({types})=>{
    return(
        <div className="typeSection">
            {types.length && types.map((item,index)=>{
                return(
                    <div className="typeItem" key={index}>
                            {item.type.name}
                         </div>
                )
            })}
                 
                 
        </div>
    )
}
TypesItem.propTypes={
    types:PropTypes.array
}
export default React.memo(TypesItem)