export const menopauseOptions = {
  symptoms: [
    { id: 'hot-flash', description: 'Hot flashes' },
    { id: 'night-sweat', description: 'Night sweats' },
    { id: 'vaginal-dryness', description: 'Vaginal dryness or vaginal itch' },
    { id: 'poor-sleep', description: 'Poor sleep' },
    { id: 'low-libido', description: 'Lower libido (e.g., sex drive)' },
    { id: 'brain-fog', description: '\'Brain fog\'' },
    { id: 'bad-mood', description: 'Worsening mood, anxiery and/or irritability' },
  ],
  other: [
    { id: 'no', description: 'I am most bothered by a symptom(s) on the list above.' },
    { id: 'yes', description: 'I am suffering from:' }
  ],
  sleep: [
    {
      id: 'fine',
      description: 'My sleep is fine.',
      answer: 'Your sleep is fine.',
    },
    {
      id: 'sweat',
      description: '<b>Yes</b>, I am waking with a night sweat.',
      answer: 'You are waking with a night sweat.',
    },
    {
      id: 'void',
      description: '<b>Yes</b>, I am waking at night because I have to void.',
      answer: 'You are waking to void.',
    },
    {
      id: 'other',
      description: '<b>No</b>, I am waking at night for another reason.',
      answer: 'You are waking at night for another reason.',
    },
  ],
  depression: [
    {
      id: 'fine',
      description: 'My mood is fine.',
      answer: 'Your mood is fine.',
    },
    {
      id: 'struggling',
      description: 'I am struggling with my mood and it only started around the time of menopause.',
      answer: 'You are struggling with your mood and it only started around the time of menopause.',
    },
    {
      id: 'longstanding',
      description: '<b>Yes</b>, I have a history of longstanding depression and/or anxiety.',
      answer: 'You have a history of longstanding depression and/or anxiety.',
    },
    {
      id: 'postpartum',
      description: '<b>Yes</b>, I have a history of postpartum depression.',
      answer: 'You have a history of postpartum depression.',
    },
  ]
}