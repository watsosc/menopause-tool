<script lang="ts">
	import QuestionLabel from './QuestionLabel.svelte';
	import TextInput from './TextInput.svelte';

	export let name: string;
	export let title: string;
	export let text: string;
	export let context: string;
</script>

<div class="flex flex-col mb-2">
	<QuestionLabel {name} label={title} />
	<div class="flex items-center">
		<TextInput {name} bind:text />
		<p class="text-xl font-body ml-2 font-extralight">{context}</p>
	</div>
</div>
