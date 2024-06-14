/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/preline/preline.js',
	],
	theme: {
		extend: {
			colors:{
				// 'light':
				'brand': '#dc2626',	
				'brand-hover': '#b91c1c',
				'accent': '#be185d',
				'accent-hover': '#be185d',
				
				// 'outline':
				// 'outline-hover':				
				
				'info': '#1d4ed8',
				'success': '#16a34a',
				'warning': '#f97316',
				'danger': '#dc2626',
				'light': '#f1f5f9',
				'dark': '#0f172a',
			}
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
	},
	plugins: [require("preline/plugin")],
}
