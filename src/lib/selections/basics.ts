export const basicsOptions = {
  period: [
    {
      id: 'regular',
      description: 'I am still getting my period <b>regularly</b>.',
      answer: 'you are still getting your period regularly',
    },
    {
      id: 'irregular',
      description: 'I still get my period but it is <b>irregular</b>. Sometimes I skip many months, but I have <b>never gone more than 1 year</b> without a period.',
      answer: 'you still get your period but it is <b>irregular</b>. Sometimes you skip many months, but you have <b>never gone more than 1 year</b> without a period'
    },
    {
      id: 'one-year',
      description: 'It has been <b>at least 1 year</b> since my last period but <b>less than 10 years</b> since my last period.',
      answer: 'have gone <b>at least 1 year</b> since your last period but <b>less than 10 years</b> since your last period'
    },
    {
      id: 'ten-year',
      description: 'It has been <b>more than 10 years</b> since my last period.',
      answer: 'have gone <b>more than 10 years</b> since your last period'
    },
    {
      id: 'surgery',
      description: 'I had a uterine surgery (e.g., hysterectomy, uterine ablation) and that stopped my periods but I still have my ovaries.',
      answer: ' have had a uterine surgery (e.g., hysterectomy, uterine ablation) and that stopped your periods but you still have your ovaries'
    },
    {
      id: 'medication',
      description: 'I use a medication that has stopped my periods (e.g., Lupron, Mirena IUD, birth control pill).',
      answer: ' are using a medication that has stopped my periods (e.g., Lupron, Mirena IUD, birth control pill)'
    }
  ],
  menopause: [
    { id: 'yes', description: 'Yes' },
    { id: 'no', description: 'No' },
    { id: 'not-applicable', description: 'It has been less than a year since my last period.' },
  ]
}