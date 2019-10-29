import React, { useContext } from 'react';
import { CountContext } from '../../../App';
// import ContextCompC from './ContextCompC';

function ContextCompB() {
	const countContext = useContext(CountContext);

	return (
		<div>
			{/* <ContextCompC /> */}
			<p>Context Component B :</p>
			<p>count is {countContext.countState}</p>
			<button onClick={() => countContext.countDispatch('increment')}>
				increment
			</button>
			<button onClick={() => countContext.countDispatch('decrement')}>
				decrement
			</button>
			<button onClick={() => countContext.countDispatch('reset')}>reset</button>
		</div>
	);
}

export default ContextCompB;
