const ProgressBar = () => {
	return (
		<div className="flex ">
			<div className="progressbar-container rounded-2xl mt-2 bg-gray-200 h-[20px] w-[300px]">
				<div className="progress-bar rounded-2xl bg-red-400 h-[20px] w-[100px]"></div>
			</div>
			<button
				className="bg-red-500 hover:bg-red-700 text-white font-bold ml-4 py-2 px-4 
            rounded focus:outline-none focus:shadow-outline"
			>
				Start
			</button>
		</div>
	);
};

export default ProgressBar;
