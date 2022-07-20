export const geneticsOptions = {
  genes: [
    { id: 'brca1', description: 'BRCA1' },
    { id: 'brca2', description: 'BRCA2' },
    { id: 'clot', description: 'A gene that increases my risk of blood clot (e.g. Factor V Leiden)' },
    { id: 'risk', description: 'I have been told I carry another gene that increases my risk of developing a certain condition.' },
    { id: 'none', description: 'No, I have no been told I carry any of these genes.' },
  ],
  family: [
    {
      id: 'breast-cancer', description: 'Breast Cancer', suboptions: [
        { id: 'breast-cancer-close', description: 'Mother, father, sister or brother' },
        { id: 'breast-cancer-distant', description: 'Aunt, uncle or grandparent' },
      ]
    },
    {
      id: 'ovarian-cancer', description: 'Ovarian Cancer', suboptions: [
        { id: 'ovarian-cancer-close', description: 'Mother or sister' },
        { id: 'ovarian-cancer-distant', description: 'Aunt or grandparent' },
      ]
    },
    {
      id: 'blood-clot', description: 'Blood Clot (leg or lungs)', suboptions: [
        { id: 'blood-clot-close', description: 'Mother, father, sister or brother' },
        { id: 'blood-clot-distant', description: 'Aunt, uncle or grandparent' },
      ]
    },
    {
      id: 'stroke', description: 'Stroke', suboptions: [
        { id: 'stroke-close', description: 'Mother, father, sister or brother' },
        { id: 'stroke-distant', description: 'Aunt, uncle or grandparent' },
      ]
    },
    {
      id: 'heart', description: 'Heart Attack', suboptions: [
        { id: 'heart-close', description: 'Mother, father, sister or brother' },
        { id: 'heart-distant', description: 'Aunt, uncle or grandparent' },
      ]
    },
  ],
}