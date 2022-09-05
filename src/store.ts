import { derived, writable } from "svelte/store";

const initializeBasics = () => ({
  age: '',
  heightFeet: '',
  heightInch: '',
  weight: '',
  period: '',
  bleeding: '',
});
export const basics = writable(initializeBasics());

export const bleedingEntryDisabled = derived(
  basics,
  $basics => !['one-year', 'ten-year'].includes($basics.period)
)

export const bmi = derived(
  basics,
  $basics => {
    if ($basics.weight === '' || $basics.heightFeet === '') {
      return null;
    } else {
      return ((
        Number($basics.weight) / (Number($basics.heightFeet) * 12 + Number($basics.heightInch)) ** 2
      ) * 703).toFixed(2);
    }
  }
)

const initializeMenopause = () => ({
  symptoms: [],
  other: '',
  sleep: [],
  mood: [],
  otherEntry: '',
});
type Menopause = {
  symptoms: string[];
  other: string;
  sleep: string[];
  mood: string[];
  otherEntry: string;
}
export const menopause = writable<Menopause>(initializeMenopause());

export const menopauseEntryDisabled = derived(
  menopause,
  $menopause => $menopause.other !== 'yes'
)

const initializeTreatment = () => ({
  all: [],
  current: [],
  interested: [],
  helping: '',
});
type Treatment = {
  all: string[];
  current: string[];
  interested: string[];
  helping: string;
}
export const treatment = writable<Treatment>(initializeTreatment());

export const treatmentEntryDisabled = derived(
  treatment,
  $treatment => $treatment.current.length === 0
)

const initializeMedication = () => ({
  medicationSelection: [],
  medicationEntry: '',
  allergiesSelect: '',
  allergiesText: '',
});
type Medication = {
  medicationSelection: string[];
  medicationEntry: string;
  allergiesSelect: string;
  allergiesText: string;
}
export const medication = writable<Medication>(initializeMedication());

export const medicationEntryDisabled = derived(
  medication,
  $medication => $medication.allergiesSelect !== 'yes'
)

const initializeHistory = () => ({
  conditions: [],
  bloodPressure: '',
});
type History = {
  conditions: string[];
  bloodPressure: string;
}
export const history = writable<History>(initializeHistory());

export const bloodPressureEntryDisabled = derived(
  history,
  $history => !$history.conditions.includes('blood-pressure')
);

export const initializeSurgeries = () => ({
  received: [],
  ovariesRemoved: '',
  ovariesAge: '',
});
type Surgeries = {
  received: string[];
  ovariesRemoved: string;
  ovariesAge: string;
}
export const surgeries = writable<Surgeries>(initializeSurgeries());

export const surgeriesOvariesDisabled = derived(
  surgeries,
  $surgeries => !$surgeries.received.includes('bilateral')
)

export const surgeriesEntryDisabled = derived(
  [surgeries, surgeriesOvariesDisabled],
  ([$surgeries, $surgeriesOvariesDisabled]) => $surgeriesOvariesDisabled || $surgeries.ovariesRemoved !== 'yes'
)

const initializeHabits = () => ({
  cannabis: '',
  smoking: '',
  alcohol: '',
  exercise: '',
});
type Habits = {
  cannabis: string;
  smoking: string;
  alcohol: string;
  exercise: string;
}
export const habits = writable<Habits>(initializeHabits());

const initializeScreening = () => ({
  mammogram: '',
  pap: '',
  bones: '',
});
export const screening = writable(initializeScreening());

const initializeGenetics = () => ({
  genes: [],
  family: [],
});
type Genetics = {
  genes: string[];
  family: string[];
}
export const genetics = writable<Genetics>(initializeGenetics());

export const reset = () => {
  basics.set(initializeBasics());
  menopause.set(initializeMenopause());
  treatment.set(initializeTreatment());
  medication.set(initializeMedication());
  history.set(initializeHistory());
  surgeries.set(initializeSurgeries());
  habits.set(initializeHabits());
  screening.set(initializeScreening());
  genetics.set(initializeGenetics());
}

export const store = derived(
  [basics, menopause, treatment, medication, history, surgeries, habits, screening, genetics],
  ([$basics,
    $menopause,
    $treatment,
    $medication,
    $history,
    $surgeries,
    $habits,
    $screening,
    $genetics]) => ({
      ...$basics,
      ...$menopause,
      ...$treatment,
      ...$medication,
      ...$history,
      ...$surgeries,
      ...$habits,
      ...$screening,
      ...$genetics,
    })
)