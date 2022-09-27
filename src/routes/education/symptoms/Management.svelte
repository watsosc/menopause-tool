<script>
	import Content from '$lib/layouts/Content.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import EducationSubTitle from '$lib/titles/EducationSubTitle.svelte';
	import { treatment } from '../../../store';
</script>

<Content>
	{#if $treatment.all.length > 0 && $treatment.current.length === 0}
		<Paragraph customized>
			<b>
				You have indicated that you have previously tried a treatment for your menopausal symptoms.
			</b>
			It is important to review your previous treatment(s) with your healthcare provider. There are lots
			of options available, and sometimes a change in medication or optimization of dose or method of
			taking a medication can make a big difference in your symptoms. After reviewing the information
			below, we hope you feel a bit more comfortable speaking about some of these options with your doctor.
		</Paragraph>
	{:else if $treatment.current.length > 0 && $treatment.helping !== 'much'}
		<Paragraph customized>
			<b>
				You have indicated that you are currently using a treatment for your your menopausal
				symptoms. However, you are still bothered by your symptoms.
			</b>
			It is important to review your previous and current treatment(s) with your healthcare provider.
			There are lots of treatment options available, and sometimes a change in medication or optimization
			of dose or method of taking a medication can make a big difference in your symptoms. After reviewing
			the information below, we hope you feel a bit more comfortable speaking about some of these options
			with your doctor.
		</Paragraph>
	{/if}
</Content>
