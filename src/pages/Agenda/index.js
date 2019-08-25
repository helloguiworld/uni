import React from 'react';
import './style.css';

import Header from "../../components/header";
import Materia from "../../components/materia";

function Agenda(props) {
    return(
        <div>
            <Header/>
            <main className="agenda">
                <div className="materias">
                    <Materia 
                    materia="Física I"
                    cor="#fde300"
                    nomeProf="Lucas Vieira Albuquerque"
                    sala="3-212"
                    diaEHora="Quarta / 19:00 - 20:40"
                    faltas="5%"
                    media="8.0"/>
                    <Materia 
                    materia="Algebra I"
                    cor="#b80a0a"
                    nomeProf="João Silva Pereira"
                    sala="5-001"
                    diaEHora="Segunda / 19:00 - 20:40"
                    faltas="2%"
                    media="6.0"/>
                    <Materia 
                    materia="Cálculo III"
                    cor="#0ab899"
                    nomeProf="Carlos Augusto Feitosa Ribeiro"
                    sala="4-005"
                    diaEHora="Sexta / 19:00 - 20:40"
                    faltas="10%"
                    media="7.8"/>
                </div>
                <img className="calendario" alt="calendario" src="../../imagens/calendario.jpeg"/>
            </main>
        </div>
    );
};

export default Agenda;