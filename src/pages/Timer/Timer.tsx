import { useEffect, useRef, useState } from "react";

const Timer = () => {
	const [timer, setTimer] = useState<string>("0");
	let intervalRef = useRef<any>(null);

	useEffect(() => {
		startTimer();
	}, []);

	const startTimer = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setTimer((prevTimer: string) =>
				Number(parseInt(prevTimer) + 1)
					.toString()
					.padStart(2, "0")
			);
		}, 1000);
	};

	const handleStartTimer = () => {
        startTimer();
    };

	const handleStopTimer = () => {
		clearInterval(intervalRef.current);
	};

	const handleResetTimer = () => {
		setTimer("0");
		startTimer();
	};

	return (
		<>
			<h1 className="block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 py-3">
				Timer
			</h1>
			<p className="mb-4">Timer: {timer}</p>
			<button
				className="bg-green-500 hover:bg-green-700 
            text-white font-bold py-2 px-4 rounded mr-2
            focus:outline-none focus:shadow-outline
            disabled:bg-slate-300 disabled:text-slate-100"
				type="button"
				onClick={handleStartTimer}
			>
				Start
			</button>
			<button
				className="bg-red-500 hover:bg-red-700 
            text-white font-bold py-2 px-4 rounded mr-2
            focus:outline-none focus:shadow-outline
            disabled:bg-slate-300 disabled:text-slate-100"
				type="button"
				onClick={handleStopTimer}
			>
				Stop
			</button>
			<button
				className="bg-slate-500 hover:bg-slate-700 
            text-white font-bold py-2 px-4 rounded
            focus:outline-none focus:shadow-outline
            disabled:bg-slate-300 disabled:text-slate-100"
				type="button"
				onClick={handleResetTimer}
			>
				Reset
			</button>
		</>
	);
};

export default Timer;
