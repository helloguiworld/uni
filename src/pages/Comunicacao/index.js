import React from 'react';
import './style.css';
import Header from '../../components/header';
import FiltroComunicacao from '../../components/filtroComunicacao';

function Comunicacao(props) {
    return(
        <main className="">
            <Header/>
            <main className="grid-comunicacao">
                <FiltroComunicacao id="cor1"
                title="Infraestrutura" link=""/>
                <FiltroComunicacao id="cor2"
                title="Hackathons" link="/hackathon"/>
                <FiltroComunicacao id="cor3"
                title="Oportunidades" link=""/>
                <FiltroComunicacao id="cor4"
                title="Palestras" link=""/>
                <FiltroComunicacao id="cor5"
                title="Extensão" link=""/>
                <FiltroComunicacao id="cor6"
                title="Espaço cultural" link=""/>
                <FiltroComunicacao id="cor7"
                title="Simpósios" link=""/>
            </main>
        </main>
    );
};

export default Comunicacao;