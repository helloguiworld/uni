import React, { useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Header() {
    function showMenu() {
        document.querySelector(".menu-mobile").classList.add('menu-mobile-show');
    }
    function hideMenu() {
        document.querySelector(".menu-mobile").classList.remove('menu-mobile-show');
    }
    useEffect(() => {
        document.querySelector(".btn-menu-mobile-show").addEventListener("click", showMenu);
        document.querySelector(".btn-menu-mobile-hide").addEventListener("click", hideMenu);
    });
    return(
        <header>
            <Link to="/home" className="flex-center">
                <img src="../../imagens/logo.png" alt="logotipo"/>
            </Link>
            <button className="btn-menu-mobile-show"><i class="fas fa-bars"></i></button>
            <nav className="menu-mobile">
                <Link to="/home" className="menu-btn-home">Página Inicial</Link>
                <Link to="/perfil">Perfil Acadêmico</Link>
                <Link to="/comunicacao">Comunicação</Link>
                <Link to="/agenda">Agenda</Link>
                <Link to="/comunidade">Comunidade</Link>
                <Link to="/home">Graduação</Link>
                <a href="https://uspdigital.usp.br/juno/">Pós Graduação</a>
                <Link to="/" className="menu-btn-sair">Sair</Link>
                <button class="btn-menu-mobile-hide">
                    <i class="fas fa-angle-up"></i>
                </button>
            </nav>
        </header>
    );
}

export default Header;
