/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-dark": "#1D1D1D",
				"secondary-dark": "#232526",
				"tertiary-dark": "#30363A",
				"pattern-dark": "#000000",
				"primary-title": "#F4F4F4",
				"secondary-title": "#B8B8B8",
				primary: "#99A9FF",
				secondary: "#5CE4CF",
			},
			fontFamily: {
				display: ["var(--font-josefin-sans)", "sans"],
				body: ["var(--font-montserrat)", "sans"],
			},
		},
	},
}
