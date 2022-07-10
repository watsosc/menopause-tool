<script lang="ts">
	import TextInput from './TextInput.svelte';

	const labelTextStyle = 'text-xl font-body font-bold mx-2';

	export let name: string;
	export let title: string;
	export let text: string;
	export let context: string;
</script>

<div class="flex flex-col mb-2">
	<label class={labelTextStyle} for={name}>{title}</label>
	<div class="flex items-center">
		<TextInput {name} bind:text />
		<p class="text-xl font-body ml-2 font-extralight">{context}</p>
	</div>
</div>
