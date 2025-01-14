/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				'light-image': "url('/assets/backgrounds/bg-desktop-light.jpg')",
				'dark-image': "url('/assets/backgrounds/bg-desktop-dark.jpg')",
				"gradient-checklist":
					"linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
				"bright-blue": "hsl(220, 98%, 61%)",
			},
			colors: {
				light: {
					backgroundColor: "hsl(0, 0%, 98%)",
					backgroundColor2: "hsl(236, 33%, 92%)",
					lighterTextColor: "hsl(233, 11%, 84%)",
					darkerTextColor: "hsl(236, 9%, 61%)",
					fontColor: "hsl(235, 19%, 35%)",
				},
				dark: {
					backgroundColor: "hsl(235, 21%, 11%)",
					backgroundColor2: "hsl(235, 24%, 19%)",
					lighterTextColor: "hsl(234, 39%, 85%)",
					lightGrayishBlueHover: "hsl(236, 33%, 92%)",
					darkerTextColor: "hsl(234, 11%, 52%)",
					veryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
					veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
				},
			},
		},
	},
	plugins: [],
};
