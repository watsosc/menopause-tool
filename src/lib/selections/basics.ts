export const basicsOptions = {
  period: [
    { id: 'regular', description: 'I am still getting my period regularly.' },
    { id: 'irregular', description: 'I still get my period but it is <b>irregular</b>. Sometimes I skip many months, but I have <b>never gone more than 1 year</b> without a period.' },
    { id: 'one-year', description: 'It has been <b>at least 1 year</b> since my last period but <b>less than 10 years</b> since my last period.' },
    { id: 'ten-year', description: 'It has been <b>more than 10 years</b> since my last period.' },
    { id: 'surgery', description: 'I had a uterine surgery (e.g., hysterectomy, uterine ablation) and that stopped my periods but I still have my ovaries.' }
  ],
  menopause: [
    { id: 'yes', description: 'Yes' },
    { id: 'no', description: 'No' },
    { id: 'not-applicable', description: 'It has been less than a year since my last period.' },
  ]
}