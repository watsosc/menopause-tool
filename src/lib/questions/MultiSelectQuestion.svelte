<script lang="ts">
	import QuestionLabel from './QuestionLabel.svelte';
	import type { SelectOption } from '../selections/selectOption';

	export let name: string;
	export let title: string;
	export let subtitle: string | null = null;
	export let options: SelectOption[];
	export let selection: string[];

	$: selected = selection;
</script>

<div class="flex flex-col mb-4">
	<QuestionLabel {name} label={title} {subtitle} />
	{#each options as option, i (option.id)}
		<div class="flex flex-row items-start mt-1">
			<input
				class="w-5 h-5 mx-2 mt-1 rounded border-primary border-2 text-title focus:ring-2 focus:ring-title"
				type="checkbox"
				id={`${name}-${i}`}
				{name}
				value={option.id}
				bind:group={selection}
			/>
			<label class="text-lg font-body ml-2 leading-snug" for={`${name}-${i}`}>
				{@html option.description}
			</label>
		</div>
		{#if option.suboptions && selected.includes(option.id)}
			{#each option.suboptions as suboption, j (suboption.id)}
				<div class="ml-2">
					<div class="flex flex-row items-start mt-1">
						<input
							class="w-5 h-5 mx-2 mt-1 rounded border-primary border-2 text-title focus:ring-2 focus:ring-title"
							type="checkbox"
							id={`${name}-${i}-${j}`}
							{name}
							value={suboption.id}
							bind:group={selection}
						/>
						<label class="text-lg font-body ml-2 leading-snug" for={`${name}-${i}-${j}`}>
							{@html suboption.description}
						</label>
					</div>
				</div>
			{/each}
		{/if}
	{/each}
</div>
