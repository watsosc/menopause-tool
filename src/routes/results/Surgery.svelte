<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { surgeries } from '../../store';
	import { getMultiSelectAnswer, surgeryOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
	import { CheckmarkList } from '$lib/answers';
	import Container from '$lib/layouts/Container.svelte';

	const selectedSurgeries = getMultiSelectAnswer(
		surgeryOptions.surgeries,
		$surgeries.received,
		(primary, suboptions) => `${primary} (${suboptions})`
	);
</script>

<Container>
	<Card>
		<SummaryTitleBar>Previous Surgeries</SummaryTitleBar>
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
			{#if $surgeries.received.includes('bilateral')}
				<p class="font-body text-xl mt-4 font-bold">Regarding your ovaries:</p>
				<CheckmarkList
					list={[`You had your ovaries removed when you were ${$surgeries.ovariesAge} years old`]}
				/>
			{/if}
			{#if $surgeries.otherSurgeries !== ''}
				<p class="font-body text-xl mt-4">
					You were asked to list any other previous surgeries. You indicated you have had the
					following procedure(s): <b>{$surgeries.otherSurgeries}</b>
				</p>
			{:else}
				<p class="font-body text-xl mt-4">
					You were asked to list any other previous surgeries.
					<b>You indicated you have had no other procedures.</b>
				</p>
			{/if}
		</Content>
	</Card>
</Container>
