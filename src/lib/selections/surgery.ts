export const surgeryOptions = {
  surgeries: [
    { id: 'hysterectomy', description: 'Hysterectomy' },
    { id: 'bilateral', description: 'Bilateral salpingo-oophorectomy (removal of ovaries and fallopian tubes)' },
    {
      id: 'endometriosis',
      description: 'Surgery for endometriosis',
      suboptions: [
        { id: 'endometriosis-diagnostic', description: 'Procedure to diagnose and/or resect endometriosis but <b>not</b> removal of ovaries and/or uterus' },
        { id: 'endometriosis-uterus', description: 'Removal of uterus and ovaries' },
        { id: 'endometriosis-ovaries', description: 'Removal of both ovaries' },
      ]
    },
  ],
  ovaries: [
    { id: 'no', description: 'I have never had my ovaries removed.' },
    { id: 'yes', description: 'I have had my ovaries removed and I was:' },
  ],
}