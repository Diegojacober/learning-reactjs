import React, { useEffect, useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import axios from '../../services/axios';

export default function Login() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Container>
            <h1>Login</h1>
        </Container>
    )
}