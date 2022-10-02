<script>
	import Card from '$lib/layouts/Card.svelte';
	import QuestionBlock from '$lib/layouts/QuestionBlock.svelte';
	import MainTitle from '$lib/titles/MainTitle.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<MainTitle colour="[#000000]">
			<h1 class="small-capper">Menopause History Summary</h1>
		</MainTitle>
		<QuestionBlock>
			<p class="text-xl font-body">
				Please review the history summary below and ensure your answers are correct. You can print
				your history summary and bring it to your healthcare provider. At the bottom of this page,
				there is an option for you to access and print your personalized Menopause Education
				Package.
			</p>
		</QuestionBlock>
	</Card>
</div>

<style>
	.small-capper {
		font-variant: small-caps;
	}
</style>
