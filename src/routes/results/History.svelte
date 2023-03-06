<script lang="ts">
	import { Card, Content } from '$lib/layouts';
	import { basics } from '../../store';
	import { basicsOptions, getMultiSelectList } from '$lib/selections';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';
	import CheckmarkList from '$lib/answers/CheckmarkList.svelte';
	import Container from '$lib/layouts/Container.svelte';

	const bleeding = () => {
		if ($basics.bleeding === 'no') {
			return `You have not had any postmenopausal bleeding that has not been investigated.`;
		}
		if ($basics.bleeding === 'yes') {
			return `You have had postmenopausal bleeding that has not been investigated.`;
		}

		return null;
	};

	const answers = getMultiSelectList(basicsOptions.period, $basics.period);
</script>

<Container>
	<Card>
		<SummaryTitleBar>Menstrual History</SummaryTitleBar>
		<Content>
			<p class="font-body text-xl">
				Regarding your <b>last menstrual period</b>, you have indicated:
			</p>
			{#if answers.length > 0}
				<CheckmarkList list={answers} />
			{/if}
			{#if bleeding() !== null}
				<p class="font-body text-xl mt-4">
					{@html bleeding()}
				</p>
			{/if}
		</Content>
	</Card>
</Container>
