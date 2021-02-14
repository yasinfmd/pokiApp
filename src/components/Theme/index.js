import React from 'react'
import PropTypes from 'prop-types'; 

import './styles.css'



const Theme=({themeText,onClick,theme})=>{
    return(
        <div className="themeContainer" style={theme}>
            <p onClick={onClick}>
                {themeText}
            </p>
        </div>
    )
}
Theme.propTypes={
    theme:PropTypes.shape({
        color: PropTypes.string,
        background: PropTypes.string
      }),
    themeText:PropTypes.string,
    onClick:PropTypes.func,
}
export default React.memo(Theme)