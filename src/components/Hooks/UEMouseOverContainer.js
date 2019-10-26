import React, { useState } from 'react';
import UEMouseOver from './UEMouseOver';

function UEMouseOverContainer() {
	const [display, setDisplay] = useState(true);

	return (
		<>
			<button onClick={() => setDisplay(!display)}>Toggle Display</button>
			{display && <UEMouseOver />}
		</>
	);
}

export default UEMouseOverContainer;
