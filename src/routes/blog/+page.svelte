<script lang="ts">
	import { formatDateNumeric } from '$lib';
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section>
	<h1 class="mb-4 text-4xl font-bold">Posts</h1>
	<ul class="flex flex-col gap-4">
		{#each data.posts as post (post.slug)}
			<li class="flex items-baseline gap-2">
				<p class="w-24 text-base text-stone-500">
					{formatDateNumeric(post.metadata.publishedAt)}
				</p>
				<a href={resolve(`/blog/${post.slug}`)} class="text-lg underline">{post.metadata.title}</a>
			</li>
		{/each}
	</ul>
</section>
