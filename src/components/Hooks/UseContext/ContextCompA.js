import React, { useContext } from 'react';
import { CountContext } from '../../../App';
// import ContextCompB from './ContextCompB';

const ContextCompA = () => {
	const countContext = useContext(CountContext);

	return (
		// <ContextCompB />

		<>
			<p>Context Component A :</p>
			<p>count is {countContext.countState}</p>
			<button onClick={() => countContext.countDispatch('increment')}>
				increment
			</button>
			<button onClick={() => countContext.countDispatch('decrement')}>
				decrement
			</button>
			<button onClick={() => countContext.countDispatch('reset')}>reset</button>
		</>
	);
};

export default ContextCompA;
