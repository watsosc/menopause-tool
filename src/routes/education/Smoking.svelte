<script>
	import CollapsibleCard from '$lib/layouts/CollapsibleCard.svelte';
	import Image from '$lib/layouts/Image.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
</script>

<div class="container mx-auto px-4">
	<CollapsibleCard title="Smoking and Menopause">
		<Image>
			<img class="max-w-[250px]" src="/images/cigarette.png" alt="Cigarette" />
		</Image>
		<Paragraph customized>
			<b>You have indicated that you currently smoke.</b> Smoking has several negative health
			impacts.
			<br /> <br />
			Studies show that people who smoke cigarettes experience <b>worse menopausal symptoms</b>,
			such as hot flashes and sleep disturbances. People who smoke cigarettes are also at a higher
			risk of having menopause at an earlier age.
			<br /> <br />
			After menopause, smoking
			<b>negatively impacts bone health and increases risk of future fracture</b>. All
			post-menopausal patients have a higher risk of developing osteoporosis due to hormonal changes
			that naturally occur after menopause. Patients who smoke are at a higher risk of experiencing
			a fracture.
			<br /> <br />
			<b>
				Smoking can also increase the risks associated with using menopausal hormone therapy (MHT).
			</b>
			For example, a smoker who takes menopausal hormone therapy has a higher risk of heart attack, stroke
			and blood clot.
			<b>
				If you are a candidate for menopausal hormone therapy and choose to take it, your doctor may
				suggest using its estrogen component through the skin in the form of a patch or gel.
			</b>
			<br /> <br />
			<b>Your healthcare provider may recommend you quit smoking for several reasons.</b> Quitting smoking
			is recommended to reduce the risk of fractures after menopause, and to reduce other health risks
			associated with smoking. Smoking cessation may also improve some of your menopausal symptoms. If
			you are ready to quit smoking, speak to your healthcare provider about support and resources available
			to help you quit.
		</Paragraph>
	</CollapsibleCard>
</div>
