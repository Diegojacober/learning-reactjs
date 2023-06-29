import React from "react";
import { Switch, BrowserRouter } from 'react-router-dom'

import MyRoute from "./MyRoute";
import Login from '../pages/Login'
import Error from '../pages/Error'
import Home from '../pages/Home'

function RoutesApp() {
    return(
        <BrowserRouter>
        <Switch>
            <MyRoute exact path='/login' component={ Login }/>
            <MyRoute exact  path='/' component={ Home } isClosed/>

            <MyRoute path='*' component={ Error }/>

        </Switch>
        </BrowserRouter>
    )
}

export default RoutesApp