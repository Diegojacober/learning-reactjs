import React from "react";
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'
import { AlunoContainer, ProfilePicture, Icons } from "./styled";
import { Link } from "react-router-dom";

export default function Aluno(props) {

    const handleClick = (e) => {
        e.preventDefault();

    }

    return (
        <AlunoContainer key={String(props.aluno.id)}>
            <div>
                <ProfilePicture>
                    {get(props.aluno, 'Files[0].url_image', '') ? (
                        <img crossorigin="anonymous" src={props.aluno.Files[0].url_image} alt={props.aluno.Files[0].filename} />
                    ) : (
                        <FaUserCircle size={36} />
                    )}
                </ProfilePicture>
                <span>{props.aluno.nome}</span>
                <span>{props.aluno.email}</span>
                <Icons>
                    <Link to={`/aluno/${props.aluno.id}/edit`}><FaEdit size={16} /></Link>

                    <Link to={`/aluno/${props.aluno.id}/delete`} onClick={handleClick}><FaWindowClose size={16} /></Link>
                </Icons>
            </div>
        </AlunoContainer>
    )
}
