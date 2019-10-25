import React, { useEffect, useState } from 'react';

function EffectCounter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You Clicked ${count} times`;
	});

	return (
		<button onClick={() => setCount(count + 1)}>Click {count} times</button>
	);
}

export default EffectCounter;
