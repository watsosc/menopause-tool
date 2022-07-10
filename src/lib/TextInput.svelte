<script lang="ts">
	const DEFAULT_TEXT = 'Enter value';

	export let text: string;
	export let name: string;
</script>

<input
	type="text"
	class="flex w-full max-w-[12rem] m-2 rounded-lg focus:ring-2 focus:ring-text-title focus:border focus:border-primary bg-grey border-none"
	placeholder={DEFAULT_TEXT}
	bind:value={text}
	id={name}
/>
