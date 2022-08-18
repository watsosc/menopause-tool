<script lang="ts">
	import Past from '$lib/titles/icons/pastmedical.svg';
	import { Card, Content } from '$lib/layouts';
	import { history } from '../../store';
	import { getAnswer, historyOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar Icon={Past}>Past Medical History</SummaryTitleBar>
		<Content>
			{#if $history.conditions.length > 0}
				<p class="font-body text-xl">
					From our predetermined list, you indicated you have/had the following medical conditions
					now or in the past:
				</p>
				<ul class="list-disc ml-10">
					{#each $history.conditions as condition}
						<li class="font-body text-xl">
							{getAnswer(historyOptions.conditions, condition)}
						</li>
					{/each}
				</ul>
			{:else}
				<p class="font-body text-xl">
					You indicated you <b>have not had</b> any of the following medical conditions now or in the
					past:
				</p>
				<ul class="list-disc ml-10">
					{#each historyOptions.conditions as condition}
						<li class="font-body text-xl">{condition.description}</li>
					{/each}
				</ul>
			{/if}
			<p class="font-body text-xl">
				{#if $history.bloodPressure === 'uncontrolled'}
					You have high blood pressure but it is not controlled.
				{:else if $history.bloodPressure === 'controlled'}
					You have a high blood pressure but it is controlled.
				{:else}
					You have no history of high blood pressure.
				{/if}
			</p>
		</Content>
	</Card>
</div>
