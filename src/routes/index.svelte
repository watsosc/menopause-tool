<script lang="ts">
	import { basics } from '../store';

	import TextEntryQuestion from '$lib/TextEntryQuestion.svelte';
</script>

<div class="container mx-auto px-4">
	<h1 class="text-3xl font-extrabold font-title text-primary uppercase mx-2 my-4">
		Menopause History Form
	</h1>
	<form class="flex">
		<TextEntryQuestion name="basic-age" title="How old are you?" bind:text={$basics.age} />
	</form>
</div>

<a href="/results" class="underline text-blue-600">See results</a>
