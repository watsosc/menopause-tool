<script lang="ts">
	import { basics } from '../store';

	import TextEntryQuestion from '$lib/TextEntryQuestion.svelte';
	import HeightTextEntryQuestion from '$lib/HeightTextEntryQuestion.svelte';
	import TitleBar from '$lib/TitleBar.svelte';
</script>

<div class="container mx-auto px-4">
	<h1 class="text-3xl font-extrabold font-title text-title uppercase mx-2 my-4">
		Menopause History Form
	</h1>
	<form>
		<div class="flex flex-col md:flex-row gap-4">
			<div class="flex flex-col md:w-1/2">
				<TextEntryQuestion
					name="basic-age"
					title="How old are you?"
					context="years old"
					bind:text={$basics.age}
				/>
				<HeightTextEntryQuestion />
				<TextEntryQuestion
					name="basic-weight"
					title="How much do you weigh?"
					context="pounds"
					bind:text={$basics.weight}
				/>
			</div>
			<div class="flex flex-col md:w-1/2">
				<TextEntryQuestion
					name="basic-age"
					title="How old are you?"
					context="years old"
					bind:text={$basics.age}
				/>
				<HeightTextEntryQuestion />
				<TextEntryQuestion
					name="basic-weight"
					title="How much do you weigh?"
					context="pounds"
					bind:text={$basics.weight}
				/>
			</div>
		</div>
	</form>
</div>

<a href="/results" class="underline text-blue-600">See results</a>
