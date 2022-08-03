import { derived, writable } from "svelte/store";

export const basics = writable({
  age: '',
  heightFeet: '',
  heightInch: '',
  weight: '',
  period: '',
  bleeding: '',
});

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

type Menopause = {
  symptoms: string[];
  other: string;
  sleep: string;
  mood: string;
  otherEntry: string;
}
export const menopause = writable<Menopause>({
  symptoms: [],
  other: '',
  sleep: '',
  mood: '',
  otherEntry: '',
});

export const menopauseEntryDisabled = derived(
  menopause,
  $menopause => $menopause.other != 'yes'
)

type Treatment = {
  all: string[];
  current: string[];
  interested: string[];
  helping: string;
}
export const treatment = writable<Treatment>({
  all: [],
  current: [],
  interested: [],
  helping: '',
});

export const treatmentEntryDisabled = derived(
  treatment,
  $treatment => $treatment.current.length === 0
)

type Medication = {
  medicationSelection: string[];
  medicationEntry: string;
  allergiesSelect: string;
  allergiesText: string;
}
export const medication = writable<Medication>({
  medicationSelection: [],
  medicationEntry: '',
  allergiesSelect: '',
  allergiesText: '',
});

export const medicationEntryDisabled = derived(
  medication,
  $medication => $medication.allergiesSelect != 'yes'
)

type History = {
  conditions: string[];
  bloodPressure: string;
}
export const history = writable<History>({
  conditions: [],
  bloodPressure: '',
});

type Surgeries = {
  received: string[];
  ovariesRemoved: string;
  ovariesAge: string;
}
export const surgeries = writable<Surgeries>({
  received: [],
  ovariesRemoved: '',
  ovariesAge: '',
});

export const surgeriesEntryDisabled = derived(
  surgeries,
  $surgeries => $surgeries.ovariesRemoved != 'yes'
)

type Habits = {
  cannabis: string;
  smoking: string;
  alcohol: string;
  exercise: string[];
}
export const habits = writable<Habits>({
  cannabis: '',
  smoking: '',
  alcohol: '',
  exercise: [],
});

export const screening = writable({
  mammogram: '',
  pap: '',
  bones: '',
});

type Genetics = {
  genes: string[];
  family: string[];
}
export const genetics = writable<Genetics>({
  genes: [],
  family: [],
});