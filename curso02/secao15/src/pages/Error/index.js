import React from "react";
import { Title } from './styled'
import { Container } from "../../styles/GlobalStyles";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <Container>
            <Title>Página não encontrada</Title>
            <Link to="/">Voltar</Link>
        </Container>
    )
}