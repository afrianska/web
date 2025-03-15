/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			'inter': ['Inter' ],
			}
		},
		scrollbar: {
        'none': 'none',
        'x-none': 'none',
        'y-none': 'none',
      },
	},
	plugins: [],
}
