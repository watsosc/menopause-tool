export interface SelectOption {
  id: string;
  description: string;
  answer?: string | undefined;
  suboptions?: SelectOption[] | undefined;
}