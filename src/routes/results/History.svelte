<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { basics } from '../../store';
	import { basicsOptions, getAnswer } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';

	const bleeding = () => {
		if ($basics.bleeding === 'yes') {
			return `You indicated that you <b>may have had postmenopausal bleeding</b>.`;
		}
		if ($basics.bleeding === 'no') {
			return `You have <b>not</b> had any postmenopausal bleeding.`;
		}

		return null;
	};
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar>Menstrual History</SummaryTitleBar>
		<Content>
			<p class="font-body text-xl">
				Regarding your last menstrual period, you have indicated {@html getAnswer(
					basicsOptions.period,
					$basics.period
				)}.
			</p>
			{#if bleeding() !== null}
				<p class="font-body text-xl mt-4">
					{@html bleeding()}
				</p>
			{/if}
		</Content>
	</Card>
</div>
