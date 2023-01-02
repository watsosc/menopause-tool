<script>
	import Card from '$lib/layouts/Card.svelte';
	import Content from '$lib/layouts/Content.svelte';
	import Image from '$lib/layouts/Image.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import SubSection from '$lib/layouts/SubSection.svelte';
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
</script>

<Card>
	<EducationTitleBar>Your Menopausal Mood Symptoms</EducationTitleBar>
	<Content>
		<Image>
			<img
				class="max-w-[250px]"
				src="/images/symptoms_mood.png"
				alt="Woman half happy and half sad"
			/>
		</Image>
		<Paragraph>
			<b>Depression is a common condition that affects women more than men.</b> Mood can be affected
			by many factors, including changes in hormones associated with menopause, menopausal symptoms,
			sleep disturbance, and chronic medical conditions.
			<b>Depressive symptoms can increase in the menopausal transition.</b>
			Women who have a history of depression, major depressive episodes, premenstrual syndrome (PMS)
			and postpartum depression may be at higher risk of having these symptoms occur.
		</Paragraph>
		<Paragraph>
			<b>
				The menopausal transition can also be a time where women are at risk of developing anxiety,
				either new onset, or recurrent.
			</b>
			This can also be associated with the frequency and intensity of vasomotor symptoms, such as hot
			flashes and night sweats.
		</Paragraph>
		<SubSection title="Addressing Mood Concerns">
			<Paragraph>
				Antidepressants and cognitive behavioural therapy are first line treatments for depressive
				disorders and depressive symptoms for menopausal women. It is important to determine whether
				mood changes started at the time of menopause, or are pre-existing. For women who are
				already taking an antidepressant medication, some dose changes may be required around the
				time of menopause to improve mood. Some women will have mood benefits from menopausal
				hormone therapy, especially women in perimenopause. For women experiencing both VMS and mood
				symptoms, MHT can be helpful. There is also evidence for regular exercise and
				mindfulness-based therapies to improve mood.
			</Paragraph>
		</SubSection>
	</Content>
</Card>
