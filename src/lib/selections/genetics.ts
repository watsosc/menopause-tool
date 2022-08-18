export const geneticsOptions = {
  genes: [
    {
      id: 'brca1',
      description: 'BRCA1'
    },
    {
      id: 'brca2',
      description: 'BRCA2'
    },
    {
      id: 'clot',
      description: 'A gene that increases my risk of blood clot (e.g., Factor V Leiden)',
      answer: 'a gene that increases your risk of blood clot'
    },
    {
      id: 'risk',
      description: 'I have been told I carry another gene that increases my risk of developing a certain condition.',
      answer: 'a gene that increases your risk of developing certain health conditions but it is <b>not</b> a BRCA gene or a gene that increases your risk of blood clot'
    },
  ],
  family: [
    {
      id: 'breast-cancer', description: 'Breast Cancer', suboptions: [
        {
          id: 'breast-cancer-close',
          description: 'Mother, father, sister or brother',
          answer: 'at least one first degree relative has/had this (e.g., mother, father, sister or brother)',
        },
        {
          id: 'breast-cancer-distant',
          description: 'Aunt, uncle or grandparent',
          answer: 'at least one second degree relative has/had this (e.g., aunt, uncle, grandparent)',
        },
      ]
    },
    {
      id: 'ovarian-cancer', description: 'Ovarian Cancer', suboptions: [
        {
          id: 'ovarian-cancer-close', description: 'Mother or sister',
          answer: 'at least one first degree relative has/had this (e.g., mother or sister)',
        },
        {
          id: 'ovarian-cancer-distant', description: 'Aunt or grandparent',
          answer: 'at least one second degree relative has/had this (e.g., aunt or grandparent)',
        },
      ]
    },
    {
      id: 'blood-clot', description: 'Blood Clot (leg or lungs)', suboptions: [
        {
          id: 'blood-clot-close', description: 'Mother, father, sister or brother',
          answer: 'at least one first degree relative had this (e.g., mother, father, sister or brother)',
        },
        {
          id: 'blood-clot-distant', description: 'Aunt, uncle or grandparent',
          answer: 'at least one second degree relative had this (e.g., aunt, uncle, grandparent)',
        },
      ]
    },
    {
      id: 'stroke', description: 'Stroke', suboptions: [
        {
          id: 'stroke-close', description: 'Mother, father, sister or brother',
          answer: 'at least one first degree relative had this (e.g., mother, father, sister or brother)',
        },
        {
          id: 'stroke-distant', description: 'Aunt, uncle or grandparent',
          answer: 'at least one second degree relative had this (e.g., aunt, uncle, grandparent)',
        },
      ]
    },
    {
      id: 'heart', description: 'Heart Attack', suboptions: [
        {
          id: 'heart-close', description: 'Mother, father, sister or brother',
          answer: 'at least one first degree relative had this (e.g., mother, father, sister or brother)',
        },
        {
          id: 'heart-distant', description: 'Aunt, uncle or grandparent',
          answer: 'at least one second degree relative had this (e.g., aunt, uncle, grandparent)',
        },
      ]
    },
  ],
}