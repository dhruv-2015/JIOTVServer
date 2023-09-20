import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	server: {
		proxy: {
			'/playlist': 'http://localhost:3500',
			'/getm3u8': 'http://localhost:3500',
			'/getkey': 'http://localhost:3500',
			'/getts': 'http://localhost:3500',
			'/catchup/getm3u8': 'http://localhost:3500',
			'/catchup/getkey': 'http://localhost:3500',
			'/catchup/getts': 'http://localhost:3500',
			'/login': 'http://localhost:3500',
			'/ip': 'http://localhost:3500'
		}
	},
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});