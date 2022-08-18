import * as yup from 'yup';

const REQUIRED = "This field is required.";
const REQUIRED_WHEN = (field: string) => `This field is required when <i>${field}</i> is selected.`;
const NOT_NUMBER_FORMAT = "Your entry must be a number.";

export const basicsSchema = yup.object().shape({
  age: yup.number().typeError(NOT_NUMBER_FORMAT).required(REQUIRED),
  heightFeet: yup.number().typeError(NOT_NUMBER_FORMAT).required(REQUIRED),
  heightInch: yup.number().typeError(NOT_NUMBER_FORMAT).required(REQUIRED),
  weight: yup.number().typeError(NOT_NUMBER_FORMAT).required(REQUIRED),
  period: yup.string().required(REQUIRED),
  bleeding: yup.string().when("period", {
    is: (value: string) => value === 'one-year' || value === 'ten-year',
    then: yup.string().required(REQUIRED_WHEN("I have not had my period in over a year")),
  }),
});

export const menopauseSchema = yup.object().shape({
  symptoms: yup.array().of(yup.string()).optional(),
  other: yup.string().required(REQUIRED),
  sleep: yup.string().when("symptoms", {
    is: (value: string[]) => value?.includes('poor-sleep'),
    then: yup.string().required(REQUIRED_WHEN("poor sleep")),
  }),
  mood: yup.string().when("symptoms", {
    is: (value: string[]) => value?.includes('bad-mood'),
    then: yup.string().required(REQUIRED_WHEN("bad mood")),
  }),
  otherEntry: yup.string().when("other", {
    is: "yes",
    then: yup.string().required(REQUIRED_WHEN("I am suffering from"))
  }),
});

export const treatmentsSchema = yup.object().shape({
  all: yup.array().of(yup.string()).optional(),
  current: yup.array().of(yup.string()).optional(),
  interested: yup.array().of(yup.string()),
  helping: yup.string().when("current", {
    is: (value: string[]) => value.length > 0,
    then: yup.string().required(REQUIRED_WHEN("current treatments"))
  }),
});

export const medicationsSchema = yup.object().shape({
  medicationSelection: yup.array().of(yup.string()).test({
    name: 'sub-select',
    message: "Must select a sub-option when 'Medication to help my menopause symptoms' is selected",
    test: (value) => {
      const containsMenopause = Boolean(value?.includes('menopause'));
      const containsSuboption = Boolean(value?.reduce(
        (acc, current) => acc || (current !== undefined &&
          ["menopause-hormone", "menopause-compound", "menopause-other"].includes(current)), false));

      return !containsMenopause || containsSuboption;
    }
  }),
  medicationEntry: yup.string().optional(),
  allergiesSelect: yup.string().required(REQUIRED),
  allergiesText: yup.string().when("allergiesSelect", {
    is: "yes",
    then: yup.string().required(REQUIRED_WHEN("I have allergies"))
  }),
});

export const historySchema = yup.object().shape({
  conditions: yup.array().of(yup.string()).optional(),
  bloodPressure: yup.string().required(REQUIRED),
});

export const surgeriesSchema = yup.object().shape({
  received: yup.array().of(yup.string()).optional(),
  ovariesRemoved: yup.string().when("received", {
    is: (values: string[]) => values.includes('bilateral'),
    then: yup.string().required(REQUIRED),
  }),
  ovariesAge: yup.number().when("ovariesRemoved", {
    is: "yes",
    then: yup.number().typeError(NOT_NUMBER_FORMAT).required(REQUIRED_WHEN("I have had my ovaries removed"))
  }),
});

export const habitsSchema = yup.object().shape({
  cannabis: yup.string().required(REQUIRED),
  smoking: yup.string().required(REQUIRED),
  alcohol: yup.string().required(REQUIRED),
  exercise: yup.string().required(REQUIRED),
});

export const screeningSchema = yup.object().shape({
  mammogram: yup.string().required(REQUIRED),
  pap: yup.string().required(REQUIRED),
  bones: yup.string().required(REQUIRED),
});

export const geneticSchema = yup.object().shape({
  genes: yup.array().of(yup.string()).optional(),
  family: yup.array().of(yup.string()).test({
    name: 'sub-select',
    message: "Must select which relative had the selected condition(s).",
    test: (value) => {
      if (value === undefined) {
        return true;
      }
      const selectedConditions = value.filter(
        (val) => !val?.endsWith('-close') && !val?.endsWith('-distant'));
      const validConditions = selectedConditions.length === 0 ||
        selectedConditions.every(
          (cond) => value.includes(`${cond}-close`) || value.includes(`${cond}-distant`));

      return validConditions;
    }
  }),
})

export const schema = basicsSchema
  .concat(menopauseSchema)
  .concat(treatmentsSchema)
  .concat(medicationsSchema)
  .concat(historySchema)
  .concat(surgeriesSchema)
  .concat(habitsSchema)
  .concat(screeningSchema)
  .concat(geneticSchema);