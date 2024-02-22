import { ChangeEvent, useState } from "react";
import "./chessboard.css";

const rowSize: number = 8;
const totalSquareSize: number = 64;
const ChessBoard = () => {
	const boardSizeArr: Array<number[]> = [];
	const [boardColor, setBoardColor] = useState("#000000");

	let tempArr = [];
	for (let i = 1; i <= totalSquareSize; i++) {
		if (i % rowSize === 0) {
			tempArr.push(i);
			if ((i / rowSize) % 2 === 0) {
				tempArr.reverse();
				boardSizeArr.push(tempArr);
			} else {
				boardSizeArr.push(tempArr);
			}
			tempArr = [];
		} else {
			tempArr.push(i);
		}
	}

	const chessboardUi = () => {
		let rows: JSX.Element[] = [];
		let row: JSX.Element[] = [];

		for (let i = 0; i < boardSizeArr.length; i++) {
			for (let j = 0; j < rowSize; j++) {
				const isEvenCell = boardSizeArr[i][j] % 2 === 0;
				const cellClass = `w-[120px] h-[120px] border flex justify-center items-center ${
					isEvenCell ? "even bg-black text-white" : "odd"
				}`;
				row.push(
					<div
						key={i}
						className={cellClass}
						style={{ backgroundColor: isEvenCell ? `${boardColor}` : "" }}
					>
						{/*{boardSizeArr[i][j]} */}
					</div>
				);
			}
			rows.push(<div className="flex">{row}</div>);
			row = [];
		}
		return (
			<div className="flex flex-wrap w-100 items-center justify-center py-4">
				{rows}
			</div>
		);
	};

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setBoardColor(e.target.value);
	};

	return (
		<>
			<div className="flex p-2 justify-center">
				<label className="inline-block pr-1" htmlFor="color-picker">Pick your color </label>
				<input
					id="color-picker"
					type="color"
					value={boardColor}
					onChange={handleOnChange}
				/>
			</div>
			<div className="flex flex-wrap w-100 items-center">{chessboardUi()}</div>
		</>
	);
};

export default ChessBoard;
