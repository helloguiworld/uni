import React from 'react';
import './style.css';
import Header from '../../components/header';
import Card from '../../components/card';
import Botons from '../../components/botons';


function Perfil(props) {
    return(
        <div>
            <Header/>
            <main className="perfil">
                <Card
                nome="Irmão do Jorel"
                curso="Matemática"
                email="irm_jorel@usp.br"
                n_usp="12123400"/>
                <Botons
                titulo="Projetos de extensão"
                botons={[
                    {   id: "icmc_jr",
                        title: "ICMC Júnior",
                        info: "Diretor de projetos por 1 ano"},
                    {   id: "icmc_jr",
                        title: "ICMC Júnior",
                        info: "Membro por 2 anos"},
                    {   id: "gema",
                        title: "Gema",
                        info: "maratona 2019"},
                    {   id: "ucl_sanca",
                        title: "UCLSanca",
                        info: "Participação no INTERHACK"}]}/>
                <Botons
                titulo="Eventos"
                botons={[
                    {   id: "semcomp",
                        title: "semcomp 2019",
                        info: "Curso de Python"},
                    {   id: "semcomp",
                        title: "semcomp 2019",
                        info: "Curso de GIT"},
                    {   id: "semcomp",
                        title: "semcomp 2019",
                        info: "Curso de Segurança na Internet"}]}/>
            </main>
            <div className="chat">
                <button>
                <i class="fas fa-comments"></i>
                </button>
            </div>
        </div>
    );
};

export default Perfil;