<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { history } from '../../store';
	import { getMultiSelectList, historyOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
	import CheckmarkList from '$lib/answers/CheckmarkList.svelte';
	import CrossList from '$lib/answers/CrossList.svelte';
	import Container from '$lib/layouts/Container.svelte';

	const conditions = () => {
		if ($history.conditions.length > 0) {
			return getMultiSelectList(historyOptions.conditions, $history.conditions);
		} else {
			return ['No medical conditions selected'];
		}
	};
	const nonConditions = historyOptions.conditions
		.filter((condition) => !$history.conditions.some((option) => option === condition.id))
		.map((condition) => condition.description);
</script>

<Container>
	<Card>
		<SummaryTitleBar>Past Medical History</SummaryTitleBar>
		<Content>
			<p class="font-body text-xl font-bold">
				From our predetermined list, you indicated you have/had the following medical conditions now
				or in the past:
			</p>
			<CheckmarkList list={conditions()} />
			<div class="border-2 border-[#000000] mt-2 rounded-lg bg-grey w-fit pr-6 print:border-4">
				<p class="font-body text-xl mt-2 p-2">
					You indicated that you have <b>no</b> history of:
				</p>
				<CrossList list={nonConditions} />
			</div>
			{#if $history.bloodPressure === 'uncontrolled'}
				<p class="font-body text-xl mt-4">
					You have a <b>high blood pressure</b>, but it is not controlled.
				</p>
			{:else if $history.bloodPressure === 'controlled'}
				<p class="font-body text-xl mt-4">
					You have a <b>high blood pressure</b>, but it is controlled.
				</p>
			{/if}
		</Content>
	</Card>
</Container>
