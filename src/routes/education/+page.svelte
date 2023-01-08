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
	import Weight from './Weight.svelte';
	import Symptoms from './symptoms/Symptoms.svelte';
	import Container from '$lib/layouts/Container.svelte';
</script>

<Title />
<Definition />
<Period />
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
<Weight />
<Exercise />
<BreastScreening />
<CervicalScreening />
<BoneHealth />
<Container>
	<div class="flex flex-row justify-center mb-6 print:hidden">
		<button
			class="text-xl font-body rounded-full bg-orange py-2 px-6 shadow-lg"
			on:click={() => window.print()}
		>
			<div class="small-capper">Print</div>
		</button>
	</div>
</Container>

<style>
	.small-capper {
		font-variant: small-caps;
	}
</style>
