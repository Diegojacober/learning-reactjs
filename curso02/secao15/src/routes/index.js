import React from "react";
import {Routes, Route} from 'react-router-dom'

import Login from '../pages/Login'
import Error from '../pages/Error'

function RoutesApp() {
    return(
        <Routes>
            <Route exact path='/' element={ <Login/> }/>
            <Route path='*' element={ <Error/> }/>

        </Routes>
    )
}

export default RoutesApp