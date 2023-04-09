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
				<p class="font-body font-bold text-xl w-[15%] min-w-[7em] print:w-[12em]">Mammogram</p>
				<p class="font-body text-xl print:w-full">
					{getAnswer(screeningOptions.mammogram, $screening.mammogram)}
				</p>
			</div>
			<div class="flex flex-row mt-4 items-center">
				<p class="font-body font-bold text-xl w-[15%] min-w-[7em] print:w-[12em]">Pap Test</p>
				<p class="font-body text-xl print:w-full">
					{getAnswer(screeningOptions.pap, $screening.pap)}
				</p>
			</div>
			<div class="flex flex-row mt-4 items-center">
				<p class="font-body font-bold text-xl w-[15%] min-w-[7em] print:w-[12em]">
					Bone Mineral Density
				</p>
				<p class="font-body text-xl print:w-full">
					{getAnswer(screeningOptions.bones, $screening.bones)}
				</p>
			</div>
		</Content>
	</Card>
</Container>
