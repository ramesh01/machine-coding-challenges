import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout/DefaultLayout";
import ChessBoard from "../pages/Chessboard/ChessBoard";
import DrawShapes from "../pages/DrawShapes/DrawShapes";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import CountDownTimer from "../pages/CountDownTimer/CountDownTimer";
import StarRating from "../pages/StarRating/StarRating";
import ProgressBar from "../pages/ProgressBar/ProgressBar";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route path="/drawshapes" element={<DrawShapes />} />
					<Route path="/chessboard" element={<ChessBoard />} />
					<Route path="/countdown-timer" element={<CountDownTimer />} />
					<Route path="/star-rating" element={<StarRating />} />
					<Route path="/progress-bar" element={<ProgressBar />} />
				</Route>
				<Route path="*" element={<PageNotFound />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
