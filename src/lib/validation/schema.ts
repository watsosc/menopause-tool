import * as yup from 'yup';

const REQUIRED = "This field is required."
const NOT_NUMBER_FORMAT = "Your entry must be a number."

export const basicsSchema = yup.object().shape({
  age: yup.number().typeError(NOT_NUMBER_FORMAT).required(REQUIRED),
  heightFeet: yup.number().typeError(NOT_NUMBER_FORMAT).required(REQUIRED),
  heightInch: yup.number().typeError(NOT_NUMBER_FORMAT).required(REQUIRED),
  weight: yup.number().typeError(NOT_NUMBER_FORMAT).required(REQUIRED),
  period: yup.string().required(REQUIRED),
  bleeding: yup.string().required(REQUIRED),
});