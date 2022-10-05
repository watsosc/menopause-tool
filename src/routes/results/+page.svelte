<script lang="ts">
	import { goto } from '$app/navigation';

	import Basics from './Basics.svelte';
	import Genetics from './Genetics.svelte';
	import Habits from './Habits.svelte';
	import History from './History.svelte';
	import MedicalHistory from './MedicalHistory.svelte';
	import Medications from './Medications.svelte';
	import Screening from './Screening.svelte';
	import Surgery from './Surgery.svelte';
	import Symptoms from './Symptoms.svelte';
	import Title from './Title.svelte';
	import Treatments from './Treatments.svelte';
</script>

<Title />
<Basics />
<History />
<Symptoms />
<Treatments />
<Medications />
<MedicalHistory />
<Surgery />
<Habits />
<Screening />
<Genetics />
<div class="container mx-auto px-4">
	<div class="flex flex-row justify-around my-8">
		<div>
			<button
				class="text-xl font-body rounded-full bg-green py-2 px-6 shadow-lg"
				on:click={() => goto('/')}
			>
				<div class="small-capper">Go Back</div>
			</button>
			<button class="text-xl font-body rounded-full bg-green py-2 px-6 shadow-lg ml-8">
				<div class="small-capper">Print</div>
			</button>
		</div>
		<button
			class="text-xl font-body rounded-full bg-green py-2 px-6 shadow-lg"
			on:click={() => goto('/education')}
		>
			<div class="small-capper">Generate Education Package</div>
		</button>
	</div>
</div>

<style>
	.small-capper {
		font-variant: small-caps;
	}
</style>
