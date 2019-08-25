import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Load from '../../components/load';


function Home(props) {
    return(
        <main className="home">
            <Load/>
            <div className="main-about">
                <img alt="logotipo" src="./imagens/logo.png"/>
                <p>O portal <strong>unificado</strong> para alinhar o seu <strong>universo</strong> acadêmico.</p>
            </div>
            <div className="main-list">
                <div className="main-list-links">
                    <Link to="/perfil">Perfil Acadêmico</Link>
                    <Link to="/comunicacao">Comunicação</Link>
                    <Link to="/agenda">Agenda</Link>
                    <Link to="/comunidade">Comunidade</Link>
                    <Link to="/grad">Graduação</Link>
                    <a href="https://uspdigital.usp.br/juno/">Pós Graduação</a>
                    <Link to="/" className="sair">Sair</Link>
                </div>
            </div>
        </main>
    );
};

export default Home;