import React, { useState } from "react";
import { Form } from './styled'
import { Container } from "../../styles/GlobalStyles";
import { useDispatch } from "react-redux";
import isEmail from "validator/lib/isEmail";
import axios from '../../services/axios';
import history from '../../services/history';

import * as exampleActions from "../../store/modules/example/actions"
import { toast } from "react-toastify";
import { get } from "lodash";

export default function Register() {

    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        var formErrors = false;

        if (nome.length < 3 || password.length > 255) {
            formErrors = true;
            toast.error('O nome deve ter entre 3 e 255 caracteres');
        }

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('E-mail inválido!');
        }

        if (password.length < 6 || password.length > 50) {
            formErrors = true;
            toast.error('A senha deve ter entre 6 e 50 caracteres');
        }

        try {
            await axios.post('/users', {
                nome, password, email,
            })

            toast.success('Cadastro feito com sucesso');
            history.push('/login');
            history.go(0);
        } catch (e) {
            const status = get(e, 'response.status', 0)
            const erros = get(e, 'response.data.errors', [])

            erros.map((error) => toast.error(error))
        }


    }

    return (
        <Container>
            <h1>Crie sua conta</h1>

            <Form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome
                    <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>

                <label htmlFor="email">
                    E-mail
                    <input type="text" placeholder="Digite sua email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label htmlFor="senha">
                    Senha
                    <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>


                <button type="submit">Criar minha conta</button>
            </Form>
        </Container>
    )
}