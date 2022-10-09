<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { screening } from '../../store';
	import { getAnswer, screeningOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
	import Container from '$lib/layouts/Container.svelte';
</script>

<Container>
	<Card>
		<SummaryTitleBar>Screening</SummaryTitleBar>
		<Content>
			<div class="flex flex-row items-center">
				<p class="font-body font-bold text-xl w-[15%] print:w-full">Mammogram</p>
				<p class="font-body text-xl">
					{getAnswer(screeningOptions.mammogram, $screening.mammogram)}
				</p>
			</div>
			<div class="flex flex-row mt-4 items-center">
				<p class="font-body font-bold text-xl w-[15%] print:w-full">Pap Test</p>
				<p class="font-body text-xl">
					{getAnswer(screeningOptions.pap, $screening.pap)}
				</p>
			</div>
			<div class="flex flex-row mt-4 items-center print:gap-4">
				<p class="font-body font-bold text-xl w-[15%] print:w-full">Bone Mineral Density</p>
				<p class="font-body text-xl">
					{getAnswer(screeningOptions.bones, $screening.bones)}
				</p>
			</div>
		</Content>
	</Card>
</Container>
