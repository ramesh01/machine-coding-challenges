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
		name: "Star Rating",
		path: "/star-rating",
	},
    {
		name: "Color Picker",
		path: "/color-picker",
	},
	{
		name: "Progress Bar",
		path: "/progress-bar",
	},
];

export { leftMenu };
