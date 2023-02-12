<script>
	import CollapsibleCard from '$lib/layouts/CollapsibleCard.svelte';
	import Image from '$lib/layouts/Image.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import { habits, menopause, screening } from '../../store';
</script>

<div class="container mx-auto px-4">
	<CollapsibleCard title="Alcohol and Menopause">
		<Image>
			<img class="max-w-[250px]" src="/images/wine.png" alt="Filled wine glass" />
		</Image>
		{#if $habits.alcohol === 'low'}
			<Paragraph customized>
				<b>You have indicated that you drink alcohol but consume 7 or fewer drinks per week.</b>
				One standard drink includes:
				<ul class="ml-8 list-disc">
					<li>5 fluid oz (one glass) of wine (about 12% alcohol)</li>
					<li>12 fluid oz of regular beer (about 5% alcohol)</li>
					<li>1.5 fluid oz (one shot) of 80-proof distilled spirits</li>
				</ul>
				Your current alcohol consumption is considered
				<b>MODERATE</b>.
				<br /> <br />
				According to the <i>North American Menopause Society</i>,
				<b>
					moderate alcohol intake is defined as no more than seven standard drinks per week and no
					more than three drinks on any single day.
				</b>
				For people who already drink alcohol regularly, The North American Menopause Society
				<b>recommends moderate alcohol intake or less.</b>
			</Paragraph>
		{:else}
			<Paragraph customized>
				<b>You have indicated that you consume 8 or more drinks of alcohol per week.</b>
				One standard drink includes:
				<ul class="ml-8 list-disc">
					<li>5 fluid oz (one glass) of wine (about 12% alcohol)</li>
					<li>12 fluid oz of regular beer (about 5% alcohol)</li>
					<li>1.5 fluid oz (one shot) of 80-proof distilled spirits</li>
				</ul>
				Your current alcohol consumption is considered
				<b>HEAVY</b>.
				<br /> <br />
				According to the <i>North American Menopause Society</i>,
				<b> heavy alcohol intake is defined as more than seven standard drinks per week. </b>
				This level of alcohol consumption increases your risk of certain health conditions. Your healthcare
				provider may recommend that you try to decrease your alcohol intake. For patients who already
				drink alcohol regularly, The <i>North American Menopause Society</i> recommends
				<b>
					moderate alcohol intake (7 standard drinks per week) or less. Heavy alcohol intake
					increases the risk of developing cardiovascular disease, central obesity, osteoporosis,
					organ damage, and mood changes including depression.
				</b>
			</Paragraph>
		{/if}
		<Paragraph>
			Although studies suggest that moderate alcohol intake may have some health benefits, no amount
			of alcohol consumption is risk-free.
			<b>
				Any amount of alcohol intake increases the risk of breast cancer and many other cancers
			</b>
			- this risk increases with the amount of alcohol you consume.
			<b>Alcohol can also be a trigger for certain menopausal symptoms.</b>
		</Paragraph>
		{#if ['hot-flash', 'night-sweat', 'poor-sleep', 'bad-mood'].some( (symptom) => $menopause.symptoms.includes(symptom) )}
			<Paragraph customized>
				<b>You have also indicated that you experience menopausal symptoms</b> such as hot flashes,
				night sweats, poor sleep, or worsening mood/anxiety. Drinking
				<b>alcohol can make some menopausal symptoms worse.</b>
				<br /> <br />
				<b>For example:</b>
				<ul class="ml-8 list-disc">
					<li>
						Drinking alcohol can trigger vasomotor symptoms (hot flashes, night sweats) for some
						people.
					</li>
					<li>
						Limiting alcohol intake, especially before going to bed, can also help improve sleep
						hygiene.
					</li>
					<li>
						Drinking more than 7 standard drinks per week can increase the risk of developing
						depression.
					</li>
				</ul>
				<br />
				Your healthcare provider may recommend that you decrease your alcohol consumption for several
				reasons. Decreasing your alcohol intake may improve some of your menopausal symptoms.
			</Paragraph>
		{/if}
		{#if $habits.alcohol === 'high' && $screening.bones === 'low'}
			<Paragraph customized>
				<b>You have also indicated that you have low bone density.</b> Heavy alcohol intake increases
				your risk of developing osteoporosis. Your healthcare provider may recommend you limit your alcohol
				intake for this reason.
			</Paragraph>
		{/if}
	</CollapsibleCard>
</div>
