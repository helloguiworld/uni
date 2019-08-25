import React from 'react';
import './style.css';
import Header from "../../components/header";
import { Link } from 'react-router-dom';

function Comunidade(props) {
    return(
        <div>
            <Header/>
            <main className="comunidade">
                <a href="https://minervacaaso.wordpress.com/" className="down" id="com-sacim">SACIM</a>
                <a href="https://minervacaaso.wordpress.com/" id="com-caaso">CAASO</a>
                <Link to="/comunidade" className="down" id="com-votacao">Votações</Link>
                <Link to="/comunidade" id="com-coletivos">Coletivos</Link>
            </main>
        </div>
    );
};

export default Comunidade;