import React, { useState } from 'react';

function UseStateObj() {
	const [name, setName] = useState({ firstname: '', lastname: '' });
	
	return (
		<>
			<input
				type="text"
				value={name.firstname}
				onChange={e => setName({ ...name, firstname: e.target.value })}
			/>
			<input
				type="text"
				value={name.lastname}
				onChange={e => setName({ ...name, lastname: e.target.value })}
			/>
			<h2>Your firstname is {name.firstname}</h2>
			<h2>Your lastname is {name.lastname}</h2>
		</>
	);
}

export default UseStateObj;
