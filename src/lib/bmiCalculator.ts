export const bmi = (weight: string, heightFeet: string, heightInch: string) => {
  if (weight === '' || heightFeet === '') {
    return null;
  } else {
    return (Number(weight) / (Number(heightFeet) * 12 + Number(heightInch)) ** 2) * 703;
  }
};