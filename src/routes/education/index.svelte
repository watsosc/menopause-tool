<script>
	import { habits, menopause, treatment } from '../../store';
	import Alcohol from './Alcohol.svelte';
	import BoneHealth from './BoneHealth.svelte';
	import BreastScreening from './BreastScreening.svelte';
	import Cannabis from './Cannabis.svelte';
	import CervicalScreening from './CervicalScreening.svelte';
	import Definition from './Definition.svelte';
	import Exercise from './Exercise.svelte';
	import Period from './Period.svelte';
	import Smoking from './Smoking.svelte';
	import Title from './Title.svelte';
	import Vaginal from './symptoms/Vaginal.svelte';
	import Weight from './Weight.svelte';
	import Symptoms from './symptoms/Symptoms.svelte';
</script>

<Title />
<Definition />
<Period />
<Weight />
{#if $menopause.symptoms.length > 0}
	<Symptoms />
{/if}
{#if $habits.cannabis === 'yes'}
	<Cannabis />
{/if}
{#if $habits.smoking === 'yes'}
	<Smoking />
{/if}
{#if $habits.alcohol !== 'none'}
	<Alcohol />
{/if}
<Exercise />
<BreastScreening />
<CervicalScreening />
<BoneHealth />
