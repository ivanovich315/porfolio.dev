/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'royal-blue': {
					'50': '#eff7ff',
					'100': '#dbecfe',
					'200': '#bfdefe',
					'300': '#94cbfc',
					'400': '#61adf9',
					'500': '#3c8cf5',
					'600': '#206ae9',
					'700': '#1e59d7',
					'800': '#1f49ae',
					'900': '#1f4089',
					'950': '#172854',
				},
			},
			animation: {
				'background-shine': 'background-shine 2s linear infinite'
			},
			keyframes: {
				'background-shine': {
					'from': {
						'backgroundPosition': '0 0'
					},
					'to': {
						'backgroundPosition': '-200% 0'
					}
				}
			}
		},
	},
	plugins: [],
}
