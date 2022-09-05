<script lang="ts">
	import { goto } from '$app/navigation';

	import Card from '$lib/layouts/Card.svelte';
	import QuestionBlock from '$lib/layouts/QuestionBlock.svelte';
	import MainTitle from '$lib/titles/MainTitle.svelte';
	import Basics from './Basics.svelte';
	import Genetics from './Genetics.svelte';
	import Habits from './Habits.svelte';
	import History from './History.svelte';
	import MedicalHistory from './MedicalHistory.svelte';
	import Medications from './Medications.svelte';
	import Screening from './Screening.svelte';
	import Surgery from './Surgery.svelte';
	import Symptoms from './Symptoms.svelte';
	import Treatments from './Treatments.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<MainTitle colour="[#000000]">
			<h1 class="small-capper">Menopause History Summary</h1>
		</MainTitle>
		<QuestionBlock>
			<p class="text-xl font-body">
				Please review the history summary below and ensure your answers are correct. You can print
				your history summary and bring it to your healthcare provider. At the bottom of this page,
				there is an option for you to access and print your personalized Menopause Education
				Package.
			</p>
		</QuestionBlock>
	</Card>
</div>
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
		<button class="text-xl font-body rounded-full bg-green py-2 px-6 shadow-lg">
			<div class="small-capper">Generate Personalized Menopause Education Package</div>
		</button>
	</div>
</div>

<style>
	.small-capper {
		font-variant: small-caps;
	}
</style>
