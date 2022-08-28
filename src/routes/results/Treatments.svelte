<script lang="ts">
	import Treatment from '$lib/titles/icons/treatment.svg';
	import { Card, Content } from '$lib/layouts';
	import { treatment } from '../../store';
	import { getAnswer, getMultiSelectList, treatmentOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
	import CheckmarkList from '$lib/answers/CheckmarkList.svelte';

	$: previous = getMultiSelectList(treatmentOptions.all, $treatment.all);
	$: current = getMultiSelectList(treatmentOptions.current, $treatment.current);
	$: interested = getMultiSelectList(treatmentOptions.interested, $treatment.interested);
	$: helping = getAnswer(treatmentOptions.helping, $treatment.helping);
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar Icon={Treatment}>Menopause Treatments</SummaryTitleBar>
		<Content>
			{#if $treatment.all.length > 0}
				<p class="font-body text-xl">
					You have <b>previously</b> tried:
				</p>
				<CheckmarkList list={previous} />
			{:else}
				<p class="font-body text-xl mt-4">
					You have not <b>previously</b> tried any treatments to help your menopause symptoms.
				</p>
			{/if}
			{#if $treatment.current.length > 0}
				<p class="font-body text-xl mt-4">
					You are <b>currently</b> using:
				</p>
				<CheckmarkList list={current} />
				{#if helping}
					<p class="font-body text-xl mt-4">
						Your <b>current management strategy</b> has made your menopause symptoms:
					</p>
					<CheckmarkList list={[helping]} />
				{/if}
			{:else}
				<p class="font-body text-xl mt-4">
					You are not <b>currently</b> using any treatments to help your menopause symptoms.
				</p>
			{/if}
			{#if $treatment.current.length > 0}
				<p class="font-body text-xl mt-4">
					Regarding menopause therapy, <b>you are most interested in</b>:
				</p>
				<CheckmarkList list={interested} />
			{:else}
				<p class="font-body text-xl mt-4">
					You have not indicated any <b>interest</b> in menopause therapy.
				</p>
			{/if}
		</Content>
	</Card>
</div>
