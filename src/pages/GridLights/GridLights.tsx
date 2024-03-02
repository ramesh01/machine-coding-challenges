import Node from "postcss/lib/node";
import React, { useEffect, useRef, useState } from "react";

const GridLights = () => {
	const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
	const grids = [
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
	];

	const handleSelectOnClick = (index: number) => {
		if (!selectedIndexes.includes(index)) {
			const selectedList = [...selectedIndexes, index];
			setSelectedIndexes(selectedList);
			if (selectedList.length === grids.flat(1).filter(Boolean).length) {
				deactivateCells();
			}
		}
	};

	const deactivateCells = () => {
		const timer = setInterval(() => {
			setSelectedIndexes((prevVlaues) => {
				const newSelectedIndexArr = prevVlaues.slice();
				newSelectedIndexArr.pop();
				if (newSelectedIndexArr.length === 0) {
					clearInterval(timer);
				}
				return newSelectedIndexArr;
			});
		}, 500);
	};

	const gridView = () => {
		return (
			<div className="grid gap-10 grid-cols-3">
				{grids
					.flat(1)
					.map((value: number, index: number) =>
						value ? (
							<div
								key={`grid-${value}-${index}`}
								className={`w-[100px] h-[100px] border border-slate-700 cursor-pointer m-2 ${
									selectedIndexes.includes(index) ? "bg-green-700" : ""
								}`}
								onClick={() => handleSelectOnClick(index)}
							></div>
						) : (
							<div></div>
						)
					)}
			</div>
		);
	};

	return <div className="flex justify-center">{gridView()}</div>;
};

export default GridLights;
