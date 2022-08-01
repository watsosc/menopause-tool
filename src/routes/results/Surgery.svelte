<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { surgeries } from '../../store';
	import { getMultiSelectAnswer, surgeryOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';

	const selectedSurgeries = getMultiSelectAnswer(surgeryOptions.surgeries, $surgeries.received);
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar>Medications</SummaryTitleBar>
		<Content>
			{#if $surgeries.received.length > 0}
				<p class="font-body text-xl">
					From our predetermined list of procedures, you indicated you have had the following
					surgeries:
				</p>
				<ul class="list-disc ml-10">
					{#each selectedSurgeries as surgery}
						<li class="font-body text-xl">{surgery}</li>
					{/each}
				</ul>
			{:else}
				<p class="font-body text-xl">
					You <b>have not</b> had any surgery to diagnose and/or resect endometriosis, nor have you had
					surgery to remove your uterus, and/or ovaries and fallopian tubes.
				</p>
			{/if}
			<p class="font-body text-xl mt-4">
				{#if $surgeries.ovariesRemoved == 'no'}
					Regarding ovaries specifically, you have never had surgery to remove your ovaries.
				{:else}
					You had your ovaries removed when you were {$surgeries.ovariesAge} years old.
				{/if}
			</p>
		</Content>
	</Card>
</div>
