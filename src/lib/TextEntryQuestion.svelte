<script lang="ts">
	const DEFAULT_TEXT = 'Enter value';
	const labelTextStyle = 'text-xl font-body font-bold mx-2';

	export let name: string;
	export let title: string;
	export let text: string;
</script>

<div class="flex flex-col">
	<label class={labelTextStyle} for={name}>{title}</label>
	<div class="flex items-center">
		<input
			type="text"
			class="m-2 rounded-lg focus:ring-2 focus:ring-text-title focus:border-2 focus:border-primary bg-grey border-none"
			placeholder={DEFAULT_TEXT}
			bind:value={text}
			id={name}
		/>
		<p class="text-xl font-body ml-6 font-extralight">years old</p>
	</div>
</div>
