<script lang="ts">
	import { formatDate } from '$lib';

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
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.publishedAt)}</p>
	</hgroup>

	<div class="prose">
		<Content />
	</div>
</article>
