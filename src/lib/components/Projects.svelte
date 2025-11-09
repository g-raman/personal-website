<script lang="ts">
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	interface Project {
		name: string;
		description: string;
		github?: string;
		demo?: string;
	}

	const projects: Project[] = [
		{
			name: 'uEnroll',
			description: '1200+ monthly users. A modern schedule builder for uOttawa students',
			github: 'https://github.com/g-raman/uenroll',
			demo: 'https://uenroll.ca'
		}
	];
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section>
	<h2 class="text-3xl font-semibold">Projects</h2>
	<ul class="mt-2">
		{#each projects as project (project.name)}
			<li>
				<h3 class="text-lg font-medium sm:text-xl">{project.name}</h3>
				<p>{project.description}</p>

				<div class="flex gap-4">
					{#if project.github}
						<a
							class="flex cursor-pointer items-center gap-1 underline hover:text-gray-500"
							href={project.github}
							rel="external"
							target="_blank"
						>
							Github
							<FontAwesomeIcon class="!size-3" icon={faArrowUpRightFromSquare} />
						</a>
					{/if}

					{#if project.demo}
						<a
							class="flex cursor-pointer items-center gap-1 underline hover:text-gray-500"
							href="https://uenroll.ca"
							rel="external"
							target="_blank"
						>
							Live Demo
							<FontAwesomeIcon class="!size-3" icon={faArrowUpRightFromSquare} />
						</a>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</section>
