<script lang="ts">
	import QuestionLabel from './QuestionLabel.svelte';
	import type { SelectOption } from '../selections/selectOption';

	export let name: string;
	export let title: string;
	export let subtitle: string | null = null;
	export let options: SelectOption[];
	export let selection: string[];
	export let error: string | null = null;
	export let errorOption: string = '';

	$: selected = selection;

	$: errorMessage = error;
	$: isError = Boolean(error);
	$: errorField = errorOption;

	const inputClasses = {
		default:
			'w-5 h-5 mx-2 mt-1 rounded border-primary border-2 text-title focus:ring-2 focus:ring-title disabled:border-grey disabled:text-white',
		error:
			'w-5 h-5 mx-2 mt-1 rounded border-error border-2 text-title focus:ring-2 focus:ring-title'
	};

	const handleBlur = () => {
		error = null;
	};
</script>

<div class="flex flex-col mb-4">
	<QuestionLabel {name} label={title} {subtitle} />
	{#each options as option, i (option.id)}
		<div class="flex flex-row items-start mt-1">
			<input
				class={inputClasses['default']}
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
							class={inputClasses[isError && errorField === option.id ? 'error' : 'default']}
							type="checkbox"
							id={`${name}-${i}-${j}`}
							{name}
							value={suboption.id}
							bind:group={selection}
							on:blur|preventDefault={handleBlur}
						/>
						<label class="text-lg font-body ml-2 leading-snug" for={`${name}-${i}-${j}`}>
							{@html suboption.description}
						</label>
					</div>
				</div>
			{/each}
		{/if}
	{/each}
	{#if isError}
		<p class="flex-row w-full mt-2 mb-1 mx-4 text-error">{@html errorMessage}</p>
	{/if}
</div>
