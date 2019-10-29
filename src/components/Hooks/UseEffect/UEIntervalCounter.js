import React, { useState, useEffect } from 'react';

function UEIntervalCounter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const tick = () => {
			setCount(prevCount => prevCount + 1);
		};
		let interval = setInterval(tick, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <h1>{count}</h1>;
}

export default UEIntervalCounter;
