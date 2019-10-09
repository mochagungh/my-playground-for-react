import React from 'react';
import ReactDOM from 'react-dom';
// import SisaHidup from './components/SisaHidup/index';
import CountDown from './components/CountDown/index';

import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(<CountDown hours="0" minutes="1" />, rootElement);

// const rootElement = document.getElementById('root');
// ReactDOM.render(<SisaHidup />, rootElement);
