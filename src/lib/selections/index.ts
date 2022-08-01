import { basicsOptions } from './basics';
import { menopauseOptions } from './menopause';
import { treatmentOptions } from './treatment';
import { medicationOptions } from './medication';
import { habitsOptions } from './habits';
import { geneticsOptions } from './genetics';
import { screeningOptions } from './screening';
import { surgeryOptions } from './surgery';
import { historyOptions } from './history';
import type { SelectOption } from './selectOption';

const getDescription = (list: SelectOption[], response: string) => {
  const selection = list.find(
    (option: SelectOption) => option.id == response
  );

  return selection?.description;
};

const getAnswer = (list: SelectOption[], response: string) => {
  const selection = list.find((option: SelectOption) => option.id == response);

  return selection?.answer;
};

const getMultiSelectList = (list: SelectOption[], selected: string[]) => {
  const options = list
    .filter((option: SelectOption) => selected.includes(option.id))
    .map((option: SelectOption) => option.answer)
    .join(', ');

  return options.replace(/,(?!.*,)/gmi, ' and');
};

export {
  getDescription,
  getAnswer,
  getMultiSelectList,
  basicsOptions,
  menopauseOptions,
  treatmentOptions,
  medicationOptions,
  habitsOptions,
  geneticsOptions,
  screeningOptions,
  surgeryOptions,
  historyOptions,
};