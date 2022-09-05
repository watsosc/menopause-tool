<script lang="ts">
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
		<MainTitle colour="green">
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

<a href="/" class="underline text-blue-600">Back to main</a>
