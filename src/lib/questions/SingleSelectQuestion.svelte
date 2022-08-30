<script lang="ts">
	import Checkbox from './Checkbox.svelte';
	import QuestionLabel from './QuestionLabel.svelte';
	import type { SelectOption } from '../selections/selectOption';

	export let name: string;
	export let title: string;
	export let subtitle: string | null = null;
	export let options: SelectOption[];
	export let selection: string;
	export let disabled: boolean = false;
	export let error: string | null = null;

	$: errorMessage = error;
</script>

<div class="flex flex-col mb-4">
	<QuestionLabel {name} label={title} {subtitle} />
	{#each options as option, i (option.id)}
		<Checkbox {name} id={i} {option} bind:selection {disabled} bind:error />
	{/each}
	{#if Boolean(error)}
		<p class="flex-row w-full mt-2 mb-1 mx-4 text-error">
			{@html errorMessage}
		</p>
	{/if}
</div>
