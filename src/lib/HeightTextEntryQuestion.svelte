<script lang="ts">
	import { basics } from '../store';
	import TextInput from './TextInput.svelte';

	const labelTextStyle = 'text-xl font-body font-bold mx-2';
	const name = 'basics-height';
</script>

<div class="flex flex-col mb-2">
	<label class={labelTextStyle} for={`${name}-feet`}>How tall are you?</label>
	<div class="flex flex-col items-start md:flex-row md:items-center">
		<div class="flex items-center">
			<TextInput name={`${name}-feet`} bind:text={$basics.heightFeet} />
			<p class="text-xl font-body mx-2 font-extralight">feet</p>
		</div>
		<div class="flex items-center">
			<TextInput name={`${name}-inch`} bind:text={$basics.heightInch} />
			<p class="text-xl font-body ml-2 font-extralight">inches</p>
		</div>
	</div>
</div>
