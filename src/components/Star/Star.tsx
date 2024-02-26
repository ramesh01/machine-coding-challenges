import { FC, useState } from "react";
import "./star.css";

type InputProps = {
	rating: number;
	onMouseEnter: (rating: number) => void;
	onMouseLeave: (rating: number) => void;
	onClickEvent: (rating: number) => void;
	selectedRating: number;
};

const Star: FC<InputProps> = ({
	rating,
	onMouseEnter,
	onMouseLeave,
	selectedRating,
	onClickEvent,
}) => {
	const [index] = useState(rating);

	const HandleMouseEnter = () => {
		onMouseEnter(index);
	};

	const HandleMouseLeave = () => {
		onMouseLeave(index);
	};

	const handleClick = () => {
		onClickEvent(index);
	};

	return (
		<span
			className={`cursor-pointer star ${
				index <= selectedRating ? "on" : "off"
			}`}
			data-rating={index}
			onMouseEnter={HandleMouseEnter}
			onMouseLeave={HandleMouseLeave}
			onClick={handleClick}
		>
			&#9733;
		</span>
	);
};

export default Star;
