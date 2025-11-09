<script>
	import { faGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<section class="mb-8 flex flex-col items-center gap-8 md:flex-row">
	<div class="flex flex-col items-center gap-4 md:items-start">
		<p class="text-center text-2xl font-bold sm:text-4xl md:text-left">
			<span>Hey, I&apos;m Raman.</span>
			<br />
			<span class="text-gray-500">I&apos;m a Software Developer.</span>
		</p>

		<div class="flex gap-4 text-lg">
			<a
				class="flex items-center gap-1 hover:text-current/70"
				href="https://github.com/g-raman"
				rel="external"
				target="_blank"
			>
				<FontAwesomeIcon class="!size-5" icon={faGithub} />
				GitHub
			</a>

			<a
				class="flex items-center gap-1 text-[#0b66c2] hover:text-[#0b66c2]/70"
				href="https://linkedin.com/in/gupta-raman"
				rel="external"
				target="_blank"
			>
				<FontAwesomeIcon class="!size-5" icon={faSquareLinkedin} />
				LinkedIn
			</a>
		</div>
	</div>
</section>
