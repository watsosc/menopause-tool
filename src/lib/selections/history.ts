export const historyOptions = {
  conditions: [
    { id: 'breast-cancer', description: 'Breast Cancer' },
    { id: 'endo-cancer', description: 'Endometrial Cancer' },
    { id: 'ovarian-cancer', description: 'Ovarian Cancer' },
    { id: 'heart-disease', description: 'Coronary Heart Disease' },
    { id: 'heart-attack', description: 'Heart Attack' },
    { id: 'stroke', description: 'Stroke' },
    { id: 'blood-clot', description: 'Blood Clot (e.g., leg, lung, or elsewhere)' },
    { id: 'thrombo', description: 'Thrombophilia' },
    { id: 'liver-disease', description: 'Liver Disease' },
    { id: 'blood-pressure', description: 'High Blood Pressure' },
    { id: 'migraine', description: 'Migraine Headaches' },
    { id: 'endo', description: 'Endometriosis' },
    { id: 'other-cancer', description: 'A cancer other than breast, endometrial, or ovarian.' },
  ],
  bloodPressure: [
    { id: 'no', description: 'I do not have a history of high blood pressure.' },
    { id: 'controlled', description: 'I have high blood pressure but it is controlled.' },
    { id: 'uncontrolled', description: 'I have high blood pressure and it is <b>not</b> controlled well.' },
  ],
}