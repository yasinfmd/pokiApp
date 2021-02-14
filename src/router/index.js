import {RouterList} from './routerConst'
import ApplicationRoute from '../components/ApplicationRoute'

import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'



const Routers=()=>{
    return(
        <Router>
        <Switch>
        {RouterList.map((routeItem, index) => {
                    return (
                        <ApplicationRoute
                            key={index}
                            path={routeItem.path}
                            importPath={routeItem.importPath}
                        />
                    )
                })}
       
        </Switch>
    </Router>
    )
}
export default Routers