<script lang="ts">
	import Surgeries from '$lib/titles/icons/surgeries.svg';
	import { Card, Content } from '$lib/layouts';
	import { surgeries } from '../../store';
	import { getMultiSelectAnswer, surgeryOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
	import { CheckmarkList } from '$lib/answers';

	const selectedSurgeries = getMultiSelectAnswer(
		surgeryOptions.surgeries,
		$surgeries.received,
		(primary, suboptions) => `${primary} (${suboptions})`
	);
	const ovariesText = () => {
		if ($surgeries.ovariesRemoved === 'yes') {
			return `You had your ovaries removed when you were ${$surgeries.ovariesAge} years old`;
		}

		return 'You have never had surgery to remove your ovaries';
	};
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar Icon={Surgeries}>Previous Surgeries</SummaryTitleBar>
		<Content>
			{#if $surgeries.received.length > 0}
				<p class="font-body text-xl font-bold">
					From our predetermined list of procedures, you indicated you have had the following
					surgeries:
				</p>
				<CheckmarkList list={selectedSurgeries} />
			{:else}
				<p class="font-body text-xl">
					You <b>have not</b> had any surgery to remove your uterus, and/or ovaries and fallopian tubes.
				</p>
			{/if}
			<p class="font-body text-xl mt-4 font-bold">Regarding your ovaries:</p>
			<CheckmarkList list={[ovariesText()]} />
		</Content>
	</Card>
</div>
