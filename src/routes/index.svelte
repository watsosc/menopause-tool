<script lang="ts">
	import { basics } from '../store';

	import TextEntryQuestion from '$lib/TextEntryQuestion.svelte';
	import HeightTextEntryQuestion from '$lib/HeightTextEntryQuestion.svelte';
	import TitleBar from '$lib/TitleBar.svelte';
	import SingleSelectQuestion from '$lib/SingleSelectQuestion.svelte';
	import { basicsOptions } from '$lib/selections/basics';

	const bmi = (weight: string, heightFeet: string, heightInch: string) => {
		if (weight === '' || heightFeet === '') {
			return null;
		} else {
			return (Number(weight) / (Number(heightFeet) * 12 + Number(heightInch)) ** 2) * 703;
		}
	};

	$: bmiValue = bmi($basics.weight, $basics.heightFeet, $basics.heightInch)?.toFixed(2);
</script>

<div class="container mx-auto px-4">
	<h1 class="text-3xl font-extrabold font-title text-title uppercase mx-2 my-4">
		Menopause History Form
	</h1>
	<form>
		<div class="flex flex-col md:flex-row gap-4 mb-4">
			<div class="flex flex-col md:w-1/2">
				<TextEntryQuestion
					name="basic-age"
					title="How old are you?"
					context="years old"
					bind:text={$basics.age}
				/>
				<HeightTextEntryQuestion />
				<TextEntryQuestion
					name="basic-weight"
					title="How much do you weigh?"
					context="pounds"
					bind:text={$basics.weight}
				/>
				<div class="flex flex-col items-center">
					<p class="text-xl uppercase">Your body mass index (bmi) is:</p>
					<p class="text-xl font-body font-bold mx-2">{`${bmiValue ?? '_____'} kg/m\u00B2`}</p>
				</div>
			</div>
			<div class="flex flex-col md:w-1/2">
				<SingleSelectQuestion
					name="basic-period"
					title="When was your last period?"
					bind:selection={$basics.period}
					options={basicsOptions.period}
				/>
				<SingleSelectQuestion
					name="basic-period"
					title="If you are in menopause (typically, one year of not getting a period), have you had any bleeding after that year of not getting your period?"
					bind:selection={$basics.bleeding}
					options={basicsOptions.menopause}
				/>
			</div>
		</div>
		<TitleBar title="Questions about your Menopause Symptoms" />
	</form>
</div>

<a href="/results" class="underline text-blue-600">See results</a>
