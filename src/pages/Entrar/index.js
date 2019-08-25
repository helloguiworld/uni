import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

function Entrar(props) {
    return(
        <main className="entrar">
            <div className="main-text">
                <h1>Bem vindo ao</h1>
                <img alt="logotipo" src="./imagens/logo.png"></img>
            </div>
            <div className="main-link">
                <p>Entrar como</p>
                <div>
                    <Link to="/aluno">Aluno</Link>
                    <Link to="/">Professor</Link>
                    <Link to="/">Servidor</Link>
                </div>
            </div>
        </main>
    );
};

export default Entrar;