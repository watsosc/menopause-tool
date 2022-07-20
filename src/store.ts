import { writable } from "svelte/store";

export const basics = writable({
  age: '',
  heightFeet: '',
  heightInch: '',
  weight: '',
  period: '',
  bleeding: '',
});

export const menopause = writable({
  symptoms: [],
  other: '',
  sleep: '',
  mood: '',
  otherEntry: '',
});

export const treatment = writable({
  all: [],
  current: [],
  interested: [],
  medication: '',
});

export const medication = writable({
  medicationSelection: [],
  medicationEntry: '',
  allergiesSelect: '',
  allergiesText: '',
});

export const history = writable({
  conditions: [],
  bloodPressure: '',
});

export const surgeries = writable({
  received: [],
  ovariesRemoved: '',
  ovariesAge: '',
});

export const habits = writable({
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

export const genetics = writable({
  genes: [],
  family: [],
});