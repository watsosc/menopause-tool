<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { genetics } from '../../store';
	import { getAnswer, geneticsOptions, getMultiSelectAnswer } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';

	const selectedFamilyHistory = getMultiSelectAnswer(
		geneticsOptions.family,
		$genetics.family,
		(primary, suboptions) => `${primary} and ${suboptions}`
	);
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar>Family and Genetic History</SummaryTitleBar>
		<Content>
			{#if $genetics.genes.length > 0}
				<p class="font-body text-xl">You have been told that you carry:</p>
				<ul class="list-disc ml-10">
					{#each $genetics.genes as gene}
						<li class="font-body text-xl">{@html getAnswer(geneticsOptions.genes, gene)}</li>
					{/each}
				</ul>
			{:else}
				<p class="font-body text-xl">
					As far as you know, you do not carry any genes that increase your risk of developing
					specific health conditions.
				</p>
			{/if}

			{#if $genetics.family.length > 0}
				<p class="font-body text-xl mt-4">
					You indicated that you have a <b>family history</b> of the following health condition(s):
				</p>
				<ul class="list-disc ml-10">
					{#each selectedFamilyHistory as family}
						<li class="font-body text-xl">{@html family}</li>
					{/each}
				</ul>
			{:else}
				<p class="font-body text-xl mt-4">
					You indicated that you have no family history of breast cancer, ovarian cancer, blood
					clots, stroke or heart attack.
				</p>
			{/if}
		</Content>
	</Card>
</div>
