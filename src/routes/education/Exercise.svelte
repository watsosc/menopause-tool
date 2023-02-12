<script>
	import CollapsibleCard from '$lib/layouts/CollapsibleCard.svelte';
	import Image from '$lib/layouts/Image.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import { habits } from '../../store';
</script>

<div class="container mx-auto px-4">
	<CollapsibleCard title="Exercise and Menopause">
		<Image>
			<img class="max-w-[250px]" src="/images/exercise.png" alt="Person on treadmill" />
		</Image>
		{#if $habits.exercise === 'none'}
			<Paragraph customized>
				<b>You have indicated that you do not exercise.</b> If you are able, consider integrating regular
				exercise into your lifestyle. Engaging in regular exercise after menopause is important for bone
				health, muscular function, mood, cardiovascular health, and achieving/maintaining a healthy weight.
				If you have existing health concerns or haven’t exercised in a long time, speak with your healthcare
				provider about integrating exercise into your lifestyle in a safe and sustainable way.
			</Paragraph>
		{:else}
			<Paragraph customized>
				<b>
					You have indicated that you make an effort to incorporate exercise into your lifestyle.
				</b> Engaging in regular exercise after menopause is important for bone health, muscular function,
				mood, cardiovascular health, and achieving/maintaining a healthy weight.
			</Paragraph>
		{/if}
		<Paragraph>
			Current recommendations regarding exercise state that in menopause,
			<b>
				people should aim to engage in regular moderate to vigorous intensity physical activity for
				at least 2.5 hours per week, including weight-bearing activity.
			</b>
		</Paragraph>
	</CollapsibleCard>
</div>
