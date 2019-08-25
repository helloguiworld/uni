import React from 'react';
import './style.css';

function evento(props) {
    return(
        <div className="evento">
            <div className="evento-data">
                <p className="dia">{props.dia}</p>
                <p className="mes">{props.mes}</p>
            </div>
            <div className="evento-info">
                <p className="nome-evento">{props.nome}</p>
                <a className="link" href={props.link}>Clique para mais informações</a>
            </div>
        </div>
    );
};

export default evento;