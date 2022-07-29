<script lang="ts">
	import Card from '$lib/Card.svelte';
	import Content from '$lib/Content.svelte';
	import TitleBar from '$lib/TitleBar.svelte';
	import { menopause } from '../../store';
	import { menopauseOptions } from '$lib/selections';
	import type { SelectOption } from '$lib/selections/selectOption';

	const getDescription = (response: string) => {
		const selection = menopauseOptions.symptoms.find(
			(option: SelectOption) => option.id == response
		);

		return selection?.description;
	};

	const getAnswer = (list: SelectOption[], response: string) => {
		const selection = list.find((option: SelectOption) => option.id == response);

		return selection?.answer;
	};
</script>

<div class="container mx-auto px-4">
	<Card>
		<TitleBar color="green">Current Menopause Symptoms</TitleBar>
		<Content>
			<p class="font-body text-xl">
				The symptoms of menopause that you <b>currently</b> experience are:
			</p>
			{#if $menopause.symptoms.length > 0}
				<ul>
					{#each $menopause.symptoms as symptom}
						<li class="font-body text-xl">{getDescription(symptom)}</li>
					{/each}
				</ul>
			{/if}
			{#if $menopause.other == 'yes'}
				<p class="font-body text-xl mt-2">
					You have also indicated that you are suffering from: {$menopause.otherEntry}.
				</p>
			{/if}
			<p class="font-body text-xl mt-4">
				Regarding <b>sleep</b>, you have indicated:
			</p>
			{#if !!$menopause.sleep}
				<ul>
					<li class="font-body text-xl">{getAnswer(menopauseOptions.sleep, $menopause.sleep)}</li>
				</ul>
			{/if}
			<p class="font-body text-xl mt-4">
				Regarding <b>mood</b>, you have indicated:
			</p>
			{#if !!$menopause.mood}
				<ul>
					<li class="font-body text-xl">
						{getAnswer(menopauseOptions.depression, $menopause.mood)}
					</li>
				</ul>
			{/if}
		</Content>
	</Card>
</div>
