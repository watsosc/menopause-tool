import { writable } from "svelte/store";

export const basics = writable({
  age: '',
  heightFeet: '',
  heightInch: '',
  weight: '',
  period: '',
  bleeding: '',
});