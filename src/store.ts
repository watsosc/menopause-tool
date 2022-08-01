import { writable } from "svelte/store";

export const basics = writable({
  age: '',
  heightFeet: '',
  heightInch: '',
  weight: '',
  period: '',
  bleeding: '',
});

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