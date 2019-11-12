import React from 'react';

function Slider({ callback, disabled = false, readOnly = false }) {
	return (
		<input
			type="range"
			disabled={disabled}
			readOnly={readOnly}
			onChange={({ target: { value } }) => callback(value)}
		/>
	);
}

export default Slider;
