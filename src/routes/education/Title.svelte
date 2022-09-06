<script lang="ts">
	import Card from '$lib/layouts/Card.svelte';
	import QuestionBlock from '$lib/layouts/QuestionBlock.svelte';
	import MainTitle from '$lib/titles/MainTitle.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<MainTitle colour="[#000000]">
			<h1 class="small-capper">Personalized Menopause Education Package</h1>
		</MainTitle>
		<QuestionBlock>
			<p class="text-xl font-body">
				You should now have completed the <b>Menopause History Form</b> and reviewed your
				<b>Menopause History Summary</b>.
				<b>
					We are pleased to provide you with a personalized Menopause Education Package to help you
					learn more about your menopausal symptoms and treatments that might work for you.
				</b>
				<br /><br />
				Your <b>Menopause Education Package</b> is for informational purposes only. The information presented
				should not be relied on as a substitute for medical advice, dual independent judgement or proper
				assessment by a doctor, with consideration of the circumstances of your case and individual needs.
				The information presented here is not intended to take the place of professional medical care.
			</p>
		</QuestionBlock>
	</Card>
</div>
