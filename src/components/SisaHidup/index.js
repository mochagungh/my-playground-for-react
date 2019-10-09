import React, { useState } from 'react';

const SisaHidup = () => {
	const [counter, setCounter] = useState(0);

	const handleIncreaseCounter = () => {
		setCounter(counter + 1);
	};

	const handleDecreaseCounter = () => {
		if (counter === 0) {
			const edit = () => {
				document.getElementsByTagName('h1')[0].innerHTML =
					'maap kamu terlalu baik';
			};
			edit();
			setInterval(function() {
				window.location.reload();
			}, 650);
		} else {
			setCounter(counter - 1);
		}
	};

	const handleResetCounter = () => {
		setCounter(0);
	};

	return (
		<div className="App">
			<h1>sisa hidup kamu : {counter} tahun lagi...</h1>
			<button onClick={handleIncreaseCounter}>Tambah Tahun</button>
			<button onClick={handleDecreaseCounter}>Kurangi Tahun</button>
			<button onClick={handleResetCounter}>Reset Tahun</button>
		</div>
	);
};

export default SisaHidup;
