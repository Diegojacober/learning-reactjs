import React from "react";
import { Switch, BrowserRouter } from 'react-router-dom'

import MyRoute from "./MyRoute";
import { Route } from "react-router-dom";
import Login from '../pages/Login'
import Error from '../pages/Error'
import Home from '../pages/Home'

function RoutesApp() {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Login }/>
            <MyRoute exact  path='/home' component={ Home } isClosed/>

            <Route path='*' component={ Error }/>

        </Switch>
        </BrowserRouter>
    )
}

export default RoutesApp