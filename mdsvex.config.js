import { defineMDSveXConfig, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

async function highlighter(code, lang) {
	const highlighter = await createHighlighter({
		langs: [lang],
		themes: ['kanagawa-wave']
	});

	const html = escapeSvelte(
		highlighter.codeToHtml(code, {
			theme: 'kanagawa-wave',
			lang
		})
	);

	return `{@html \`${html}\` }`;
}

const mdsvexConfig = defineMDSveXConfig({
	extensions: ['.md'],
	highlight: { highlighter }
});

export default mdsvexConfig;
