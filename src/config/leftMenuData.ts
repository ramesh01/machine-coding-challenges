export type LeftMenuItem = {
	name: string;
	path: string;
};

const leftMenu: Array<LeftMenuItem> = [
	{
		name: "Draw Dots",
		path: "/drawshapes",
	},
	{
		name: "Chess Board",
		path: "/chessboard",
	},
    {
		name: "Count Down Timer",
		path: "/countdown-timer",
	},
    {
		name: "Color Picker",
		path: "/color-picker",
	},
	{
		name: "Star Rating",
		path: "/star-rating",
	},
];

export { leftMenu };
