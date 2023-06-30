import React, { useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import isEmail from "validator/lib/isEmail";
import { toast } from "react-toastify";
import { get } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions'

import Loading from "../../components/Loading";
import { Form } from "./styled";

export default function Login(props) {

    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.auth.isLoading);

    const prevPath = get(props, 'location.state.prevPath', '/');
    const history = get(props, 'history');

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formErrors = false;

        if (!isEmail(email)) {
          formErrors = true;
          toast.error('E-mail inválido.');
        }
    
        if (password.length < 6 || password.length > 50) {
          formErrors = true;
          toast.error('Senha inválida');
        }
    
        if (formErrors) return;
    
        dispatch(actions.loginRequest({ email, password, prevPath, history }));

    }

    return (
        <Container>
            <Loading isLoading={isLoading} />
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