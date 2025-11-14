<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section>
	<ul class="flex flex-col gap-4">
		{#each data.posts as post (post.slug)}
			<li class="flex items-baseline gap-4">
				<p class="text-base text-gray-500">{post.metadata.publishedAt}</p>
				<a href={post.slug} class="text-lg underline">{post.metadata.title}</a>
			</li>
		{/each}
	</ul>
</section>
