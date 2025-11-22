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
	<hgroup>
		<h1 class="mb-2 text-4xl font-bold">{data.meta.title}</h1>
		<p class="text-stone-500">{formatDateFriendly(data.meta.publishedAt)}</p>
	</hgroup>

	<hr class="my-4 border-stone-400/40" />

	<div class="prose prose-sm md:prose-base">
		<Content />
	</div>
</article>
