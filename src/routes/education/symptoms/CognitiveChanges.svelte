<script>
	import Image from '$lib/layouts/Image.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import SubSection from '$lib/layouts/SubSection.svelte';

	import CollapsibleCard from '$lib/layouts/CollapsibleCard.svelte';
</script>

<CollapsibleCard title="Your Menopausal Cognitive Changes">
	<Image>
		<img class="max-w-[250px]" src="/images/symptoms_brainfog.png" alt="Woman in brain fog" />
	</Image>
	<Paragraph>
		Many women will report forgetfulness and difficulty with concentration during the menopausal
		transition, which is sometimes referred to as <b>“brain fog”</b>. This can worsen in the first
		year after the last menstrual period. Vasomotor symptoms, depression, and anxiety can also have
		an effect on cognitive function.
	</Paragraph>
	<SubSection title="Addressing Cognitive Concerns">
		<Paragraph>
			Cognitive function can be optimized by eating a healthy diet rich in vegetables and fish,
			quitting smoking and participating in regular exercise. Sometimes, the treatment of vasomotor
			symptoms and mood symptoms associated with menopause can also help to improve cognitive
			function, although studies have not shown that estrogen therapy improves cognitive function.
		</Paragraph>
		<Paragraph>
			If you are concerned about your cognition, speak to your doctor. Many conditions, other than
			menopause, can affect cognition. It is important for you to discuss your personal symptoms
			with a healthcare provider.
		</Paragraph>
	</SubSection>
</CollapsibleCard>
