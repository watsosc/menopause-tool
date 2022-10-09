<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { medication } from '../../store';
	import { getMultiSelectAnswer, medicationOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
	import CheckmarkList from '$lib/answers/CheckmarkList.svelte';
	import Container from '$lib/layouts/Container.svelte';

	const selectedMedications = getMultiSelectAnswer(
		medicationOptions.medications,
		$medication.medicationSelection,
		(primary, suboptions) => `${primary} (${suboptions})`
	);
</script>

<Container>
	<Card>
		<SummaryTitleBar>Medications & Allergies</SummaryTitleBar>
		<Content>
			<p class="font-body text-xl font-bold">
				You were given a list of different types of medications. From this list, you indicated you
				are taking the following medications/types of medications:
			</p>
			{#if $medication.medicationSelection.length > 0}
				<CheckmarkList list={selectedMedications} />
			{:else}
				<CheckmarkList list={['None']} />
			{/if}
			{#if !!$medication.medicationEntry}
				<p class="font-body text-xl mt-4 font-bold">
					You were then asked to list all medications you take on a regular basis. You indicated you
					take the following medications:
				</p>
				<p class="font-body text-xl mt-1 ml-10">{$medication.medicationEntry}</p>
			{:else}
				<p class="font-body text-xl mt-4">
					You were asked to list all medications you take on a regular basis. You indicated you take
					<b>no medication</b> at the moment.
				</p>
			{/if}
			{#if !!$medication.allergiesText}
				<p class="font-body text-xl mt-4 font-bold">
					Regarding <b>allergies</b>, you have indicated the following <b>allergies</b>:
				</p>
				<p class="font-body text-xl mt-1 ml-10">{$medication.allergiesText}</p>
			{:else}
				<p class="font-body text-xl mt-4">
					Regarding <b>allergies</b>, you have indicated you have <b>no allergies</b>.
				</p>
			{/if}
		</Content>
	</Card>
</Container>
