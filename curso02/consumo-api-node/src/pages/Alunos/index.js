import React, { useEffect, useState } from "react";
import Aluno from "../../components/Aluno";
import { useDispatch } from "react-redux";

import { AlunosContainer } from './styled'
import Loading from "../../components/Loading";
import { Container } from "../../styles/GlobalStyles";
import axios from '../../services/axios';

export default function Alunos() {

    const [alunos, setAlunos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setIsLoading(true)
            const response = await axios.get('/alunos');
            setAlunos(response.data);
            setIsLoading(false)
        }

        getData();
    }, [])

    return (
        <Container>
            <Loading isLoading={isLoading} />
            <h1>Alunos</h1>

            <AlunosContainer>
                {alunos.map(aluno => <Aluno aluno={aluno}/>)}

            </AlunosContainer>
        </Container>
    )
}