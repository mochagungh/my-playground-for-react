import React from 'react';
import ReactDOM from 'react-dom';
import SisaHidup from './components/SisaHidup/index';
import CountDown from './components/CountDown/index';

import './styles.css';
import Game from './components/ParticleOfComponentOfCompponents/TicTacToe';
import Todos from './components/Todos/HookHooks';
import UseStateObj from './components/Hooks/UseState/UseStatesObject';
import UseStateAoB from './components/Hooks/UseState/UseStateAoB';
import EffectCounter from './components/Hooks/UseEffect/UseEffect';
import UEMouseOver from './components/Hooks/UseEffect/UEMouseOver';
import UEMouseOverContainer from './components/Hooks/UseEffect/UEMouseOverContainer';
import UEIntervalCounter from './components/Hooks/UseEffect/UEIntervalCounter';
import DataFetching from './components/Hooks/UseEffect/DataFetching';
import ContextCompA from './components/Hooks/UseContext/ContextCompA';
import App from './App';
import FirstCounter from './components/Hooks/UseReducer/FirstCounter';
import ComplexCounter from './components/Hooks/UseReducer/ComplexCounter';
import MultipleUR from './components/Hooks/UseReducer/MultipleURExample';
import DataFetchingUSUE from './components/Hooks/UseEffect/DataFetchingUSUE';
import DataFetchingUR from './components/Hooks/UseReducer/DataFetchingUR';
import ParentComp from './components/Hooks/UseCallback/ParentComp';
import MultiSelectCheckBox from './components/ParticleOfComponentOfCompponents/MultiSelectCheckBox';

// import MessageList from './components/ParticleOfComponentOfCompponents/Context';

// const rootElement = document.getElementById('root');
// ReactDOM.render(<CountDown hours="0" minutes="1" />, rootElement);

const rootElement = document.getElementById('root');
ReactDOM.render(<ParentComp />, rootElement);

// const options = [{ label: 'Item One' }, { label: 'Item Two' }];

// ReactDOM.render(
// 	<MultiSelectCheckBox
// 		options={options}
// 		onChange={data => {
// 			console.log(data);
// 		}}
// 	/>,
// 	document.getElementById('root')
// );
