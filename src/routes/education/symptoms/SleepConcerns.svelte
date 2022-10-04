<script>
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import SubSection from '$lib/layouts/SubSection.svelte';
	import EducationSubTitle from '$lib/titles/EducationSubTitle.svelte';
	import { menopause } from '../../../store';
</script>

<div class="my-4">
	<EducationSubTitle>Sleep Concerns</EducationSubTitle>
	<Paragraph>
		Disrupted sleep and poor sleep quality is a common issue for many women in the menopausal
		transition, affecting about <b>30% of menopausal people</b>. Vasomotor symptoms, like hot
		flashes and night sweats, can cause significant sleep disturbance. Sleep can also be affected by
		many other things, including stress, sleep apnea, restless leg syndrome, overactive bladder,
		certain medications and a history of difficulty with sleep.
	</Paragraph>

	<SubSection title="Addressing Sleep Concerns">
		<Paragraph>
			<b>Sleep hygiene is an important part of management of sleep disturbances.</b> This includes maintenance
			of the same bedtime and wake up time, using the bedroom only for sleep and intimate encounters,
			limiting use of electronics in the hours leading up to bed time, and avoiding alcohol and caffeine.
		</Paragraph>
		<Paragraph>
			There is very good evidence that <b>cognitive behavioural therapy</b> can help to treat insomnia.
		</Paragraph>
		<Paragraph>
			People who have sleep disturbances due to sleep apnea, restless leg syndrome, or overactive
			bladder may require other medical interventions and should speak to their healthcare provider.
		</Paragraph>
		{#if $menopause.sleep.includes('sweat')}
			<Paragraph customized>
				<b>
					Sleep disturbances that are secondary to night sweats can often be helped if vasomotor
					symptoms are treated. You have indicated you have vasomotor symptoms.
				</b>
				These may be affecting your sleep. Please review treatment options and considerations that might
				be right for you in the information above.
			</Paragraph>
		{/if}
		{#if $menopause.sleep.includes('void')}
			<Paragraph customized>
				<b>You have indicated that you wake up at night to use the bathroom.</b>
				Speak to your doctor about this, as there may be other medical interventions suited to your issue.
			</Paragraph>
		{/if}
	</SubSection>
</div>
