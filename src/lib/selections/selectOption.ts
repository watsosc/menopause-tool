export interface SelectOption {
  id: string;
  description: string;
  suboptions?: SelectOption[] | undefined;
}