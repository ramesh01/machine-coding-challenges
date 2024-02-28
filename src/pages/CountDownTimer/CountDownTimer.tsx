import { ChangeEvent, useEffect, useRef, useState } from "react";

export interface ICountDownTimer {
	hours: string;
	minutes: string;
	seconds: string;
}
const CountDownTimer = () => {
	const [countDownTime, setCountDownTime] = useState<ICountDownTimer>({
		hours: "",
		minutes: "",
		seconds: "",
	});
	const [isCountDownStarted, setIsCountDownStarted] = useState<boolean>(false);
	const countDownIntervalRef = useRef<any>(null);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement>,
		inputType: string
	) => {
		const input = isNaN(Number(e.target.value)) ? "00" : e.target.value;
		if (inputType === "hour") {
			setCountDownTime({
				...countDownTime,
				hours: input,
			});
		} else if (inputType === "minute") {
			setCountDownTime({
				...countDownTime,
				minutes: input,
			});
		} else {
			setCountDownTime({
				...countDownTime,
				seconds: input,
			});
		}
	};

	const handleStartCountdown = () => {
		if (
			(countDownTime.hours == "" || countDownTime.hours == "00") &&
			(countDownTime.minutes == "" || countDownTime.minutes == "00") &&
			(countDownTime.seconds == "" || countDownTime.seconds == "00")
		)
			return;
		setIsCountDownStarted(true);
		countDownIntervalRef.current = setInterval(() => {
			startCountDownTimer();
		}, 1000);
	};

	const handleStopCountdown = () => {
		setIsCountDownStarted(false);
		clearInterval(countDownIntervalRef.current);
	};

	const startCountDownTimer = () => {
		setCountDownTime((prevTime) => {
			let hours = Number(prevTime.hours);
			let minutes = Number(prevTime.minutes);
			let seconds = Number(prevTime.seconds);

			if (prevTime.minutes > "60") {
				hours = hours + 1;
				minutes = minutes - 60;
				return {
					...prevTime,
					hours: hours.toString(),
					minutes: minutes.toString().padStart(2, "0"),
				};
			}

			if (prevTime.seconds > "60") {
        minutes = minutes + 1;
				seconds = seconds - 59;
				return {
					...prevTime,
					minutes: minutes.toString(),
					seconds: seconds.toString().padStart(2, "0"),
				};
			}

			if (
				(prevTime.hours == "" || prevTime.hours == "00") &&
				(prevTime.minutes == "" || prevTime.minutes == "00") &&
				prevTime.seconds == "00"
			) {
				handleStopCountdown();
				return prevTime;
			} else if (prevTime.seconds !== "00") {
				seconds = seconds - 1;
				return {
					...prevTime,
					seconds: seconds.toString().padStart(2, "0"),
				};
			} else if (prevTime.minutes !== "00" && prevTime.seconds === "00") {
				minutes = minutes - 1;
				return {
					...prevTime,
					seconds: "59",
					minutes: minutes < 0 ? "00" : minutes.toString().padStart(2, "0"),
				};
			} else if (prevTime.hours !== "00" && prevTime.minutes === "00") {
				hours = hours - 1;
				return {
					...prevTime,
					minutes: "60",
					hours: hours < 0 ? "00" : hours.toString().padStart(2, "0"),
				};
			} else {
				return prevTime;
			}
		});
	};

	useEffect(() => {
		return () => {
			clearInterval(countDownIntervalRef.current);
		};
	}, []);

	return (
		<div className="w-[40%] m-auto">
			<div className="flex flex-wrap justify-center mt-[12%] items-center">
				<div className="w-[70px]">
					<input
						className="shadow appearance-none border rounded w-full h-[40px] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						value={countDownTime.hours}
						onChange={(e) => {
							handleChange(e, "hour");
						}}
						placeholder="HH"
						maxLength={2}
					/>
				</div>
				<div className="colon">:</div>
				<div className="w-[70px]">
					<input
						className="shadow appearance-none border rounded w-full h-[40px] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						value={countDownTime.minutes}
						onChange={(e) => {
							handleChange(e, "minute");
						}}
						placeholder="MM"
						maxLength={2}
					/>
				</div>
				<div className="colon">:</div>
				<div className="w-[70px]">
					<input
						className="shadow appearance-none border rounded w-full h-[40px] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						value={countDownTime.seconds}
						onChange={(e) => {
							handleChange(e, "second");
						}}
						placeholder="SS"
						maxLength={2}
					/>
				</div>
			</div>
			<div className="flex justify-center mt-3">
				<div>
					<button
						className="bg-green-500 hover:bg-green-700 
            text-white font-bold py-2 px-4 rounded 
            focus:outline-none focus:shadow-outline
            disabled:bg-slate-300 disabled:text-slate-100"
						type="button"
						onClick={handleStartCountdown}
						disabled={isCountDownStarted}
					>
						Start
					</button>
				</div>
				<div className="ml-2">
					<button
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 
            rounded focus:outline-none focus:shadow-outline"
						type="button"
						onClick={handleStopCountdown}
					>
						Stop
					</button>
				</div>
			</div>
		</div>
	);
};

export default CountDownTimer;
