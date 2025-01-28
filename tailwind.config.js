/** @type {import('tailwindcss').Config} */
const plugin = require("tailwind-scrollbar");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				bgImg: "var(--bgImg)",
				"gradient-checklist":
					"linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
			},
			borderColor: {
				"gradient-checklist":
					"linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
				"bright-blue": "hsl(220, 98%, 61%)",
			},
			colors: {
				brightBlue: "hsl(220, 98%, 61%)",
				bg: "hsl(var(--bg))",
				bg2: "hsl(var(--bg2))",
				fontColor: "hsl(var(--fontColor))",
				textHover: "hsl(var(--textHover))",
				darkerFC: "hsl(var(--darkerFC))",
				lightGray: "hsl(var(--lightGray))",
				borderB: "hsl(var(--borderB))",
				borderHover: "hsl(var(--borderHover))",
			},
			fontFamily: {
				josefin: ["Josefin Sans", "serif"],
			},
		},
	},
	plugins: [plugin({ nocompatible: true })],
};
