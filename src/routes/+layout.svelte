<script lang="ts">
	import '@fontsource-variable/geist';
	import '@fontsource-variable/geist-mono';
	import '../app.css';
	import faviconLight from '$lib/assets/favicon-light.svg';
	import faviconDark from '$lib/assets/favicon-dark.svg';

	import { MetaTags } from 'svelte-meta-tags';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	injectAnalytics();
	injectSpeedInsights();
</script>

<MetaTags
	title="Personal Website"
	description="Raman Gupta's personal website"
	titleTemplate="%s | Raman Gupta"
	canonical="https://raman.codes/"
/>

<svelte:head>
	<link rel="icon" type="image/svg" href={faviconLight} media="(prefers-color-scheme: light)" />
	<link rel="icon" type="image/svg" href={faviconDark} media="(prefers-color-scheme: dark)" />
</svelte:head>

<div class="bg-dot-grid flex min-h-dvh flex-col bg-[#fffcf0] px-8 md:px-24 lg:px-48 xl:px-84">
	<div class="flex flex-1 flex-col border-x border-stone-500 bg-[#fffcf0] bg-cover bg-center p-8">
		<Nav />

		<main>
			{@render children()}
		</main>

		<Footer />
	</div>
</div>
