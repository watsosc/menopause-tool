<script lang="ts">
	import { basics } from '../../store';
	import TextInput from './TextInput.svelte';

	const labelTextStyle = 'text-xl font-body font-bold mx-2';
	const name = 'basics-height';

	export let feetError: string | null = null;
	export let inchError: string | null = null;

	$: fErrorMessage = feetError;
	$: iErrorMessage = inchError;
	$: isFeetError = Boolean(feetError);
	$: isInchError = Boolean(inchError);
</script>

<div class="flex flex-col mb-2">
	<label class={labelTextStyle} for={`${name}-feet`}>How tall are you?</label>
	<div class="flex flex-col items-start md:flex-row md:items-center">
		<div class="flex-col">
			<div class="flex items-center">
				<TextInput name={`${name}-feet`} bind:text={$basics.heightFeet} bind:error={feetError} />
				<p class="text-xl font-body mx-2 font-extralight">feet</p>
			</div>
			{#if isFeetError}
				<p class="flex w-full max-w-[12rem] -mt-1 mb-1 ml-4 text-error">
					{@html fErrorMessage}
				</p>
			{/if}
		</div>
		<div class="flex-col">
			<div class="flex items-center">
				<TextInput name={`${name}-inch`} bind:text={$basics.heightInch} bind:error={inchError} />
				<p class="text-xl font-body ml-2 font-extralight">inches</p>
			</div>
			{#if isInchError}
				<p class="flex w-full max-w-[12rem] -mt-1 mb-1 ml-4 text-error">
					{@html iErrorMessage}
				</p>
			{/if}
		</div>
	</div>
</div>
