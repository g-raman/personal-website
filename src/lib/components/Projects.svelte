<script lang="ts">
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

<section>
	<h2 class="text-xl font-semibold">Projects</h2>
	<ul class="mt-2">
		{#each projects as project (project.name)}
			<li>
				<h3 class="text-lg font-medium sm:text-xl">{project.name}</h3>
				<p>{project.description}</p>

				<div class="flex gap-4">
					{#if project.github}
						<a
							class="cursor-pointer underline hover:text-gray-500"
							href={project.github}
							target="_blank"
						>
							Github
						</a>
					{/if}

					{#if project.demo}
						<a
							class="cursor-pointer underline hover:text-gray-500"
							href="https://uenroll.ca"
							target="_blank"
						>
							Live Demo
						</a>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</section>
