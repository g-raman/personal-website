<script>
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	const year = new Date().getUTCFullYear();
</script>

<footer class="mt-auto flex items-center justify-between">
	<p>&copy;&nbsp;{year} Raman Gupta</p>

	<ul class="flex gap-4 text-xl">
		<li>
			<a class="hover:text-current/70" href="https://github.com/g-raman" target="_blank">
				<FontAwesomeIcon icon={faGithub} />
			</a>
		</li>

		<li>
			<a class="hover:text-[#0a66c2]" href="https://linkedin.com/in/gupta-raman" target="_blank">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
		</li>
	</ul>
</footer>
