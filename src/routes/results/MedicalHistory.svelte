<script lang="ts">
	import Past from '$lib/titles/icons/pastmedical.svg';
	import { Card, Content } from '$lib/layouts';
	import { history } from '../../store';
	import { getMultiSelectList, historyOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
	import CheckmarkList from '$lib/answers/CheckmarkList.svelte';

	const conditions = getMultiSelectList(historyOptions.conditions, $history.conditions);
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar Icon={Past}>Past Medical History</SummaryTitleBar>
		<Content>
			{#if $history.conditions.length > 0}
				<p class="font-body text-xl font-bold">
					From our predetermined list, you indicated you have/had the following medical conditions
					now or in the past:
				</p>
				<CheckmarkList list={conditions} />
			{:else}
				<p class="font-body text-xl">
					You indicated you <b>have not had</b> any of the following medical conditions now or in the
					past:
				</p>
				<CheckmarkList list={historyOptions.conditions.map((condition) => condition.description)} />
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
