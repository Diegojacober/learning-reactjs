import React from "react";
import { Nav } from "./styled"; 


import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Header() {

    const botaoClicado = useSelector(state => state.botaoClicado)

    return(
        <Nav>
            <p style={{color: '#FFF'}}>Botoão clicado: {botaoClicado ? 'Clicado' : 'Não clicado'}</p>
            <Link to="/"><FaHome size={24}/></Link>
            <Link to="/login"><FaUserAlt size={24}/></Link>
            <Link to="/signout"><FaSignInAlt size={24}/></Link>
        </Nav>
    )
}
