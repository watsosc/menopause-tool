import { writable } from "svelte/store";

const DEFAULT_STRING = "Enter value";

export const basics = writable({
  age: DEFAULT_STRING,
  heightFeet: DEFAULT_STRING,
  heightInch: DEFAULT_STRING,
  weight: DEFAULT_STRING,
})