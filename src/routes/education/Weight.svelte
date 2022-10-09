<script>
	import ResponseDisplay from '$lib/answers/ResponseDisplay.svelte';
	import Card from '$lib/layouts/Card.svelte';
	import Content from '$lib/layouts/Content.svelte';
	import Image from '$lib/layouts/Image.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
	import { bmi } from '../../store';
</script>

<div class="container mx-auto px-4">
	<Card>
		<EducationTitleBar>Menopausal Weight Changes</EducationTitleBar>
		<Content>
			<Image>
				<img class="max-w-[250px]" src="/images/weight_scale.png" alt="Weight scale" />
			</Image>
			<Paragraph>
				Weight gain and control is a common concern around perimenopause and menopause.
				<b>The average patient gains 2 kg throughout the menopausal transition.</b> Energy requirements
				decrease as age progresses. In order to maintain or decrease weight, menopausal people need to
				restrict caloric intake and increase physical activity in comparison to in the pre-menopausal
				phase.
			</Paragraph>
			{#if $bmi && Number($bmi) > 25}
				<Paragraph customized>
					<b>Based on your current weight and height, your body mass index (BMI) is</b>
					<ResponseDisplay response={$bmi} context={'kg/m²'} />
					<b>, which is a higher BMI than typically recommended.</b>
				</Paragraph>
				<Paragraph>
					Your doctor may recommend weight loss for many different reasons. In general, achieving
					and maintaining a healthy weight can help improve health in the short-term and reduce the
					risk of developing new health issues in the long-term.
				</Paragraph>
			{:else if $bmi && Number($bmi) > 20}
				<Paragraph customized>
					<b>Based on your current weight and height, your body mass index (BMI) is</b>
					<ResponseDisplay response={$bmi} context={'kg/m²'} />
					<b>, which is considered a normal BMI.</b>
				</Paragraph>
				<Paragraph>
					Maintaining a healthy weight can reduce the risk of developing new health issues in the
					long-term.
				</Paragraph>
			{:else}
				<Paragraph customized>
					<b>Based on your current weight and height, your body mass index (BMI) is</b>
					<ResponseDisplay response={$bmi} context={'kg/m²'} />
					<b>, which is a lower BMI than typically recommended.</b>
				</Paragraph>
				<Paragraph>
					Maintaining a healthy weight can reduce the risk of developing new health issues in the
					long-term.
				</Paragraph>
			{/if}
			<Paragraph>
				A healthy diet rich in vegetables, protein, and complex carbohydrates and regular exercise
				are important for achieving and maintaining a healthy weight. More information about
				exercise recommendations can be found in the <b>Exercise Section</b> below.
			</Paragraph>
		</Content>
	</Card>
</div>
