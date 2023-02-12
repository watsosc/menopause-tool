<script lang="ts">
	import CollapsibleCard from '$lib/layouts/CollapsibleCard.svelte';
	import Image from '$lib/layouts/Image.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import { basics, screening, surgeries } from '../../store';

	const ovariesRemoved = $surgeries.received.includes('hysterectomy');
	const underSeventy = Number($basics.age) < 70;

	const postParagraph = `Talk to your healthcare provider to ensure you do not require ongoing cervical cancer screening.`;
</script>

<div class="container mx-auto px-4">
	<CollapsibleCard title="Cervical Cancer Screening">
		<Image>
			<img class="max-w-[250px]" src="/images/speculum.png" alt="Pap test" />
		</Image>
		<Paragraph>
			<b>
				Pap tests (also called “pap smears”) are performed to screen for pre-cancer and cancer cells
				of the cervix. Regular pap tests can facilitate early detection of abnormal cells in the
				cervix.
			</b>
		</Paragraph>
		{#if ovariesRemoved}
			<Paragraph customized>
				<b>You have indicated you have had a hysterectomy.</b> If your cervix was removed at the
				time of your hysterectomy (i.e., you underwent a <b>total hysterectomy</b>) and your pap
				tests have always been normal, you probably don’t require further pap tests.
				<br /><br />
				However, if you have had an abnormal pap test result in the past, you may require further screening.
				Talk to your healthcare provider about the screening recommendation that is right for you.
				<br /><br />
				If you had a <b>subtotal hysterectomy</b>, you should continue to have pap tests. Talk to
				your healthcare provider to determine when you should do your next pap test.
			</Paragraph>
		{:else if underSeventy && $screening.pap === 'never'}
			<Paragraph customized>
				<b>
					You have indicated that you have never had a pap test for cervical cancer screening.
				</b>
			</Paragraph>
			<Paragraph>
				<b>
					Cervical cancer screening recommendations vary between provinces. People with a cervix who
					are or have ever been sexually active should undergo regular pap tests.
				</b>
				<br /><br />
				In <u>Ontario, Canada</u> it is recommended that all people with a cervix who are younger
				than 70 years old have a pap test <b>every 3 years</b> to screen for cervical cancer.
				<b>Pap tests may need to be more frequent if the results are abnormal.</b>
			</Paragraph>
			<Paragraph>{postParagraph}</Paragraph>
		{:else if underSeventy && $screening.pap === 'three-years'}
			<Paragraph customized>
				<b>
					You have indicated that you are younger than 70 years old and your pap test was within the
					last 3 years.
				</b>
				As long as your pap tests have been normal, you are likely <u>up-to-date</u>
				on your cervical cancer screening.
				<b>Pap tests may need to be more frequent if the results are abnormal.</b>
				<br /><br />
				<b>Cervical cancer screening recommendations vary between provinces.</b> In
				<u>Ontario, Canada</u>
				it is recommended that all people with a cervix who are younger than 70 years old have a pap
				test <b>every 3 years</b> to screen for cervical cancer.
				<b>Pap tests may need to be more frequent if the results are abnormal.</b>
			</Paragraph>
			<Paragraph>{postParagraph}</Paragraph>
		{:else if underSeventy && $screening.pap === 'overdue'}
			<Paragraph customized>
				<b>
					You have indicated that you are younger than 70 years of age and that your pap test is
					overdue.
				</b>
				<br /><br />
				<b>Cervical cancer screening recommendations vary between provinces.</b> In
				<u>Ontario, Canada</u>
				it is recommended that all people with a cervix who are younger than 70 years old have a pap
				test <b>every 3 years</b> to screen for cervical cancer.
				<b>Pap tests may need to be more frequent if the results are abnormal.</b>
			</Paragraph>
			<Paragraph>{postParagraph}</Paragraph>
		{:else if !underSeventy}
			<Paragraph customized>
				<b> You have indicated that you are older than 70 years of age. </b>
				<br /><br />
				<b
					>Cervical cancer screening recommendations vary across provinces. People older than 70
					years of age usually don’t require regular pap tests to screen for cervical cancer.
				</b>
				However, if you have had an abnormal pap test result in the past 10 years, you may require screening
				beyond the age of 70.
			</Paragraph>
			<Paragraph>{postParagraph}</Paragraph>
		{/if}
	</CollapsibleCard>
</div>
