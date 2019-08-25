import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function FiltroComunicacao(props) {
    return(
        <Link to={"/comunicacao" + props.link} className="filtro" id={props.id}>
            <article>
                <h3>{props.title}</h3>
            </article>
        </Link>
    );
}

export default FiltroComunicacao;
