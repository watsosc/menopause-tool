<script lang="ts">
	const DEFAULT_TEXT = 'Enter value';

	export let text: string;
	export let name: string;
	export let error: string | null = null;

	$: isError = error;

	const inputClasses = {
		default:
			'flex w-full max-w-[12rem] m-2 rounded-lg focus:ring-2 focus:ring-primary focus:border focus:border-title bg-grey border-none',
		error:
			'flex w-full max-w-[12rem] m-2 rounded-lg focus:ring-2 focus:ring-error border-error bg-grey'
	};

	const handleBlur = () => {
		error = null;
	};
</script>

<div class="flex flex-col">
	<input
		type="text"
		class={inputClasses[isError ? 'error' : 'default']}
		placeholder={DEFAULT_TEXT}
		bind:value={text}
		id={name}
		on:blur|preventDefault={handleBlur}
	/>
</div>
