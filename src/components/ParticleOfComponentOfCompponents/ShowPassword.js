import React, { useState } from 'react';

function ShowPassword({ value }) {
	const [show, setShow] = useState(false);

	return (
		<>
			<input
				type={show ? 'text' : 'password'}
				value={value}
				onChange={() => {}}
			/>
			<button onClick={() => setShow(!show)}>Show/Hide</button>
		</>
	);
}

export default ShowPassword;
