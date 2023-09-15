/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true
			}
		}
	},
	plugins: []
	// plugins: [require('daisyui')]
};