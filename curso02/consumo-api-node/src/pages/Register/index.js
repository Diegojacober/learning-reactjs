import React from "react";
import { Title } from './styled'
import { Container } from "../../styles/GlobalStyles";
import { useDispatch } from "react-redux";

import * as exampleActions from "../../store/modules/example/actions"

export default function Register() {
    return (
        <Container>
            <h1>Register</h1>
        </Container>
    )
}