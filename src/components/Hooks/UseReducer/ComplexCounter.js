import React, { useReducer } from 'react';

const initialState = {
	firstCounter: 0,
	secondCounter: 15
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, firstCounter: state.firstCounter + action.value };
		case 'decrement':
			return { ...state, firstCounter: state.firstCounter - action.value };
		case 'increment 2':
			return { ...state, secondCounter: state.secondCounter + action.value };
		case 'decrement 2':
			return { ...state, secondCounter: state.secondCounter - action.value };
		case 'reset':
			return initialState;
		default:
			return state;
	}
};

function ComplexCounter() {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<h1>First Counter is {count.firstCounter}</h1>
			<h1>Second Counter is {count.secondCounter}</h1>
			<button onClick={() => dispatch({ type: 'increment', value: 1 })}>
				increment
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
				decrement
			</button>
			<button onClick={() => dispatch({ type: 'increment', value: 5 })}>
				increment 5
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
				decrement 5
			</button>
			<div>
				<button onClick={() => dispatch({ type: 'increment 2', value: 1 })}>
					increment second counter
				</button>
				<button onClick={() => dispatch({ type: 'decrement 2', value: 1 })}>
					decrement second counter
				</button>
			</div>
			<button onClick={() => dispatch({ type: 'reset' })}>reset all</button>
		</>
	);
}

export default ComplexCounter;
