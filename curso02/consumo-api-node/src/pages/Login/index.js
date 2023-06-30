import React, { useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import isEmail from "validator/lib/isEmail";
import { toast } from "react-toastify";
import { get } from "lodash";
import { useDispatch } from "react-redux";

import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions'

import { Form } from "./styled";

export default function Login() {

    const dispatch = useDispatch();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        var formErrors = false;

        try { 
            // history.push('/login');
            // history.go(0);
        } catch (e) {
            const status = get(e, 'response.status', 0)
            const erros = get(e, 'response.data.errors', [])

            erros.map((error) => toast.error(error))
        }

        if (formErrors) return;

        dispatch(actions.loginRequest({ email, password }));

    }

    return (
        <Container>
            <h1>Faça login</h1>

            <Form onSubmit={handleSubmit}>

                <label htmlFor="email">
                    E-mail
                    <input type="text" placeholder="Digite sua email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label htmlFor="senha">
                    Senha
                    <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>


                <button type="submit">Entrar</button>
            </Form>
        </Container>
    )
}