import React, { useReducer } from 'react';
import ContextCompA from './components/Hooks/UseContext/ContextCompA';
import ContextCompC from './components/Hooks/UseContext/ContextCompC';
import ContextCompB from './components/Hooks/UseContext/ContextCompB';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		case 'reset':
			return initialState;
		default:
			return state;
	}
};
export const CountContext = React.createContext();
function App() {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			{/* <UserContext.Provider value={'green'}>
				<ChannelContext.Provider value={'purple'}>
					<ContextCompA />
				</ChannelContext.Provider>
			</UserContext.Provider> */}
			<CountContext.Provider
				value={{ countState: count, countDispatch: dispatch }}>
				<h3>Global State</h3>
				<h1 style={{ marginTop: '-15px' }}>Count is {count}</h1>
				<ContextCompA />
				<ContextCompB />
				<ContextCompC />
			</CountContext.Provider>
		</>
	);
}

export default App;
