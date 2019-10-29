import React, { useEffect, useState } from 'react';

function EffectCounter() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');

	useEffect(() => {
		document.title = `You Clicked ${count} times`;
	}, [count]);

	return (
		<>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>Click {count} times</button>
		</>
	);
}

export default EffectCounter;
