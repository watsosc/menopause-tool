export const basicsOptions = {
  earlyMenopause: [
    {
      id: 'before-forty',
      description: 'I went through menopause <b>before the age of 40 years old</b>.',
      answer: 'You indicated you experienced menopause <b>before the age of 40 years old.</b>',
    },
    {
      id: 'after-forty',
      description: 'I went through menopause <b>between 40 and 45 years old</b>.',
      answer: 'You indicated you experienced menopause <b>between 40 and 45 years old</b>.',
    },
    {
      id: 'none',
      description: 'I don\'t think either statement applies to me.',
      answer: 'You have <b>not experienced</b> premature or early menopause.'
    },
  ],
  period: [
    {
      id: 'regular',
      description: 'I am still getting my <b>natural period regularly</b>.',
      answer: 'You are still getting a <b>natural period regularly</b>',
    },
    {
      id: 'irregular',
      description: 'I still get a natural period but it is <b>irregular</b>. Sometimes I skip many months, but I have <b>never gone more than 1 year without a period</b>.',
      answer: 'You still get your period but it is <b>irregular</b>. Sometimes you skip many months, but you have <b>never gone more than 1 year without a period</b>'
    },
    {
      id: 'one-year',
      description: 'It has been <b>at least 1 year, but less than 10 years</b> since my last natural period.',
      answer: 'You have gone <b>at least 1 year, but less than 10 years</b> since your last natural period'
    },
    {
      id: 'ten-year',
      description: 'It has been <b>more than 10 years</b> since my last natural period.',
      answer: 'You have gone <b>more than 10 years</b> since your last natural period'
    },
    {
      id: 'surgery',
      description: 'I have had <b>uterine surgery that stopped my periods (e.g., hysterectomy, uterine ablation).</b>',
      answer: 'You have had <b>uterine surgery that stopped your periods (e.g., hysterectomy, uterine ablation)</b>'
    },
    {
      id: 'ovarian-surgery',
      description: 'I have had <b>surgery to remove BOTH ovaries.</b>',
      answer: 'You have had <b>surgery to remove BOTH ovaries</b>'
    },
    {
      id: 'medical-treatment',
      description: 'I have had <b>medical treatment (e.g., chemotherapy, radiation therapy)</b> that affected my ovaries. The treatment put me into perimenopause or menopause.',
      answer: 'You have had <b>medical treatment (e.g., chemotherapy, radiation therapy)</b> that affected your ovaries. The treatment put you into perimenopause or menopause'
    },
    {
      id: 'medication-stop',
      description: 'I am unsure if I still have a natural period. <b>I take medication that has stopped my periods (e.g., Lupron, Mirena IUD, birth control pill).</b>',
      answer: 'You are unsure if you still have a natural period. <b>You take medication that has stopped your periods (e.g., Lupron, Mirena IUD, birth control pill)</b>'
    },
    {
      id: 'medication-expected',
      description: 'I am unsure if I can still have a natural period. <b>I take medication that gives me an expected period (e.g., birth control pill, hormone therapy).</b>',
      answer: 'You are unsure if you can still have a natural period. <b>You take medication that gives you an expected period (e.g., birth control pill, hormone therapy)</b>'
    }
  ],
  menopause: [
    { id: 'yes', description: 'Yes' },
    { id: 'no', description: 'No' },
  ]
}