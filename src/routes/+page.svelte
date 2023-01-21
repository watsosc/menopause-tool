<script lang="ts">
	import {
		basics,
		menopause,
		treatment,
		medication,
		genetics,
		history,
		surgeries,
		habits,
		screening,
		bmi,
		menopauseEntryDisabled,
		medicationEntryDisabled,
		treatmentEntryDisabled,
		surgeriesEntryDisabled,
		bleedingEntryDisabled,
		surgeriesOvariesDisabled,
		store,
		reset,
		bloodPressureEntryDisabled
	} from '../store';

	import {
		TextEntryQuestion,
		HeightTextEntryQuestion,
		SingleSelectQuestion,
		MultiSelectQuestion,
		FreeTextEntry,
		FreeTextEntryQuestion
	} from '$lib/questions';
	import { Card, QuestionBlock, QuestionColumn } from '$lib/layouts';
	import { QuestionTitleBar as TitleBar, MainTitle } from '$lib/titles';
	import {
		basicsOptions,
		menopauseOptions,
		treatmentOptions,
		medicationOptions,
		historyOptions,
		surgeryOptions,
		habitsOptions,
		screeningOptions,
		geneticsOptions
	} from '$lib/selections';
	import { schema } from '$lib/validation/schema';
	import { goto } from '$app/navigation';
	import Container from '$lib/layouts/Container.svelte';

	type Inner = {
		path: string;
		message: string;
	};

	type Container = {
		inner: Inner[];
	};

	type Error = {
		[key: string]: string;
	};

	let errors: Error = {};

	const extractErrors = (props: Container) => {
		const { inner } = props;
		return inner.reduce((acc, err) => {
			return { ...acc, [err.path]: err.message };
		}, {});
	};

	const onSubmit = () => {
		errors = {};

		schema
			.validate($store, { abortEarly: false })
			.then(() => {
				goto('/results');
			})
			.catch((e) => {
				errors = extractErrors(e);
				console.log(errors);
			});
	};
</script>

