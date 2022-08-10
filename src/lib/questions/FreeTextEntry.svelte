<script lang="ts">
	const DEFAULT_TEXT = 'Enter free text here';

	export let text: string;
	export let name: string;
	export let context: string | null = null;
	export let disabled: boolean = false;
	export let error: string = '';

	$: disable = disabled;

	$: errorMessage = error;
	$: isError = Boolean(error);

	const inputClasses = {
		default:
			'flex w-full mx-2 mb-2 border-0 border-title border-b-2 focus:border-0 focus:border-b-2 focus:ring-0 disabled:border-0 disabled:border-b-2 disabled:border-grey disabled:text-grey disabled:placeholder:text-grey',
		error:
			'flex w-full mx-2 mb-2 border-0 border-error border-b-2 focus:border-0 focus:border-b-2 focus:ring-0'
	};
</script>

<div class="flex-col">
	<div class="flex items-center">
		<input
			type="text"
			class={inputClasses[isError ? 'error' : 'default']}
			placeholder={DEFAULT_TEXT}
			bind:value={text}
			disabled={disable}
			id={name}
		/>
		{#if !!context}
			<p class="text-xl w-full font-body ml-2 font-extralight">{context}</p>
		{/if}
	</div>
	{#if isError}
		<div class="flex flex-row">
			<p class="flex w-full mt-1 mb-1 ml-4 text-error">
				{@html errorMessage}
			</p>
		</div>
	{/if}
</div>
