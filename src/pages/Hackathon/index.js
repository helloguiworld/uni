import React from 'react';
import './style.css';
import Header from '../../components/header';
import Evento from '../../components/evento';

function Hackathon(props) {
    return(
        <div>
            <Header/>
            <main className="hackathon">
                <Evento
                dia="31"
                mes="AGOSTO"
                nome="HackSBSeg 2019"
                link="https://www.facebook.com/events/2542665539133255/"/>
                <Evento
                dia="21"
                mes="SETEMBRO"
                nome="SheHacks 2019"
                link="https://www.facebook.com/events/339411686948412/"/>
                <Evento
                mes="A DECIDIR"
                nome="Experiance JAM"
                link="https://www.facebook.com/experiancejam/"/>
            </main>
        </div>
    );
};

export default Hackathon;