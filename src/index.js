import React from 'react';
import ReactDOM from 'react-dom';
import SisaHidup from './components/SisaHidup/index';
// import CountDown from './components/CountDown/index';

import './styles.css';
// import Game from './components/ParticleOfComponentOfCompponents/TicTacToe';
import Todos from './components/Todos/HookHooks';
import UseStateObj from './components/Hooks/UseStatesObject';
// import MessageList from './components/ParticleOfComponentOfCompponents/Context';

// const rootElement = document.getElementById('root');
// ReactDOM.render(<CountDown hours="0" minutes="1" />, rootElement);

const rootElement = document.getElementById('root');
ReactDOM.render(<UseStateObj />, rootElement);
