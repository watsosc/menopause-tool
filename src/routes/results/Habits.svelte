<script lang="ts">
	import Habits from '$lib/titles/icons/habits.svg';
	import { Card, Content } from '$lib/layouts';
	import { habits } from '../../store';
	import { getAnswer, habitsOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar Icon={Habits}>Habits</SummaryTitleBar>
		<Content>
			<div class="flex flex-row items-center">
				<p class="font-body font-bold text-xl w-[150px]">Cannabis</p>
				<p class="font-body text-xl">
					{getAnswer(habitsOptions.cannabis, $habits.cannabis)}
				</p>
			</div>
			<div class="flex flex-row items-center mt-4">
				<p class="font-body font-bold text-xl w-[150px]">Smoking</p>
				<p class="font-body text-xl">
					{getAnswer(habitsOptions.smoking, $habits.smoking)}
				</p>
			</div>
			<div class="flex flex-row items-center mt-4">
				<p class="font-body font-bold text-xl w-[150px]">Alcohol</p>
				<p class="font-body text-xl">
					{getAnswer(habitsOptions.alcohol, $habits.alcohol)}
				</p>
			</div>
			<div class="flex flex-row items-center mt-4">
				<p class="font-body font-bold text-xl w-[150px]">Exercise</p>
				<p class="font-body text-xl">{getAnswer(habitsOptions.exercise, $habits.exercise)}</p>
			</div>
		</Content>
	</Card>
</div>