<Container>
	<Card>
		<MainTitle>
			<h1 class="small-capper">Menopause History Form</h1>
		</MainTitle>
		<QuestionBlock>
			<p class="text-xl font-body text-justify">
				You are invited to answer questions about your medical history in the form below. Completing
				this form will allow you to generate a Menopause History Summary followed by a personalized
				Menopause Education Package. Data entered into this form is not being retained.
			</p>
		</QuestionBlock>
	</Card>
	<form on:submit|preventDefault={onSubmit}>
		<Card>
			<TitleBar>Questions about your Age, Body Mass Index (BMI) and Menstrual Period</TitleBar>
			<QuestionBlock>
				<QuestionColumn>
					<TextEntryQuestion
						name="age"
						title="How old are you?"
						context="years old"
						bind:text={$basics.age}
						error={errors['age']}
					/>
					<HeightTextEntryQuestion
						feetError={errors['heightFeet']}
						inchError={errors['heightInch']}
					/>
					<TextEntryQuestion
						name="weight"
						title="How much do you weigh?"
						context="pounds"
						bind:text={$basics.weight}
						error={errors['weight']}
					/>
					<div class="flex flex-col items-center">
						<p class="text-xl uppercase">Your body mass index (bmi) is:</p>
						<p class="text-xl font-body font-bold mx-2">{`${$bmi ?? '_____'} kg/m\u00B2`}</p>
					</div>
				</QuestionColumn>
				<QuestionColumn>
					<SingleSelectQuestion
						name="period"
						title="When was your last natural menstrual period?"
						subtitle="Choose the option that best describes you."
						bind:selection={$basics.period}
						error={errors['period']}
						options={basicsOptions.period}
					/>
					{#if !$bleedingEntryDisabled}
						<SingleSelectQuestion
							name="bleeding"
							title="<b>If you have had more than one year since your last spontaneous period, have you had any vaginal bleeding that has not been investigated?</b>"
							bind:selection={$basics.bleeding}
							error={errors['bleeding']}
							options={basicsOptions.menopause}
							disabled={$bleedingEntryDisabled}
						/>
					{/if}
				</QuestionColumn>
			</QuestionBlock>
		</Card>
		<Card>
			<TitleBar>Questions about your Menopause Symptoms</TitleBar>
			<QuestionBlock>
				<QuestionColumn>
					<MultiSelectQuestion
						name="menopause-symptoms"
						title="People have different symptoms that can be related to menopause. What symptoms of menopause do you experience?"
						subtitle="Choose all that apply."
						bind:selection={$menopause.symptoms}
						options={menopauseOptions.symptoms}
						error={errors['symptoms']}
					/>
					<SingleSelectQuestion
						name="menopause-other"
						title="If you have any other symptoms that you think are caused by menopause, please write them here:"
						bind:selection={$menopause.other}
						options={menopauseOptions.other}
						error={errors['other']}
					/>
					<div class="-mt-2">
						<FreeTextEntry
							name="menopause-other-entry"
							bind:text={$menopause.otherEntry}
							disabled={$menopauseEntryDisabled}
							error={errors['otherEntry']}
						/>
					</div>
				</QuestionColumn>
				<QuestionColumn>
					{#if $menopause.symptoms.includes('poor-sleep')}
						<MultiSelectQuestion
							name="menopause-sleep"
							title="Regarding <u>sleep</u>, are you waking with a night sweat and/or to void?"
							subtitle="Choose all that apply."
							bind:selection={$menopause.sleep}
							options={menopauseOptions.sleep}
							error={errors['sleep']}
						/>
					{/if}
					{#if $menopause.symptoms.includes('bad-mood')}
						<MultiSelectQuestion
							name="menopause-mood"
							title="Regarding <u>mood</u>, do you have a history of depression or anxiety outside of the time of menopause?"
							subtitle="Choose all that apply."
							bind:selection={$menopause.mood}
							options={menopauseOptions.depression}
							error={errors['mood']}
						/>
					{/if}
				</QuestionColumn>
			</QuestionBlock>
		</Card>
		<Card>
			<TitleBar>Questions about your Menopause Treatments</TitleBar>
			<QuestionBlock>
				<QuestionColumn>
					<MultiSelectQuestion
						name="therapy-all"
						title="What menopause therapies have you <u>tried</u> to help with your menopause symptoms?"
						subtitle="Choose all that apply."
						bind:selection={$treatment.all}
						options={treatmentOptions.all}
						error={errors['all']}
					/>
					{#if $treatment.all.length > 0}
						<MultiSelectQuestion
							name="therapy-current"
							title="What menopause therapies are you using <u>now</u> to manage your menopause symptoms?"
							subtitle="Choose all that apply."
							bind:selection={$treatment.current}
							options={treatmentOptions.current}
							error={errors['current']}
						/>
					{/if}
				</QuestionColumn>
				<QuestionColumn>
					{#if !$treatmentEntryDisabled}
						<SingleSelectQuestion
							name="therapy-medication"
							title="If you are currently using a menopause therapy for your symptoms, is it/are they <u>helping you</u>?"
							subtitle="Choose the option that best describes you."
							bind:selection={$treatment.helping}
							options={treatmentOptions.helping}
							disabled={$treatmentEntryDisabled}
							error={errors['helping']}
						/>
					{/if}
					<MultiSelectQuestion
						name="therapy-interested"
						title="What menopause therapies are you <u>most interested in</u>?"
						subtitle="Choose all that apply."
						bind:selection={$treatment.interested}
						options={treatmentOptions.interested}
						error={errors['interested']}
					/>
				</QuestionColumn>
			</QuestionBlock>
		</Card>
		<Card>
			<TitleBar>Questions about your Medications and Allergies</TitleBar>
			<QuestionBlock>
				<QuestionColumn>
					<MultiSelectQuestion
						name="medications-select"
						title="Do you take any of the following medications?"
						subtitle="Choose all that apply."
						bind:selection={$medication.medicationSelection}
						options={medicationOptions.medications}
						error={errors['medicationSelection']}
					/>
				</QuestionColumn>
				<QuestionColumn>
					<FreeTextEntryQuestion
						name="medications-entry"
						title="Please enter all the medications that you take on a regular basis."
						bind:text={$medication.medicationEntry}
						error={errors['medicationEntry']}
					/>
					<SingleSelectQuestion
						name="medications-allergies"
						title="Allergies"
						bind:selection={$medication.allergiesSelect}
						options={medicationOptions.allergies}
						error={errors['allergiesSelect']}
					/>
					<div class="-mt-2">
						<FreeTextEntry
							name="medications-allergies-entry"
							bind:text={$medication.allergiesText}
							disabled={$medicationEntryDisabled}
							error={errors['allergiesText']}
						/>
					</div>
				</QuestionColumn>
			</QuestionBlock>
		</Card>
		<div class="flex flex-col md:flex-row gap-4">
			<div class="flex flex-col md:w-1/2 -my-2">
				<Card>
					<TitleBar>Questions about Past Medical History</TitleBar>
					<div class="mb-4 p-4">
						<MultiSelectQuestion
							name="conditions-select"
							title="Please indicate if you have any of the following medical conditions now or in the past."
							subtitle="Choose all that apply."
							bind:selection={$history.conditions}
							options={historyOptions.conditions}
							error={errors['conditions']}
						/>
						{#if !$bloodPressureEntryDisabled}
							<SingleSelectQuestion
								name="conditions-blood"
								title="If you have a history of <u>high blood pressure</u>, is your blood pressure well controlled now?"
								bind:selection={$history.bloodPressure}
								options={historyOptions.bloodPressure}
								error={errors['bloodPressure']}
							/>
						{/if}
					</div>
				</Card>
			</div>
			<div class="flex flex-col md:w-1/2 -my-2">
				<Card>
					<TitleBar>Questions about Previous Surgeries</TitleBar>
					<div class="mb-4 p-4">
						<MultiSelectQuestion
							name="surgery-select"
							title="Have you ever had any of the following surgeries?"
							subtitle="Choose all that apply."
							bind:selection={$surgeries.received}
							options={surgeryOptions.surgeries}
							error={errors['received']}
						/>
						{#if !$surgeriesOvariesDisabled}
							<SingleSelectQuestion
								name="surgery-ovaries"
								title="If you have had your ovaries removed, how old were you?"
								bind:selection={$surgeries.ovariesRemoved}
								options={surgeryOptions.ovaries}
								error={errors['ovariesRemoved']}
								disabled={$surgeriesOvariesDisabled}
							/>
							<div class="-mt-2">
								<FreeTextEntry
									name="surgery-ovaries-age"
									bind:text={$surgeries.ovariesAge}
									context="years old"
									disabled={$surgeriesEntryDisabled}
									error={errors['ovariesAge']}
								/>
							</div>
						{/if}
					</div>
				</Card>
			</div>
		</div>
		<Card>
			<TitleBar>Questions about Habits</TitleBar>
			<QuestionBlock>
				<QuestionColumn>
					<SingleSelectQuestion
						name="habits-cannabis"
						title="Do you use cannabis regularly?"
						bind:selection={$habits.cannabis}
						options={habitsOptions.cannabis}
						error={errors['cannabis']}
					/>
					<SingleSelectQuestion
						name="habits-alcohol"
						title="How much alcohol do you drink in a week?"
						bind:selection={$habits.alcohol}
						options={habitsOptions.alcohol}
						error={errors['alcohol']}
					/>
				</QuestionColumn>
				<QuestionColumn>
					<SingleSelectQuestion
						name="habits-smoke"
						title="Do you currently smoke?"
						bind:selection={$habits.smoking}
						options={habitsOptions.smoking}
						error={errors['smoking']}
					/>
					<SingleSelectQuestion
						name="habits-exercise"
						title="Please choose the statement that best describes your exercise habits."
						bind:selection={$habits.exercise}
						options={habitsOptions.exercise}
						error={errors['exercise']}
					/>
				</QuestionColumn>
			</QuestionBlock>
		</Card>
		<Card>
			<TitleBar>Questions about Screening</TitleBar>
			<QuestionBlock>
				<QuestionColumn>
					<SingleSelectQuestion
						name="screening-mammogram"
						title="When was your last mammogram?"
						bind:selection={$screening.mammogram}
						options={screeningOptions.mammogram}
						error={errors['mammogram']}
					/>
					<SingleSelectQuestion
						name="screening-pap"
						title="When was your last Pap test?"
						bind:selection={$screening.pap}
						options={screeningOptions.pap}
						error={errors['pap']}
					/>
				</QuestionColumn>
				<QuestionColumn>
					<SingleSelectQuestion
						name="screening-bones"
						title="If you have had a bone density scan, have you been told that you have low bone density (e.g., osteopenia or osteoporosis)?"
						bind:selection={$screening.bones}
						options={screeningOptions.bones}
						error={errors['bones']}
					/>
				</QuestionColumn>
			</QuestionBlock>
		</Card>
		<Card>
			<TitleBar>Questions about Family and Genetic History</TitleBar>
			<QuestionBlock>
				<QuestionColumn>
					<MultiSelectQuestion
						name="genetics-conditions"
						title="Have you ever been told you carry any of the following genes that may make you more likely to develop certain conditions?"
						subtitle="Choose all that apply."
						bind:selection={$genetics.genes}
						options={geneticsOptions.genes}
						error={errors['genes']}
					/>
				</QuestionColumn>
				<QuestionColumn>
					<MultiSelectQuestion
						name="genetics-family"
						title="Please indicate if you have a family history of any of the following conditions and which relative has/had the condition."
						subtitle="Choose all that apply."
						bind:selection={$genetics.family}
						options={geneticsOptions.family}
						error={errors['family']}
					/>
				</QuestionColumn>
			</QuestionBlock>
		</Card>

		<div class="flex flex-row justify-around my-8">
			<button
				class="text-xl font-body rounded-full bg-title text-white py-2 px-6 shadow-lg"
				on:click|preventDefault={reset}
			>
				<div class="small-capper">Reset Form</div>
			</button>
			<button
				type="submit"
				class="text-xl font-body rounded-full bg-title text-white py-2 px-6 shadow-lg"
			>
				<div class="small-capper">Generate History Summary</div>
			</button>
		</div>
	</form>
</Container>

<style>
	.small-capper {
		font-variant: small-caps;
	}
</style>
