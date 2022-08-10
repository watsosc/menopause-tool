<script lang="ts">
	import QuestionLabel from './QuestionLabel.svelte';
	import FreeTextEntry from './FreeTextEntry.svelte';

	export let name: string;
	export let title: string;
	export let text: string;
	export let context: string | null = null;
	export let error: string = '';
</script>

<div class="flex flex-col mb-2">
	<QuestionLabel {name} label={title} />
	<FreeTextEntry {name} bind:text {context} {error} />
</div>
