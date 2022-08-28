export const medicationOptions = {
  medications: [
    { id: 'tamoxifen', description: 'Tamoxifen' },
    { id: 'thyroid', description: 'Thyroid supplementation' },
    { id: 'blood-pressure', description: 'Blood pressure medication' },
    { id: 'migraine', description: 'Migraine medication' },
    { id: 'anxiety', description: 'Anxiety or Depression medication(s)' },
    { id: 'sleep', description: 'Sleep aid medication' },
    {
      id: 'menopause',
      description: 'Medication to help my menopause symptoms',
      answer: 'Medication(s) to help your menopause symptoms',
      suboptions: [
        {
          id: 'menopause-hormone',
          description: 'Hormone therapy I can get from my local drug store.',
          answer: 'hormone therapy you can find at the local drug store',
        },
        {
          id: 'menopause-compound',
          description: 'Compounded hormone therapy (e.g., bioidentical hormone therapy)',
          answer: 'compounded hormone therapy (e.g., bioidentical hormone therapy)'
        },
        {
          id: 'menopause-other',
          description: 'Non-hormonal medication',
          answer: 'non-hormonal medication',
        },
      ]
    },
  ],
  allergies: [
    { id: 'no', description: 'I have no medication allergies.' },
    { id: 'yes', description: 'I have allergies and they are:' },
  ],
}