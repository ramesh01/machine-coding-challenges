import { useEffect, useRef, useState } from "react";

const ProgressBar = () => {
	const [value, setValue] = useState(0);
	const clearIntervalRef = useRef<any>(null);

	const handleStartProgressbar = () => {
		clearIntervalRef.current = setInterval(() => {
			setValue((val) => Math.min(100, val + 1));
		}, 100);
	};

	const handleResetProgressbar = () => {
		clearInterval(clearIntervalRef.current);
		setValue(0);
	};

	useEffect(() => {
		return () => {
			clearInterval(clearIntervalRef.current);
		};
	}, []);

	return (
		<>
			<div className="flex flex-col mt-[1%]">
				<div className="w-[300px] text-left">Progress bar </div>
				<div className="relative overflow-hidden rounded-2xl mt-2 bg-gray-200 h-[20px] w-[300px]">
					<div
						className={`absolute rounded-2xl bg-red-400 h-[20px] w-[100%]`}
						style={{ transform: `translate(${value - 100}%)` }}
					></div>
				</div>
			</div>
			{/* Another format */}
			<div className="flex flex-col mt-[8%]">
				<div className="w-[300px] text-left">Progress bar - 1 </div>
				<div className="relative rounded-2xl mt-2 bg-gray-200 text-[13px] h-[20px] w-[300px]">
					<span className="flex z-10 absolute w-[100%] justify-center">
						{value} %
					</span>
					<div
						className={`flex rounded-2xl bg-red-500 absolute h-[20px] justify-center`}
						style={{
							width: `${value}%`,
							transformOrigin: "left",
						}}
					></div>
				</div>
			</div>
			<div className="flex w-[300px] mt-[4%]">
				<div>
					<button
						className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 
                                rounded focus:outline-none focus:shadow-outline"
						type="button"
						onClick={() => {
							handleStartProgressbar();
						}}
					>
						Start
					</button>
				</div>
				<button
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 
            rounded focus:outline-none focus:shadow-outline"
					type="button"
					onClick={handleResetProgressbar}
				>
					Reset
				</button>
			</div>
		</>
	);
};

export default ProgressBar;
