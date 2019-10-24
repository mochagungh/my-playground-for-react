import React, { useState } from 'react';

function UseStateAoB() {
	const [items, setItems] = useState([]);

	const addItem = () => {
		setItems([
			//bawa semua array nya, karena functional component kaga otomatis merge AoO
			...items,
			{
				id: items.length,
				// random angka 1-10
				value: Math.floor(Math.random() * 10) + 1
			}
		]);
	};

	return (
		<>
			<button onClick={addItem}>Add random number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</>
	);
}

export default UseStateAoB;
