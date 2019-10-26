import React, { useState, useEffect } from 'react';

function UEMouseOver() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMouseMove = e => {
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		window.addEventListener('mousemove', logMouseMove);
	}, []);

	return (
		<>
			<p>X : {x}</p>
			<p>Y : {y}</p>
		</>
	);
}

export default UEMouseOver;
