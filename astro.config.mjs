import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
	site: 'https://raman.codes',
	output: 'static',
	adapter: cloudflare(),
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()]
	},
	markdown: {
		shikiConfig: {
			theme: 'kanagawa-wave'
		}
	},
	server: {
		port: 3000
	}
});
