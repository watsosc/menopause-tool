<script lang="ts">
	import Medications from '$lib/titles/icons/meds-allergies.svg';
	import { Card, Content } from '$lib/layouts';
	import { medication } from '../../store';
	import { getMultiSelectAnswer, medicationOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';

	const selectedMedications = getMultiSelectAnswer(
		medicationOptions.medications,
		$medication.medicationSelection,
		(primary, suboptions) => `${primary} (${suboptions})`
	);
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar Icon={Medications}>Medications</SummaryTitleBar>
		<Content>
			<p class="font-body text-xl">
				You were given a list of different types of medications. From this list, you indicated you
				are taking the following medications/types of medications:
			</p>
			{#if $medication.medicationSelection.length > 0}
				<ul class="list-disc ml-10">
					{#each selectedMedications as medication}
						<li class="font-body text-xl">{medication}</li>
					{/each}
				</ul>
			{:else}
				<ul class="list-disc ml-10">
					<li class="font-body text-xl">None</li>
				</ul>
			{/if}
			<p class="font-body text-xl mt-4">
				{#if !!$medication.medicationEntry}
					You were then asked to list all medications you take on a regular basis. You indicated you
					take the following medications: {$medication.medicationEntry}
				{:else}
					You were asked to list all medications you take on a regular basis. You indicated you take
					<b>no medication</b> at the moment.
				{/if}
			</p>
			<p class="font-body text-xl mt-4">
				{#if !!$medication.allergiesText}
					Regarding allergies, you have indicated the following allergies: {$medication.allergiesText}
				{:else}
					Regarding allergies, you have indicated you have <b>no</b> allergies.
				{/if}
			</p>
		</Content>
	</Card>
</div>
