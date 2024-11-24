/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				'noto': ['Noto'],
				'oswald': ['Oswald'],
				'caveat': ['Caveat'],
				'funnel': ['Funnel'],
				'nunito': ['Nunito'],
				'vibur': ['Vibur'],
				'borel': ['Borel'],
				'playwrite': ['Playwright_GB_J'],
			},
			colors: {
				"sunset": {
					50: "#FFF3E5",
					100: "#FFE7CC",
					200: "#FFCF99",
					300: "#FFB866",
					400: "#FF9D2E",
					500: "#FB8500",
					600: "#C76A00",
					700: "#995200",
					800: "#663600",
					900: "#331B00",
					950: "#190E00"
				},
				"sunrise": {
					50: "#FFF8E5",
					100: "#FFF1CC",
					200: "#FFE299",
					300: "#FFD466",
					400: "#FFC533",
					500: "#FFB703",
					600: "#CC9200",
					700: "#996E00",
					800: "#664900",
					900: "#332500",
					950: "#191200"
				},
				"tertiary": {
					50: "#E6F6FE",
					100: "#CDEEFE",
					200: "#8DD7FC",
					300: "#39B9F9",
					400: "#0689CB",
					500: "#023047",
					600: "#02283C",
					700: "#02283C",
					800: "#011B28",
					900: "#011B28",
					950: "#000000"
				},
				"secondary": {
					50: "#EEF9FC",
					100: "#DCF3F9",
					200: "#B1E4F1",
					300: "#7DD3E8",
					400: "#40BEDD",
					500: "#219EBC",
					600: "#1E91AE",
					700: "#1A7B93",
					800: "#156579",
					900: "#104C5B",
					950: "#0B3641"
				},
				"primary": {
					50: "#F7FBFD",
					100: "#EEF7FB",
					200: "#D5EBF6",
					300: "#C0E2F1",
					400: "#A7D6EC",
					500: "#8ECAE6",
					600: "#69B9DE",
					700: "#3BA3D4",
					800: "#2887B4",
					900: "#1E6586",
					950: "#14455C"
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography'),],
}
