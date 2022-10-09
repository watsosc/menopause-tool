<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { habits } from '../../store';
	import { getAnswer, habitsOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
	import Container from '$lib/layouts/Container.svelte';
</script>

<Container>
	<Card>
		<SummaryTitleBar>Habits</SummaryTitleBar>
		<Content>
			<div class="flex flex-row mt-4 items-center print:gap-4">
				<p class="font-body font-bold text-xl w-[15%] print:w-full">Cannabis</p>
				<p class="font-body text-xl">
					{getAnswer(habitsOptions.cannabis, $habits.cannabis)}
				</p>
			</div>
			<div class="flex flex-row items-center mt-4">
				<p class="font-body font-bold text-xl w-[15%] print:w-full">Smoking</p>
				<p class="font-body text-xl">
					{getAnswer(habitsOptions.smoking, $habits.smoking)}
				</p>
			</div>
			<div class="flex flex-row items-center mt-4">
				<p class="font-body font-bold text-xl w-[15%] print:w-full">Alcohol</p>
				<p class="font-body text-xl">
					{getAnswer(habitsOptions.alcohol, $habits.alcohol)}
				</p>
			</div>
			<div class="flex flex-row items-center mt-4">
				<p class="font-body font-bold text-xl w-[15%] print:w-full">Exercise</p>
				<p class="font-body text-xl">{getAnswer(habitsOptions.exercise, $habits.exercise)}</p>
			</div>
		</Content>
	</Card>
</Container>
