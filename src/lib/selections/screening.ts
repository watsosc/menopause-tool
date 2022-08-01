export const screeningOptions = {
  mammogram: [
    {
      id: 'young',
      description: 'I don\'t get mammograms yet because I am too young to start screening.',
      answer: 'You are too young to begin screening.'
    },
    {
      id: 'last-year',
      description: 'Within 1 year',
      answer: 'You have had a mammogram within the last year.'
    },
    {
      id: 'two-year',
      description: 'Within 2 years',
      answer: 'You have had a mammogram within the last 2 years.'
    },
    {
      id: 'overdue',
      description: 'I am overdue for a mammogram.',
      answer: 'You have had a mammogram within the last 2 years.'
    },
  ],
  pap: [
    {
      id: 'never',
      description: 'I have never had a Pap test.',
      answer: 'You have never had a Pap test.'
    },
    {
      id: 'three-years',
      description: 'I have had a Pap test within 3 years.',
      answer: 'You have had a normal Pap test within the last 3 years.'
    },
    {
      id: 'overdue',
      description: 'I am overdue for a Pap test.',
      answer: 'You are overdue for a Pap test.'
    },
    {
      id: 'not-required',
      description: 'I am no longer required to get a Pap test.',
      answer: 'You are no longer required to have Pap tests.'
    },
  ],
  bones: [
    {
      id: 'never',
      description: 'I have never had a bone density scan.',
      answer: 'You have never had a bone density scan.'
    },
    {
      id: 'normal',
      description: 'I have had a bone density scan and it was normal.',
      answer: 'You have had a bone density scan and it was normal.'
    },
    {
      id: 'low',
      description: 'I have had a bone density scan and I was told I had low bone density.',
      answer: 'You have had a bone density scan and were told you had low bone density.'
    }
  ],
}