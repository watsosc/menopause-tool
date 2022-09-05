<script lang="ts">
	import Screening from '$lib/titles/icons/screening.svg';
	import { Card, Content } from '$lib/layouts';
	import { screening } from '../../store';
	import { getAnswer, screeningOptions } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar>Screening</SummaryTitleBar>
		<Content>
			<div class="flex flex-row items-center">
				<p class="font-body font-bold text-xl w-[15%]">Mammogram</p>
				<p class="font-body text-xl">
					{getAnswer(screeningOptions.mammogram, $screening.mammogram)}
				</p>
			</div>
			<div class="flex flex-row mt-4 items-center">
				<p class="font-body font-bold text-xl w-[15%]">Pap Test</p>
				<p class="font-body text-xl">
					{getAnswer(screeningOptions.pap, $screening.pap)}
				</p>
			</div>
			<div class="flex flex-row mt-4 items-center">
				<p class="font-body font-bold text-xl w-[15%]">Bone Mineral Density</p>
				<p class="font-body text-xl">
					{getAnswer(screeningOptions.bones, $screening.bones)}
				</p>
			</div>
		</Content>
	</Card>
</div>
