<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { screening } from '../../store';
	import { getAnswer, screeningOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar>Screening</SummaryTitleBar>
		<Content>
			<p class="font-body text-xl">
				{getAnswer(screeningOptions.mammogram, $screening.mammogram)}
			</p>
			<p class="font-body text-xl mt-4">
				{getAnswer(screeningOptions.pap, $screening.pap)}
			</p>
			<p class="font-body text-xl mt-4">
				{getAnswer(screeningOptions.bones, $screening.bones)}
			</p>
		</Content>
	</Card>
</div>
