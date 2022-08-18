<script lang="ts">
	import Treatment from '$lib/titles/icons/treatment.svg';
	import { Card, Content } from '$lib/layouts';
	import { treatment } from '../../store';
	import { getAnswer, getMultiSelectList, treatmentOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar Icon={Treatment}>Menopause Treatments</SummaryTitleBar>
		<Content>
			{#if $treatment.all.length > 0}
				<p class="font-body text-xl">
					You have <b>previously</b> tried {getMultiSelectList(
						treatmentOptions.all,
						$treatment.all
					)} to help your menopause symptoms.
				</p>
			{:else}
				<p class="font-body text-xl mt-4">
					You have not <b>previously</b> tried any treatments to help your menopause symptoms.
				</p>
			{/if}
			{#if $treatment.current.length > 0}
				<p class="font-body text-xl mt-4">
					You are <b>currently</b> using {getMultiSelectList(
						treatmentOptions.current,
						$treatment.current
					)} to manage your menopause symptoms.
				</p>
				<p class="font-body text-xl mt-4">
					Your current management strategy has {getAnswer(
						treatmentOptions.helping,
						$treatment.helping
					)}.
				</p>
			{:else}
				<p class="font-body text-xl mt-4">
					You are not <b>currently</b> using any treatments to help your menopause symptoms.
				</p>
			{/if}
			{#if $treatment.current.length > 0}
				<p class="font-body text-xl mt-4">
					Regarding menopause therapy, <b>you are most interested in</b>
					{getMultiSelectList(treatmentOptions.current, $treatment.current)}.
				</p>
			{:else}
				<p class="font-body text-xl mt-4">
					You have not indicated any <b>interest</b> in menopause therapy.
				</p>
			{/if}
		</Content>
	</Card>
</div>
