<script lang="ts">
	import QuestionLabel from './QuestionLabel.svelte';
	import type { SelectOption } from './selections/selectOption';

	export let name: string;
	export let title: string;
	export let options: SelectOption[];
	export let selection: string;

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		selection = target.value;
	}
</script>

<div class="flex flex-col mb-2">
	<QuestionLabel {name} label={title} />
	{#each options as option, i (option.id)}
		<div class="flex flex-row items-start mt-1">
			<input
				class="w-5 h-5 mx-2 mt-1 rounded border-primary border-2 text-title focus:ring-2 focus:ring-title"
				type="checkbox"
				id={`${name}-${i}`}
				{name}
				value={option.id}
				checked={selection === option.id}
				on:change|preventDefault={handleChange}
			/>
			<label class="text-lg font-body ml-2 leading-snug" for={`${name}-${i}`}
				>{option.description}</label
			>
		</div>
	{/each}
</div>
