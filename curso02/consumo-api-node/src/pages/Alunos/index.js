import React, { useEffect, useState } from "react";
import Aluno from "../../components/Aluno";
import { useDispatch } from "react-redux";

import { AlunosContainer } from './styled'
import { Container } from "../../styles/GlobalStyles";
import axios from '../../services/axios';

export default function Alunos() {

    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function getData() {

            const response = await axios.get('/alunos');

            setAlunos(response.data);
        }

        getData();
    }, [])

    return (
        <Container>
            <h1>Alunos</h1>

            <AlunosContainer>
                {alunos.map(aluno => <Aluno aluno={aluno}/>)}

            </AlunosContainer>
        </Container>
    )
}