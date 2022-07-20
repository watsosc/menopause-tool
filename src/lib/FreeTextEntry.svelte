<script lang="ts">
	const DEFAULT_TEXT = 'Enter free text here';

	export let text: string;
	export let name: string;
	export let context: string | null = null;
</script>

<div class="flex items-center">
	<input
		type="text"
		class="flex w-full mx-2 mb-2 border-0 border-title border-b-2 focus:border-0 focus:border-b-2 focus:ring-0"
		placeholder={DEFAULT_TEXT}
		bind:value={text}
		id={name}
	/>
	{#if !!context}
		<p class="text-xl w-full font-body ml-2 font-extralight">{context}</p>
	{/if}
</div>
