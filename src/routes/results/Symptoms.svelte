<script lang="ts">
	import Card from '$lib/layouts/Card.svelte';
	import Content from '$lib/layouts/Content.svelte';
	import { menopause } from '../../store';
	import { getAnswer, getDescription, menopauseOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar>Current Menopause Symptoms</SummaryTitleBar>
		<Content>
			<p class="font-body text-xl">
				The symptoms of menopause that you <b>currently</b> experience are:
			</p>
			{#if $menopause.symptoms.length > 0}
				<ul class="list-disc ml-10">
					{#each $menopause.symptoms as symptom}
						<li class="font-body text-xl">{getDescription(menopauseOptions.symptoms, symptom)}</li>
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
				<ul class="list-disc ml-10">
					<li class="font-body text-xl">{getAnswer(menopauseOptions.sleep, $menopause.sleep)}</li>
				</ul>
			{/if}
			<p class="font-body text-xl mt-4">
				Regarding <b>mood</b>, you have indicated:
			</p>
			{#if !!$menopause.mood}
				<ul class="list-disc ml-10">
					<li class="font-body text-xl">
						{getAnswer(menopauseOptions.depression, $menopause.mood)}
					</li>
				</ul>
			{/if}
		</Content>
	</Card>
</div>
