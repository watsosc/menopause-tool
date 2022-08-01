<script lang="ts">
	import type { SelectOption } from '../selections/selectOption';

	export let name: string;
	export let id: number | string;
	export let option: SelectOption;
	export let selection: string;
	export let disabled: boolean = false;
</script>

<div class="flex flex-row items-start mt-1">
	<input
		class="w-5 h-5 mx-2 mt-1 rounded border-primary border-2 text-title focus:ring-2 focus:ring-title disabled:border-grey disabled:text-white"
		type="checkbox"
		id={`${name}-${id}`}
		{name}
		value={option.id}
		bind:group={selection}
		{disabled}
	/>
	<label class="text-lg font-body ml-2 leading-snug" for={`${name}-${id}`}>
		{@html option.description}
	</label>
</div>
