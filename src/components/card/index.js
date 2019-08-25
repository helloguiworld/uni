import React from 'react';
import './style.css';

function Card(props) {
    return(
        <div className="card shadow-lg">
            <div className="foto_perfil"/>
            <div className="description">
                <p className="nome">Nome: <strong>{props.nome}</strong></p>
                <p>Curso: {props.curso}</p>
                <p>E-mail: {props.email}</p>
                <p>Nº USP: {props.n_usp}</p>
            </div>

        </div>
    );
};

export default Card;