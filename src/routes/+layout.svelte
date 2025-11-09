<script lang="ts">
	import '@fontsource-variable/geist';
	import '@fontsource-variable/geist-mono';
	import '../app.css';
	import faviconLight from '$lib/assets/favicon-light.svg';
	import faviconDark from '$lib/assets/favicon-dark.svg';

	import { MetaTags } from 'svelte-meta-tags';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
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

<div class="bg-dot-grid h-dvh px-8 py-8 md:px-24 md:py-16 lg:px-48 xl:px-64">
	<div
		class="flex h-full flex-col rounded-md border border-slate-500 bg-white bg-cover bg-center p-8"
	>
		<Nav />

		<main>
			{@render children()}
		</main>

		<Footer />
	</div>
</div>
