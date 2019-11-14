import React, { useEffect, useState } from 'react';

const CountDown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
	const [paused, setPaused] = useState(false);
	const [over, setOver] = useState(false);
	const [time, setTime] = useState({
		hours: parseInt(hours, 10),
		minutes: parseInt(minutes, 10),
		seconds: parseInt(seconds, 10)

		//alternative, this things can be done with
		// hours: Number(hours),
		// minutes: Number(minutes),
		// seconds: Number(seconds)
	});

	const perTIK = () => {
		if (paused || over) return;
		if (time.hours === 0 && time.minutes === 0 && time.seconds === 0)
			setOver(true);
		else if (time.minutes === 0 && time.seconds === 0)
			setTime({
				hours: time.hours - 1,
				minutes: 59,
				seconds: 59
			});
		else if (time.seconds === 0)
			setTime({
				hours: time.hours,
				minutes: time.minutes - 1,
				seconds: 59
			});
		else
			setTime({
				hours: time.hours,
				minutes: time.minutes,
				seconds: time.seconds - 1
			});
	};

	const reset = () => {
		setTime({
			hours: parseInt(hours, 10),
			minutes: parseInt(minutes, 10),
			seconds: parseInt(seconds, 10)
		});
		setPaused(false);
		setOver(false);
	};

	useEffect(() => {
		let timerID = setInterval(() => perTIK(), 1000);
		return () => clearInterval(timerID);
	});

	return (
		<div>
			<p>{`${time.hours
				.toString()
				.padStart(2, '0')}:${time.minutes
				.toString()
				.padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p>
			<div>{over ? 'Waktu Habis!' : ''}</div>
			<button onClick={() => setPaused(!paused)}>
				{paused ? 'Resume' : 'Pause'}
			</button>
			<button onClick={() => reset()}>Restart</button>
		</div>
	);
};

export default CountDown;
