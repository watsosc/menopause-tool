<script lang="ts">
	import { bmi } from '$lib/bmiCalculator';

	import { Card, Content } from '$lib/layouts';
	import ResponseDisplay from '$lib/answers/ResponseDisplay.svelte';
	import { basics } from '../../store';
	import SummaryTitleBar from '$lib/titles/SummaryTitleBar.svelte';

	$: bmiValue = bmi($basics.weight, $basics.heightFeet, $basics.heightInch)?.toFixed(2);
</script>

<div class="container mx-auto px-4">
	<Card>
		<SummaryTitleBar>Menopause History Summary</SummaryTitleBar>
		<Content>
			<p class="font-body text-xl">
				Thank you for completing the Menopause History Form! We have summarized the information you
				have provided based on your responses to the history questions.
			</p>
			<p class="font-body text-xl mt-4">
				You are <ResponseDisplay response={$basics.age} context={'years old'} />. Your weight is
				<ResponseDisplay response={$basics.weight} context={'pounds'} />
				and you are <ResponseDisplay response={$basics.heightFeet} context={'feet'} />,
				<ResponseDisplay response={$basics.heightInch} context={'inches'} />
				tall. Based on this information, your Body Mass Index (BMI) is <ResponseDisplay
					response={bmiValue}
					context={'kg/m²'}
				/>.
			</p>
		</Content>
	</Card>
</div>
