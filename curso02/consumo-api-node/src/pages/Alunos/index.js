import React from "react";
import { Title } from './styled'
import { Container } from "../../styles/GlobalStyles";
import { useDispatch } from "react-redux";

import * as exampleActions from "../../store/modules/example/actions"

export default function Alunos() {
    return (
        <Container>
            <h1>Alunos</h1>
        </Container>
    )
}