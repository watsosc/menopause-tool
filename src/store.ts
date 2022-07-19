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
});

export const treatment = writable({
  all: [],
  current: [],
  interested: [],
  medication: '',
});