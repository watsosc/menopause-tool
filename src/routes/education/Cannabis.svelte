<script>
	import Card from '$lib/layouts/Card.svelte';
	import Content from '$lib/layouts/Content.svelte';
	import Image from '$lib/layouts/Image.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<EducationTitleBar>Cannabis Use and Menopause</EducationTitleBar>
		<Content>
			<Image>
				<img class="max-w-[250px]" src="/images/cannabis.png" alt="Cannabis leaf" />
			</Image>
			<Paragraph customized>
				<b>You have indicated that you use cannabis regularly.</b> Patients use cannabis for many
				different reasons.
				<br /> <br />
				<b>
					Currently, there is insufficient evidence on the use of cannabis to manage menopausal
					symptoms such as irritability, mood changes, bone mass changes, sleep disturbances, or hot
					flashes.
				</b>
				Future research may provide more insight into this topic.
				<br /> <br />
				If you use cannabis with the goal of alleviating menopausal symptoms, it is important to discuss
				this with your healthcare provider to learn about other evidence-based treatment options, and
				to ensure there is no other underlying cause for your symptoms.
				<br /> <br />
				In general, frequent or intensive cannabis use is not recommended as it is associated with higher
				risks of adverse health and social outcomes.
			</Paragraph>
		</Content>
	</Card>
</div>
