import React from 'react';
import './style.css';
import Boton from '../boton';

function Botons(props) {
    function renderBoton(boton) {
        return <Boton 
            id={boton.id} 
            title={boton.title}
            info={boton.info}/>
    }

    return(
        <div className="card-botons shadow-lg">
            <p>{props.titulo}</p>
            <div className="botons">
                {props.botons.map(renderBoton)}
            </div>
        </div>
    );
};

export default Botons;
