<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { habits } from '../../store';
	import { getAnswer, habitsOptions } from '$lib/selections';
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
			<p class="font-body text-xl mt-4">{getAnswer(habitsOptions.exercise, $habits.exercise)}</p>
		</Content>
	</Card>
</div>
