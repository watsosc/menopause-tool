<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { habits } from '../../store';
	import { getAnswer, getMultiSelectList, habitsOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar>Habits</SummaryTitleBar>
		<Content>
			<p class="font-body text-xl">
				{getAnswer(habitsOptions.cannabis, $habits.cannabis)}
			</p>
			<p class="font-body text-xl mt-4">
				{getAnswer(habitsOptions.smoking, $habits.smoking)}
			</p>
			<p class="font-body text-xl mt-4">
				{getAnswer(habitsOptions.alcohol, $habits.alcohol)}
			</p>

			{#if $habits.exercise.length > 0}
				<p class="font-body text-xl mt-4">Regarding exercise, you indicated you:</p>
				<ul class="list-disc ml-10">
					{#each $habits.exercise as exercise}
						<li class="font-body text-xl">{getAnswer(habitsOptions.exercise, exercise)}</li>
					{/each}
				</ul>
			{:else}
				<p class="font-body text-xl mt-4">
					Regarding exercise, you indicated that you do not exercise.
				</p>
			{/if}
		</Content>
	</Card>
</div>
