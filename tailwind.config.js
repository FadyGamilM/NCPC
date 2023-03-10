/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				standard: "Tajawal",
			},
			screens: {
				twoCols: "1030px",
			},
			colors: {
				darkBlue: "#0E1D35",
			},
		},
	},
	plugins: [],
};
