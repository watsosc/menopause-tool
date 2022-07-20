export const screeningOptions = {
  mammogram: [
    { id: 'young', description: 'I don\'t get mammograms yet because I am too young to start screening.' },
    { id: 'last-year', description: 'Within 1 year' },
    { id: 'two-year', description: 'Within 2 years' },
    { id: 'overdue', description: 'I am overdue for a mammogram.' },
  ],
  pap: [
    { id: 'never', description: 'I have never had a Pap test.' },
    { id: 'three-years', description: 'I have had a Pap test within 3 years.' },
    { id: 'overdue', description: 'I am overdue for a Pap test.' },
    { id: 'not-required', description: 'I am no longer required to get a Pap test.' },
  ],
  bones: [
    { id: 'never', description: 'I have never had a bone density scan.' },
    { id: 'normal', description: 'I have had a bone density scan and it was normal.' },
    { id: 'low', description: 'I have had a bone density scan and I was told I had low bone density.' }
  ],
}