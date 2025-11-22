<script lang="ts">
	import { faCheck, faClone } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	let copyButton: HTMLButtonElement;
	let copied = $state(false);

	function handleClick() {
		const preTagSibling = copyButton.nextElementSibling as HTMLPreElement;

		navigator.clipboard.writeText(preTagSibling.innerText);

		copied = true;

		setTimeout(() => (copied = false), 1000);
	}
</script>

<button
	bind:this={copyButton}
	onclick={handleClick}
	class="absolute top-2 right-2 flex items-center rounded-xs border border-stone-600 p-1.5 text-stone-300 transition-all duration-200 hover:border-stone-600 hover:text-white"
	title={copied ? 'Copied!' : 'Copy code'}
>
	{#if copied}
		<FontAwesomeIcon icon={faCheck} class="!size-3" />
	{:else}
		<FontAwesomeIcon icon={faClone} class="!size-3" />
	{/if}
</button>
