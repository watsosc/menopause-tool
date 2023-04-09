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
			<div class="flex flex-row mt-4 items-center">
				<p class="font-body font-bold text-xl w-[15%] min-w-[7em] print:w-[8em]">Cannabis</p>
				<p class="font-body text-xl print:w-full">
					{@html getAnswer(habitsOptions.cannabis, $habits.cannabis)}
				</p>
			</div>
			<div class="flex flex-row items-center mt-4">
				<p class="font-body font-bold text-xl w-[15%] min-w-[7em] print:w-[8em]">Smoking</p>
				<p class="font-body text-xl print:w-full">
					{@html getAnswer(habitsOptions.smoking, $habits.smoking)}
				</p>
			</div>
			<div class="flex flex-row items-center mt-4">
				<p class="font-body font-bold text-xl w-[15%] min-w-[7em] print:w-[8em]">Alcohol</p>
				<p class="font-body text-xl print:w-full">
					{@html getAnswer(habitsOptions.alcohol, $habits.alcohol)}
				</p>
			</div>
			<div class="flex flex-row items-center mt-4">
				<p class="font-body font-bold text-xl w-[15%] min-w-[7em] print:w-[8em]">Exercise</p>
				<p class="font-body text-xl print:w-full">
					{@html getAnswer(habitsOptions.exercise, $habits.exercise)}
				</p>
			</div>
		</Content>
	</Card>
</Container>
