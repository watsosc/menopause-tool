<script>
	import Card from '$lib/layouts/Card.svelte';
	import Content from '$lib/layouts/Content.svelte';
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
	import Management from './Management.svelte';
	import { treatment, menopause } from '../../../store';
	import Vasomotor from './Vasomotor.svelte';
	import Vaginal from './Vaginal.svelte';
	import SleepConcerns from './SleepConcerns.svelte';
	import SexualFunction from './SexualFunction.svelte';
	import CognitiveChanges from './CognitiveChanges.svelte';
	import Mood from './Mood.svelte';
	import Container from '$lib/layouts/Container.svelte';
</script>

<Container>
	<Card>
		<EducationTitleBar>Managing Menopausal Symptoms</EducationTitleBar>
		<Content>
			{#if ($treatment.all.length > 0 && $treatment.current.length === 0) || ($treatment.current.length > 0 && $treatment.helping !== 'much')}
				<Management />
			{/if}
			{#if $menopause.symptoms.includes('hot-flash') || $menopause.symptoms.includes('night-sweat')}
				<Vasomotor />
			{/if}
			{#if $menopause.symptoms.includes('vaginal-dryness')}
				<Vaginal />
			{/if}
			{#if $menopause.symptoms.includes('poor-sleep')}
				<SleepConcerns />
			{/if}
			{#if $menopause.symptoms.includes('low-libido')}
				<SexualFunction />
			{/if}
			{#if $menopause.symptoms.includes('brain-fog')}
				<CognitiveChanges />
			{/if}
			{#if $menopause.symptoms.includes('bad-mood')}
				<Mood />
			{/if}
		</Content>
	</Card>
</Container>
