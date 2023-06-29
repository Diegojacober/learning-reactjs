import React from "react";
import { Switch, BrowserRouter } from 'react-router-dom'

import MyRoute from "./MyRoute";

import Login from '../pages/Login'
import Alunos from '../pages/Alunos'
import Aluno from '../pages/Aluno'
import Pictures from '../pages/Pictures'
import Register from '../pages/Register'
import Error from '../pages/Error'
import Home from '../pages/Home'

function RoutesApp() {
    return(
        <BrowserRouter>
        <Switch>
            <MyRoute exact  path='/alunos' component={ Alunos } isClosed={false}/>
            <MyRoute exact  path='/aluno/:id/edit' component={ Aluno } isClosed/>
            <MyRoute exact  path='/aluno' component={ Aluno } isClosed/>
            <MyRoute exact  path='/picture/:id' component={ Pictures } isClosed/>

            <MyRoute exact path='/login' component={ Login } isClosed={false}/>
            <MyRoute exact path='/register' component={ Register } isClosed={false}/>

            <MyRoute path='*' component={ Error }/>

        </Switch>
        </BrowserRouter>
    )
}
// 661994
export default RoutesApp