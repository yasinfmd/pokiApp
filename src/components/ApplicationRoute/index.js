import React,{lazy,Suspense}  from 'react'
import {Route} from 'react-router-dom'

import PublicRoute from '../PublicRoute'

const ApplicationRoute=({component:Component,...rest})=>{
    const lazyComponent=(path)=>{
            return lazy(()=> import(`../../views/${path}`))
    }

    return(
        <Route
        {...rest}
        exact
        render={(props) => {
            return (
                <>
                        <Suspense fallback={<div>yükleniyor</div>}>
                                <PublicRoute component={lazyComponent(rest.importPath)}/>
                        </Suspense>
                </>
            )
        }}
    />
    )

}
export default  ApplicationRoute