<script lang="ts">
	import QuestionLabel from './QuestionLabel.svelte';
	import TextInput from './TextInput.svelte';

	export let name: string;
	export let title: string;
	export let text: string;
	export let context: string;
	export let error: string = '';

	$: errorMessage = error;
	$: isError = Boolean(error);
</script>

<div class="flex flex-col mb-2">
	<QuestionLabel {name} label={title} />
	<div class="flex items-center">
		<TextInput {name} bind:text error={isError} />
		<p class="text-xl font-body ml-2 font-extralight">{context}</p>
	</div>
	{#if isError}
		<p class="flex w-full max-w-[12rem] -mt-1 mb-1 ml-4 text-error">
			{@html errorMessage}
		</p>
	{/if}
</div>
