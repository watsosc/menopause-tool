<script lang="ts">
	import Genetics from '$lib/titles/icons/genetics.svg';
	import { Card, Content } from '$lib/layouts';
	import { genetics } from '../../store';
	import { geneticsOptions, getMultiSelectAnswer, getMultiSelectList } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
	import CheckmarkList from '$lib/answers/CheckmarkList.svelte';
	import Container from '$lib/layouts/Container.svelte';

	const selectedFamilyHistory = getMultiSelectAnswer(
		geneticsOptions.family,
		$genetics.family,
		(primary, suboptions) => `${primary} and ${suboptions}`
	);
	const hasGene = $genetics.genes.length > 0 && !$genetics.genes.includes('none');

	const genes = getMultiSelectList(geneticsOptions.genes, $genetics.genes);
</script>

<Container>
	<Card>
		<SummaryTitleBar>Family and Genetic History</SummaryTitleBar>
		<Content>
			{#if hasGene}
				<p class="font-body text-xl">You have been told that you carry:</p>
				<CheckmarkList list={genes} />
			{:else}
				<p class="font-body text-xl">
					As far as you know, you do not carry any genes that increase your risk of developing
					specific health conditions.
				</p>
			{/if}

			{#if hasGene}
				<p class="font-body text-xl mt-4">
					You indicated that you have a <b>family history</b> of the following health condition(s):
				</p>
				<CheckmarkList list={selectedFamilyHistory} />
			{:else}
				<p class="font-body text-xl mt-4">
					You indicated that you have no family history of breast cancer, ovarian cancer, blood
					clots, stroke or heart attack.
				</p>
			{/if}
		</Content>
	</Card>
</Container>
