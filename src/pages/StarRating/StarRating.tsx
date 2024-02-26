import { ChangeEvent, useEffect, useState } from "react";
import Star from "../../components/Star/Star";

const StarRating = () => {
	const [noOfStars, setNoOfStars] = useState<string>("10");
	const [starsArr, setStarsArr] = useState<number[]>([]);
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState<number>(0);

	useEffect(() => {
		setStarsArr(
			Array.from(Array(Number(noOfStars)).keys()).map((index) => index + 1)
		);
		setRating(0);
		setHover(0);
	}, [noOfStars]);

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		if (Number(value) <= 10) {
			setNoOfStars(value);
		} else {
			setNoOfStars("");
		}
	};

	const handleMouseEnterEvent = (rating: number) => {
		setHover(rating);
	};

	const handleMouseLeaveEvent = (rating: number) => {
		setHover(0);
	};

	const handleClickEvent = (rating: number) => {
		setRating(rating);
	};

	return (
		<div className="star-rating-container">
			<div className="flex items-center mb-6">
				<div className="pr-2">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="stars"
					>
						Stars
					</label>
				</div>
				<div>
					<input
						id="stars"
						className="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Username"
						value={noOfStars}
						onChange={handleOnChange}
					/>
				</div>
			</div>
			<div className="flex flex-wrap">
				{starsArr.map((e: number) => (
					<Star
						key={`${noOfStars}-${e}`}
						rating={e}
						onMouseEnter={handleMouseEnterEvent}
						onMouseLeave={handleMouseLeaveEvent}
						onClickEvent={handleClickEvent}
						selectedRating={hover || rating}
					/>
				))}
			</div>
		</div>
	);
};

export default StarRating;
