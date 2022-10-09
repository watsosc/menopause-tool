<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { menopause } from '../../store';
	import { getAnswer, getMultiSelectList, menopauseOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
	import CheckmarkList from '$lib/answers/CheckmarkList.svelte';
	import Container from '$lib/layouts/Container.svelte';

	const symptoms = $menopause.symptoms
		.map((symptom) => getAnswer(menopauseOptions.symptoms, symptom))
		.filter((symptom) => Boolean(symptom)) as string[];
	const sleep = getMultiSelectList(menopauseOptions.sleep, $menopause.sleep);
	const mood = getMultiSelectList(menopauseOptions.depression, $menopause.mood);
</script>

<Container>
	<Card>
		<SummaryTitleBar>Current Menopause Symptoms</SummaryTitleBar>
		<Content>
			<p class="font-body text-xl">
				The symptoms of menopause that you <b>currently</b> experience are:
			</p>
			{#if $menopause.symptoms.length > 0}
				<CheckmarkList list={symptoms} />
			{/if}
			{#if $menopause.other === 'yes'}
				<p class="font-body text-xl mt-4 font-bold">
					You have also indicated that you are suffering from:
				</p>
				<p class="font-body text-xl mt-2 ml-10">
					{$menopause.otherEntry}.
				</p>
			{/if}
			{#if sleep.length > 0}
				<p class="font-body text-xl mt-4">
					Regarding <b>sleep</b>, you have indicated:
				</p>
				<CheckmarkList list={sleep} />
			{/if}
			{#if mood.length > 0}
				<p class="font-body text-xl mt-4">
					Regarding <b>mood</b>, you have indicated:
				</p>
				<CheckmarkList list={mood} />
			{/if}
		</Content>
	</Card>
</Container>
