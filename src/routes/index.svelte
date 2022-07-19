<script lang="ts">
	import { basics, menopause, treatment } from '../store';

	import TextEntryQuestion from '$lib/TextEntryQuestion.svelte';
	import HeightTextEntryQuestion from '$lib/HeightTextEntryQuestion.svelte';
	import TitleBar from '$lib/TitleBar.svelte';
	import SingleSelectQuestion from '$lib/SingleSelectQuestion.svelte';
	import { basicsOptions, menopauseOptions, treatmentOptions } from '$lib/selections';
	import MultiSelectQuestion from '$lib/MultiSelectQuestion.svelte';

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
	<h1 class="text-4xl font-extrabold font-title text-title uppercase mx-2 my-4">
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
					subtitle="Choose the option that best describes you."
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
		<div class="flex flex-col md:flex-row gap-4 mb-4">
			<div class="flex flex-col md:w-1/2">
				<MultiSelectQuestion
					name="menopause-symptoms"
					title="People have different symptoms that can be related to menopause. What symptoms of menopause do you experience?"
					subtitle="Choose all that apply."
					bind:selection={$menopause.symptoms}
					options={menopauseOptions.symptoms}
				/>
				<SingleSelectQuestion
					name="menopause-other"
					title="If you have any other symptoms that you think are caused by menopause, please write them here:"
					bind:selection={$menopause.other}
					options={menopauseOptions.other}
				/>
			</div>
			<div class="flex flex-col md:w-1/2">
				<SingleSelectQuestion
					name="menopause-sleep"
					title="Regarding <u>sleep</u>, are you waking with a night sweat or to void?"
					subtitle="Choose the option that best describes you."
					bind:selection={$menopause.sleep}
					options={menopauseOptions.sleep}
				/>
				<SingleSelectQuestion
					name="menopause-mood"
					title="Regarding <u>mood</u>, do you have a history of depression or anxiety outside of the time of menopause?"
					subtitle="Choose the option that best describes you."
					bind:selection={$menopause.mood}
					options={menopauseOptions.depression}
				/>
			</div>
		</div>
		<TitleBar title="Questions about your Menopause Treatments" />
		<div class="flex flex-col md:flex-row gap-4 mb-4">
			<div class="flex flex-col md:w-1/2">
				<MultiSelectQuestion
					name="therapy-all"
					title="What menopause therapies have you tried to help with your menopause symptoms?"
					subtitle="Choose all that apply."
					bind:selection={$treatment.all}
					options={treatmentOptions.all}
				/>
				<SingleSelectQuestion
					name="therapy-medication"
					title="If you are taking a medication for your menopause symptoms, is it helping you?"
					bind:selection={$treatment.medication}
					options={treatmentOptions.helping}
				/>
			</div>
			<div class="flex flex-col md:w-1/2">
				<MultiSelectQuestion
					name="therapy-current"
					title="What menopause therapies are you using <u>now</u> to manage your menopause symptoms?"
					subtitle="Choose all that apply."
					bind:selection={$treatment.current}
					options={treatmentOptions.current}
				/>
				<MultiSelectQuestion
					name="therapy-interested"
					title="What menopause therapies are you most interested in?"
					subtitle="Choose all that apply."
					bind:selection={$treatment.interested}
					options={treatmentOptions.interested}
				/>
			</div>
		</div>
		<TitleBar title="Questions about your Medications and Allergies" />
	</form>
</div>

<a href="/results" class="underline text-blue-600">See results</a>
