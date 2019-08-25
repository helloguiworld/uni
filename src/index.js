import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Entrar from './pages/Entrar';
import LoginAluno from './pages/LoginAluno';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Comunicacao from './pages/Comunicacao';
import Agenda from './pages/Agenda';
import Hackathon from './pages/Hackathon';
import Comunidade from './pages/Comunidade';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Entrar} />
            <Route exact path="/aluno" component={LoginAluno} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/perfil" component={Perfil} />
            <Route exact path="/comunicacao" component={Comunicacao} />
            <Route exact path="/comunicacao/hackathon" component={Hackathon} />
            <Route exact path="/agenda" component={Agenda} />
            <Route exact path="/comunidade" component={Comunidade} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

