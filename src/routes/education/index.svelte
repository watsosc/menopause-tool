<script>
	import { habits } from '../../store';
	import Alcohol from './Alcohol.svelte';
	import BreastScreening from './BreastScreening.svelte';
	import Cannabis from './Cannabis.svelte';
	import Definition from './Definition.svelte';
	import Exercise from './Exercise.svelte';
	import Period from './Period.svelte';
	import Smoking from './Smoking.svelte';
	import Title from './Title.svelte';
	import Vaginal from './Vaginal.svelte';
	import Vasomotor from './Vasomotor.svelte';
	import Weight from './Weight.svelte';
</script>

<Title />
<Definition />
<Period />
<Weight />
<Vasomotor />
<Vaginal />
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
