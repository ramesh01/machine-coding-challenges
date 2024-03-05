import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout/DefaultLayout";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader/Loader";

const Router = () => {
	const DrawShapes = lazy(() => import("../pages/DrawShapes/DrawShapes"));
	const ChessBoard = lazy(() => import("../pages/Chessboard/ChessBoard"));
	const CountDownTimer = lazy(
		() => import("../pages/CountDownTimer/CountDownTimer")
	);
	const StarRating = lazy(() => import("../pages/StarRating/StarRating"));
	const ProgressBar = lazy(() => import("../pages/ProgressBar/ProgressBar"));
	const GridLights = lazy(() => import("../pages/GridLights/GridLights"));
	const OTPLogin = lazy(() => import("../pages/OTPLogin/OTPLogin"));
	const PageNotFound = lazy(() => import("../pages/PageNotFound/PageNotFound"));
	const TrafficLight = lazy(() => import("../pages/TrafficLight/TrafficLight"));

	const loaderWrapper = (component: JSX.Element) => {
		return <Suspense fallback={<Loader />}>{component}</Suspense>;
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={loaderWrapper(<DefaultLayout />)}>
					<Route path="/drawshapes" element={loaderWrapper(<DrawShapes />)} />
					<Route path="/chessboard" element={loaderWrapper(<ChessBoard />)} />
					<Route
						path="/countdown-timer"
						element={loaderWrapper(<CountDownTimer />)}
					/>
					<Route path="/star-rating" element={loaderWrapper(<StarRating />)} />
					<Route
						path="/progress-bar"
						element={loaderWrapper(<ProgressBar />)}
					/>
					<Route path="/grid-lights" element={loaderWrapper(<GridLights />)} />
					<Route path="/otp-login" element={loaderWrapper(<OTPLogin />)} />
					<Route path="/traffic-light" element={loaderWrapper(<TrafficLight />)} />
				</Route>
				<Route path="*" element={loaderWrapper(<PageNotFound />)}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
