<script lang="ts">
	import { formatDateFriendly } from '$lib';
	import CopyCodeButton from '$lib/components/CopyCodeButton.svelte';
	import { mount, onMount } from 'svelte';

	let { data } = $props();
	const Content = data.content;

	onMount(() => {
		const preTags: HTMLCollectionOf<HTMLPreElement> = document.getElementsByTagName('pre');

		for (const preTag of preTags) {
			const classList = Array.from(preTag.classList);

			const isCodeBlock = classList.includes('shiki');

			if (!isCodeBlock) return;
			if (!preTag.parentNode) return;

			const newCodeBlockWrapper = document.createElement('div');
			newCodeBlockWrapper.className = 'relative';

			mount(CopyCodeButton, { target: newCodeBlockWrapper });

			preTag.parentNode.replaceChild(newCodeBlockWrapper, preTag);
			newCodeBlockWrapper.appendChild(preTag);
		}
	});
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mb-8">
	<hgroup>
		<h1 class="mb-2 text-4xl font-bold">{data.meta.title}</h1>
		<p class="text-stone-500">{formatDateFriendly(data.meta.publishedAt)}</p>
	</hgroup>

	<hr class="my-4 border-stone-400/40" />

	<div class="prose prose-sm md:prose-base">
		<Content />
	</div>
</article>
