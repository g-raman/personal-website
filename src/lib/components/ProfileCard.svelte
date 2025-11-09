<script>
	import { faGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<section class="mb-8 flex justify-start gap-8">
	<div class="flex flex-col items-start gap-4">
		<p class="text-left text-xl font-bold text-nowrap min-[400px]:text-2xl sm:text-4xl">
			<span>Hey, I&apos;m Raman.</span>
			<br />
			<span class="text-gray-500">I&apos;m a Software Developer.</span>
		</p>

		<div class="flex gap-4 text-sm sm:text-lg">
			<a
				class="flex items-center gap-1 hover:text-current/70"
				href="https://github.com/g-raman"
				rel="external"
				target="_blank"
			>
				<FontAwesomeIcon class="!size-4 md:!size-5" icon={faGithub} />
				GitHub
			</a>

			<a
				class="flex items-center gap-1 text-[#0b66c2] hover:text-[#0b66c2]/70"
				href="https://linkedin.com/in/gupta-raman"
				rel="external"
				target="_blank"
			>
				<FontAwesomeIcon class="!size-4 md:!size-5" icon={faSquareLinkedin} />
				LinkedIn
			</a>
		</div>
	</div>
</section>
