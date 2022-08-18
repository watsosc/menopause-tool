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

const getAnswer = (list: SelectOption[], response: string) => {
  const selection = list.find((option: SelectOption) => option.id === response);

  return selection?.answer || selection?.description;
};

const getMultiSelectList = (list: SelectOption[], selected: string[]) => {
  if (selected.length === 1) {
    return list.find((option: SelectOption) => selected[0] === option.id)?.answer || '';
  }

  const options = list
    .filter((option: SelectOption) => selected.includes(option.id))
    .map((option: SelectOption) => option.answer)
    .join(', ');

  return options.replace(/,(?!.*,)/gmi, ' and');
};

const getMultiSelectAnswer = (
  list: SelectOption[],
  selected: string[],
  formatter: (x: string, y: string) => string
): string[] => {
  return list
    .filter((option: SelectOption) => selected.includes(option.id))
    .map((option: SelectOption): string => {
      const response = option.answer || option.description;
      if (!option.suboptions) {
        return response;
      }

      const subSelection = selected.filter(
        (selection) => option.suboptions?.some(
          (suboption: SelectOption) => suboption.id === selection
        )
      )
      return formatter(response, getMultiSelectList(option.suboptions, subSelection));
    });
};

export {
  getAnswer,
  getMultiSelectList,
  getMultiSelectAnswer,
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