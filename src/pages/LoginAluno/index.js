import React from 'react';
import './style.css';

import LoginForm from "../../components/loginForm";

function LoginAluno(props) {
    return(
        <main className="login-aluno">
            <p>Login aluno</p>
            <LoginForm/>
        </main>
    );
};

export default LoginAluno;