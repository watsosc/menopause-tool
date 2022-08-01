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
		screening
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
	import { bmi } from '$lib/bmiCalculator';

	$: bmiValue = bmi($basics.weight, $basics.heightFeet, $basics.heightInch)?.toFixed(2);

	$: ovariesDisabled = $surgeries.ovariesRemoved != 'yes';
	$: allergiesDisabled = $medication.allergiesSelect != 'yes';
	$: sufferingDisabled = $menopause.other != 'yes';
	$: treatmentHelpingDisabled = $treatment.current.length === 0;
</script>

<div class="container mx-auto px-4">
	<Card>
		<MainTitle>
			<h1 class="small-capper">Menopause History Form</h1>
		</MainTitle>
	</Card>
	<form>
		<Card>
			<QuestionBlock>
				<QuestionColumn>
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
				</QuestionColumn>
				<QuestionColumn>
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
					/>
					<SingleSelectQuestion
						name="menopause-other"
						title="If you have any other symptoms that you think are caused by menopause, please write them here:"
						bind:selection={$menopause.other}
						options={menopauseOptions.other}
					/>
					<div class="-mt-2">
						<FreeTextEntry
							name="menopause-other-entry"
							bind:text={$menopause.otherEntry}
							disabled={sufferingDisabled}
						/>
					</div>
				</QuestionColumn>
				<QuestionColumn>
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
				</QuestionColumn>
			</QuestionBlock>
		</Card>
		<Card>
			<TitleBar>Questions about your Menopause Treatments</TitleBar>
			<QuestionBlock>
				<QuestionColumn>
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
						bind:selection={$treatment.helping}
						options={treatmentOptions.helping}
						disabled={treatmentHelpingDisabled}
					/>
				</QuestionColumn>
				<QuestionColumn>
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
					/>
				</QuestionColumn>
				<QuestionColumn>
					<FreeTextEntryQuestion
						name="medications-entry"
						title="Please enter all the medications that you take on a regular basis."
						bind:text={$medication.medicationEntry}
					/>
					<SingleSelectQuestion
						name="medications-allergies"
						title="Allergies"
						bind:selection={$medication.allergiesSelect}
						options={medicationOptions.allergies}
					/>
					<div class="-mt-2">
						<FreeTextEntry
							name="medications-allergies-entry"
							bind:text={$medication.allergiesText}
							disabled={allergiesDisabled}
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
						/>
						<SingleSelectQuestion
							name="conditions-blood"
							title="If you have a history of <u>high blood pressure</u>, is your blood pressure well controlled now?"
							bind:selection={$history.bloodPressure}
							options={historyOptions.bloodPressure}
						/>
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
						/>
						<SingleSelectQuestion
							name="surgery-ovaries"
							title="If you have had your ovaries removed, how old were you?"
							bind:selection={$surgeries.ovariesRemoved}
							options={surgeryOptions.ovaries}
						/>
						<div class="-mt-2">
							<FreeTextEntry
								name="surgery-ovaries-age"
								bind:text={$surgeries.ovariesAge}
								context="years old"
								disabled={ovariesDisabled}
							/>
						</div>
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
					/>
					<SingleSelectQuestion
						name="habits-smoke"
						title="Do you currently smoke?"
						bind:selection={$habits.smoking}
						options={habitsOptions.smoking}
					/>
					<SingleSelectQuestion
						name="habits-alcohol"
						title="How much alcohol do you drink in a week?"
						bind:selection={$habits.alcohol}
						options={habitsOptions.alcohol}
					/>
				</QuestionColumn>
				<QuestionColumn>
					<MultiSelectQuestion
						name="habits-exercise"
						title="Please choose the statement(s) that best describe your exercise habits."
						subtitle="Choose all that apply."
						bind:selection={$habits.exercise}
						options={habitsOptions.exercise}
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
					/>
					<SingleSelectQuestion
						name="screening-pap"
						title="When was your last Pap test?"
						bind:selection={$screening.pap}
						options={screeningOptions.pap}
					/>
				</QuestionColumn>
				<QuestionColumn>
					<SingleSelectQuestion
						name="screening-bones"
						title="If you have had a bone density scan, have you been told that you have low bone density (e.g. osteopenia or osteoporosis)?"
						bind:selection={$screening.bones}
						options={screeningOptions.bones}
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
					/>
				</QuestionColumn>
				<QuestionColumn>
					<MultiSelectQuestion
						name="genetics-family"
						title="Please indicate if you have a family history of any of the following conditions and which relative had the condition."
						subtitle="Choose all that apply."
						bind:selection={$genetics.family}
						options={geneticsOptions.family}
					/>
				</QuestionColumn>
			</QuestionBlock>
		</Card>
	</form>

	<div class="flex flex-row justify-center my-8">
		<a
			href="/results"
			class="text-xl font-body rounded-full bg-title text-white py-2 px-6 shadow-lg"
		>
			<div class="small-capper">Generate History Summary</div>
		</a>
	</div>
</div>

<style>
	.small-capper {
		font-variant: small-caps;
	}
</style>
