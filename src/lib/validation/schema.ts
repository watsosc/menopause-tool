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
  bleeding: yup.string().required(REQUIRED),
});

export const menopauseSchema = yup.object().shape({
  symptoms: yup.array().of(yup.string()).optional(),
  other: yup.string().required(REQUIRED),
  sleep: yup.string().required(REQUIRED),
  mood: yup.string().required(REQUIRED),
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
  medicationSelection: yup.array().of(yup.string()).optional(),
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
  ovariesRemoved: yup.string().required(REQUIRED),
  ovariesAge: yup.string().when("ovariesRemoved", {
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
  family: yup.array().of(yup.string()).optional(),
})