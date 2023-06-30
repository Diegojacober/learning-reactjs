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
import Loading from "../../components/Loading";

export default function Register() {

    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
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

        if (formErrors) return;

        try {
            await axios.post('/users', {
                nome, password, email,
            })

            toast.success('Cadastro feito com sucesso');
            setIsLoading(false);
            history.push('/login');
            history.go(0);
        } catch (e) {
            const status = get(e, 'response.status', 0)
            const erros = get(e, 'response.data.errors', [])

            erros.map((error) => toast.error(error))
            setIsLoading(false);
        }

    }

    return (
        <Container>
            <Loading isLoading={isLoading} />
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