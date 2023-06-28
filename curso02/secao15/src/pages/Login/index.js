import React, { useEffect } from "react";
import { Title } from './styled'
import { Container } from "../../styles/GlobalStyles";

export default function Login() {

    return (
        <Container>
            <Title isRed={false}>
                Login
                <small>Faça login</small>
            </Title>

            <p>Lorem ipsum dolor sit amet.</p>
        </Container>
    )
}