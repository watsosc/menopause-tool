<script lang="ts">
	import type { SelectOption } from '../selections/selectOption';

	export let name: string;
	export let id: number | string;
	export let option: SelectOption;
	export let selection: string;
	export let disabled: boolean = false;
	export let error: boolean = false;

	const handleChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		if (selection === target.value) {
			selection = '';
		} else {
			selection = target.value;
		}
	};

	const inputClasses = {
		default:
			'w-5 h-5 mx-2 mt-1 rounded border-primary border-2 text-title focus:ring-2 focus:ring-title disabled:border-grey disabled:text-white',
		error:
			'w-5 h-5 mx-2 mt-1 rounded border-error border-2 text-title focus:ring-2 focus:ring-title'
	};
</script>

<div class="flex flex-row items-start mt-1">
	<input
		class={inputClasses[error ? 'error' : 'default']}
		type="checkbox"
		id={`${name}-${id}`}
		{name}
		value={option.id}
		{disabled}
		checked={selection === option.id}
		on:change|preventDefault={handleChange}
	/>
	<label class="text-lg font-body ml-2 leading-snug" for={`${name}-${id}`}>
		{@html option.description}
	</label>
</div>
