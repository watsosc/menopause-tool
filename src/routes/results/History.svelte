<script lang="ts">
	import Card from '$lib/Card.svelte';
	import Content from '$lib/Content.svelte';
	import ResponseDisplay from '$lib/ResponseDisplay.svelte';
	import TitleBar from '$lib/TitleBar.svelte';
	import { basics } from '../../store';
	import { basicsOptions } from '$lib/selections';
	import type { SelectOption } from '$lib/selections/selectOption';

	const answer = (response: string) => {
		const selection = basicsOptions.period.find((option: SelectOption) => option.id == response);

		return selection?.answer;
	};

	const bleeding = () => {
		if ($basics.bleeding == 'yes') {
			return `You indicated that you <b>may have had postmenopausal bleeding</b>.`;
		}
		if ($basics.bleeding == 'no') {
			return `You have <b>not</b> had any postmenopausal bleeding.`;
		}

		return null;
	};
</script>

<div class="container mx-auto px-4">
	<Card>
		<TitleBar color="green">Menstrual History</TitleBar>
		<Content>
			<p class="font-body text-xl">
				Regarding your last menstrual period, you have indicated {@html answer($basics.period)}.
			</p>
			{#if bleeding() !== null}
				<p class="font-body text-xl mt-4">
					{@html bleeding()}
				</p>
			{/if}
		</Content>
	</Card>
</div>
