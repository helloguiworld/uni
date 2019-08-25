import React, { useEffect } from 'react';
import './style.css';

function Load(props) {
    function hideLoadScreen() {
        document.querySelector(".load-screen").classList.add('load-screen-hide');
    };
    useEffect(() => {
        setTimeout(hideLoadScreen, 500);
        setTimeout(() => {document.querySelector(".load-screen").style.display = "none";}, 1500);
    });
    return(
        <div className="load-screen">
            <img src="../../imagens/logo.png" alt="logotipo"/>
        </div>
    );
};

export default Load;