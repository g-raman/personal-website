<script lang="ts">
	import { formatDateFriendly } from '$lib';

	let { data } = $props();
	const Content = data.content;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup class="mb-4">
		<h1 class="mb-2 text-4xl font-bold">{data.meta.title}</h1>
		<p class="text-stone-500">{formatDateFriendly(data.meta.publishedAt)}</p>
	</hgroup>

	<div class="prose prose-sm md:prose-base">
		<hr />
		<Content />
	</div>
</article>
