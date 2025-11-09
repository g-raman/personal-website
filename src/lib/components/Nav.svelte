<script>
	import { resolve } from '$app/paths';
</script>

<nav class="flex w-full items-baseline justify-between pb-16">
	<a href={resolve('/')} class="text-2xl font-semibold hover:text-current/70">Raman Gupta</a>

	<ul class="flex gap-4 text-xl font-light">
		<li>
			<a class="hover:underline" href={resolve('/about')}>About</a>
		</li>

		<li>
			<a class="hover:underline" href={resolve('/blog')}>Blog</a>
		</li>
	</ul>
</nav>
