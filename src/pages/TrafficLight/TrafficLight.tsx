import React, { useEffect, useRef, useState } from "react";

const signalLights = ["green", "yellow", "red"];
const TrafficLight = () => {
	const [currentSignal, setCurrentSignal] = useState<string>("");
	let intervalRef: any = useRef();

	useEffect(() => {
		startTrafficSignal();
		return () => {
			clearInterval(intervalRef);
		};
	}, []);

	const startTrafficSignal = (inx = 0) => {
		let index = inx;
		intervalRef = setInterval(() => {
			index = index % 3;
			if (index === 0 || index === 2) {
				clearInterval(intervalRef);
				setTimeout(() => {
					startTrafficSignal(index);
				}, 2000);
			}
			setCurrentSignal(signalLights[index]);
			index++;
		}, 500);
	};
	return (
		<div className="signal-light-container">
			{signalLights.map((item: string) => (
				<div
					className={`signal-light ${currentSignal === item ? `${item}` : ""}`}
				></div>
			))}
		</div>
	);
};

export default TrafficLight;
