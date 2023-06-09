import React from "react";
import { Title } from './styled'
import { Container } from "../../styles/GlobalStyles";
import { useDispatch } from "react-redux";

import * as exampleActions from "../../store/modules/example/actions"

export default function Login() {

    // Dispara ações
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();
        
        dispatch(exampleActions.btnClickRequest());
    }

    return (
        <Container>
            <Title isRed={false}>
                Login
                <small>Faça login</small>
            </Title>

            <p>Lorem ipsum dolor sit amet.</p>
            <button onClick={handleClick}>Entrar</button>
        </Container>
    )
}