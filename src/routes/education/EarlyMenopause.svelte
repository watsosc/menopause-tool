<script>
	import CollapsibleCard from '$lib/layouts/CollapsibleCard.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import { basics, genetics, history } from '../../store';

	const hideMht =
		[
			'breast-cancer',
			'heart-attack',
			'heart-disease',
			'stroke',
			'blood-clot',
			'thrombo',
			'liver-disease'
		].some((condition) => $history.conditions.includes(condition)) ||
		$genetics.genes.includes('clot') ||
		Number($basics.age) > 60 ||
		$basics.period.includes('ten-year');
</script>

<div class="container mx-auto px-4">
	<CollapsibleCard title="When Menopause is Premature or Early">
		{#if $basics.earlyMenopause === 'before-forty'}
			<Paragraph customized>
				<b>Premature menopause</b> happens when someone goes through menopause
				<b>before 40 years old</b>. Your doctor may have completed testing to confirm this diagnosis
				for you.
				<br /><br />
				If there is no clear reason why premature menopause happened (e.g., surgery), your doctor will
				discuss specific tests that might help understand why this happened.
				<b>
					However, most of the time (85% of cases), people will not know why they had premature
					menopause.
				</b>
				<br /><br />
				Because menopause causes low estrogen, it is typically recommended that people with premature
				menopause take menopausal hormone therapy (MHT)
				<b>unless they have a contraindication to using it</b>.
				<br /><br />
				Low estrogen at an early age can negatively impact bone, heart and brain health. Replacing estrogen
				if you have premature menopause can help optimize many aspects of health.
				<b>
					Risks of MHT for younger women are usually lower than for older people. At some point,
					your doctor will recommend stopping it.
				</b>
			</Paragraph>
		{:else}
			<Paragraph customized>
				Early Menopause happens when someone goes through menopause
				<b>between 40 and 45 years old</b>. Because menopause causes low estrogen, it is typically
				recommended that people with early menopause take menopausal hormone therapy (MHT)
				<b>unless they have a contraindication to using it</b>.
				<br /><br />
				Low estrogen at an early age can negatively affect many aspects of health. Taking MHT if you
				have early menopause can help optimize many aspects of your health.
				<b>
					Risks of MHT for younger women are usually lower than for older people. At some point,
					your doctor will recommend stopping it.
				</b>
			</Paragraph>
		{/if}
		{#if hideMht}
			<Paragraph customized>
				<b>
					Based on your responses to the questionnaire, benefits of using menopausal hormone therapy
					may not outweigh risks.
				</b>
				You may not be able to use this treatment safely. Speak to your doctor about treatments that
				are right for you.
			</Paragraph>
		{/if}
	</CollapsibleCard>
</div>
