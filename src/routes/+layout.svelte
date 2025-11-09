<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-dvh flex-col px-96 py-16">
	<Nav />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>
