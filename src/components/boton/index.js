import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Boton(props) {
    return(
        <div className="boton">
            <Link to="/perfil" className="boton-img" id={props.id}/>
            <p className="boton-title">{props.title}</p>
            <p className="boton-info">{props.info}</p>
        </div>
    );
};

export default Boton;