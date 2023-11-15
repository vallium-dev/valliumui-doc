/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
		"./components/**/*.{js,jsx,ts,tsx,md,mdx}",
		"./node_modules/valliumui/**/*.{js,jsx,ts,tsx,md,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,jsx,ts,tsx,md,mdx}",
	],
	theme: {
		extend: {
			colors: {
				vallium: {
					50: "#eef9ff",
					100: "#d9f2ff",
					200: "#bbe9ff",
					300: "#8cdcff",
					400: "#56c6ff",
					500: "#2eaaff",
					600: "#188cf8",
					700: "#1178ee",
					800: "#145db9",
					900: "#174f91",
					950: "#133158",
				},
			},
		},
	},
	plugins: [],
};
