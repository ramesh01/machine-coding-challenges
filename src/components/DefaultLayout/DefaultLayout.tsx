import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LeftMenu from "../LeftMenu/LeftMenu";

const DefaultLayout = () => {
	return (
		<>
			<Header />
			<div className="main-container flex h-screen">
				<aside className="border-r min-w-[14%] border-gray-200 py-4">
					<LeftMenu />
				</aside>
				<div className="container">
					<main className="py-2 px-4">
						<Outlet></Outlet>
					</main>
				</div>
			</div>
		</>
	);
};

export default DefaultLayout;