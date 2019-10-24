import React, { useState } from 'react';

const SisaHidup = () => {
	const initialCounter = 0;
	const [counter, setCounter] = useState(initialCounter);

	const handleIncreaseCounter = () => {
		setCounter(prevCounter => prevCounter + 1);
	};

	const handleDecreaseCounter = () => {
		const edit = () => {
			document.getElementsByTagName('h1')[0].innerHTML =
				'maap kamu terlalu baik';
			setInterval(() => {
				window.location.reload();
			}, 650);
		};
		initialCounter === 0 ? edit() : setCounter(prevCounter => prevCounter - 1);
	};

	return (
		<div className="App">
			<h1>sisa hidup kamu : {counter} tahun lagi...</h1>
			<button onClick={handleIncreaseCounter}>Tambah Tahun</button>
			<button onClick={handleDecreaseCounter}>Kurangi Tahun</button>
			<button onClick={() => setCounter(initialCounter)}>Reset Tahun</button>
		</div>
	);
};

export default SisaHidup;
