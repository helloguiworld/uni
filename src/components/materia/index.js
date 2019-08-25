import React, { useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Materia(props) {
    let idNameContainer = "#" + props.materia.toLowerCase().replace(/ /g, "-") + "-info";
    function showMateriaInfo() {
        document.querySelector(idNameContainer).classList.add('materia-info-show');
    }
    function hideMateriaInfo() {
        document.querySelector(idNameContainer).classList.remove('materia-info-show');
    }
    useEffect(() => {
        let idNameBtnShow = "#" + props.materia.toLowerCase().replace(/ /g, "-") + "-show";
        document.querySelector(idNameBtnShow).addEventListener("click", showMateriaInfo);

        let idNameBtnHide = "#" + props.materia.toLowerCase().replace(/ /g, "-") + "-hide";
        document.querySelector(idNameBtnHide).addEventListener("click", hideMateriaInfo);
    });
    return(
        <div className="aux-materia">
            <button className="materia" id={props.materia.toLowerCase().replace(/ /g, "-") + "-show"}>
                <div className="cor-materia" style={{backgroundColor: props.cor}}></div>
                <p>{props.materia}</p>
            </button>
            <div 
            className="materia-info-hide" 
            id={props.materia.toLowerCase().replace(/ /g, "-") + "-info"}
            style={{backgroundColor: props.cor + "e0"}}>
                <p className="materia-nome">{"Docente: " + props.nomeProf}</p>
                <p className="materia-sala">{"Sala: " + props.sala}</p>
                <p className="materia-deh">{props.diaEHora}</p>
                <p className="materia-faltas">{"Percentual atual de faltas: " + props.faltas}</p>
                <p className="materia-media">{"Média atual: " + props.media}</p>
                <Link to="/agenda" className="materia-duvidas">Dúvidas</Link>
                <Link to="/agenda"  className="materia-material">Material</Link>
                <button class="btn-menu-mobile-hide" id={props.materia.toLowerCase().replace(/ /g, "-") + "-hide"}>
                    <i class="fas fa-angle-up"></i>
                </button>
            </div>
        </div>
    );
};

export default Materia;