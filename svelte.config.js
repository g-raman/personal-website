import { escapeSvelte, mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';

async function highlighter(code, lang) {
	const highlighter = await createHighlighter({
		langs: [lang],
		themes: ['kanagawa-wave']
	});

	const html = escapeSvelte(highlighter.codeToHtml(code, { theme: 'kanagawa-wave', lang }));

	return `{@html \`${html}\` }`;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: { highlighter }
		})
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.md']
};

export default config;
