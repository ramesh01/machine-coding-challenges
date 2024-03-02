import { Link } from "react-router-dom";
import { LeftMenuItem, leftMenu } from "../../config/leftMenuData";

const LeftMenu = () => {
	return (
		<div className="flex flex-col">
			{leftMenu.map((menuItem: LeftMenuItem) => (
				<div className="flex justify-start hover:text-sky-500 px-6 py-2 hover:translate-x-2 transition duration-200">
					<Link to={menuItem.path}>{menuItem.name}</Link>
				</div>
			))}
		</div>
	);
};

export default LeftMenu;
