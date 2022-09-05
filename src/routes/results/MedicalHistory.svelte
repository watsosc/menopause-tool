<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { history } from '../../store';
	import { getMultiSelectList, historyOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
	import CheckmarkList from '$lib/answers/CheckmarkList.svelte';
	import CrossList from '$lib/answers/CrossList.svelte';

	const conditions = getMultiSelectList(historyOptions.conditions, $history.conditions);
	const nonConditions = historyOptions.conditions
		.filter((condition) => !$history.conditions.some((option) => option === condition.id))
		.map((condition) => condition.description);
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar>Past Medical History</SummaryTitleBar>
		<Content>
			{#if $history.conditions.length > 0}
				<p class="font-body text-xl font-bold">
					From our predetermined list, you indicated you have/had the following medical conditions
					now or in the past:
				</p>
				<CheckmarkList list={conditions} />
				<div class="border-2 border-[#000000] mt-2 rounded-lg bg-grey w-fit pr-6">
					<p class="font-body text-xl mt-2 p-2">
						You indicated that you have <b>no</b> history of:
					</p>
					<CrossList list={nonConditions} />
				</div>
			{:else}
				<p class="font-body text-xl">
					You indicated you <b>have not had</b> any of the following medical conditions now or in the
					past:
				</p>
				<CrossList list={historyOptions.conditions.map((condition) => condition.description)} />
			{/if}
			<p class="font-body text-xl mt-4">
				{#if $history.bloodPressure === 'uncontrolled'}
					You have a <b>high blood pressure</b>, but it is not controlled.
				{:else if $history.bloodPressure === 'controlled'}
					You have a <b>high blood pressure</b>, but it is controlled.
				{:else}
					You have <b>no history of high blood pressure</b>.
				{/if}
			</p>
		</Content>
	</Card>
</div>
