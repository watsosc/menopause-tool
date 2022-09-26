<script lang="ts">
	import Card from '$lib/layouts/Card.svelte';
	import Content from '$lib/layouts/Content.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
	import { basics, screening, habits } from '../../store';

	const underSixtyFive = Number($basics.age) < 65;
	const postMenopausal = ['one-year', 'ten-year'].includes($basics.period);

	const smokingParagraph = () => {
		if ($habits.smoking === 'yes') {
			return `<br/><br/><b>Patients who smoke are at a higher risk of fracture.</b> Smoking cessation is recommended to 
        reduce the risk of fractures after menopause, and to reduce other health risks associated with smoking. 
        If you are ready to quit smoking, speak to your healthcare provider about resources available to help 
        you stop smoking.`;
		}

		return '';
	};
</script>

<div class="container mx-auto px-4">
	<Card>
		<EducationTitleBar>Bone Health and Menopause</EducationTitleBar>
		<Content>
			<div class="flex flex-row justify-center">
				<img class="max-w-[250px]" src="/images/bone.png" alt="Two bones" />
			</div>
			{#if $screening.bones === 'never' && underSixtyFive && postMenopausal}
				<Paragraph customized>
					<b>
						You have indicated that you are post-menopausal, younger than 65 years old, and have
						never had a bone density scan.
					</b>
					<br /><br />
					Post-menopausal people younger than 65 years old should discuss their individualized fracture
					risk with their healthcare provider to determine whether bone mineral density assessment is
					necessary.
					<br /><br />
					<b>
						Post-menopausal people have a higher risk of developing osteoporosis due to hormonal
						changes that naturally occur after menopause. Osteoporosis is a condition that weakens
						the bones and increases the risk of fracture.
					</b>
					{@html smokingParagraph()}
				</Paragraph>
			{:else if $screening.bones === 'never' && !underSixtyFive && postMenopausal}
				<Paragraph customized>
					<b>
						You have indicated that you are post-menopausal, 65 years of age or older, and have
						never had a bone density scan.
					</b>
					<br /><br />
					Post-menopausal people aged 65 or older
					<i>should undergo bone mineral density assessment</i>
					and discuss their individualized fracture risk with their healthcare provider.
					<br /><br />
					<b>
						Post-menopausal people have a higher risk of developing osteoporosis due to hormonal
						changes that naturally occur after menopause. Osteoporosis is a condition that weakens
						the bones and increases the risk of fracture. There are also several other risk factors
						for low bone density. Speak to your doctor about whether you have these risks.
					</b>
					{@html smokingParagraph()}
				</Paragraph>
			{:else if $screening.bones === 'normal'}
				<Paragraph customized>
					<b> You have indicated that you have had a bone density scan and it was normal. </b>
					<br /><br />
					Depending on your individualized fracture risk, your healthcare provider will determine when
					to repeat bone density screening.
					<br /><br />
					<b>
						Post-menopausal people have a higher risk of developing osteoporosis due to hormonal
						changes that naturally occur after menopause. Osteoporosis is a condition that weakens
						the bones and increases the risk of fracture. There are also several other risk factors
						for low bone density. Speak to your doctor about whether you have these risks.
					</b>
					{@html smokingParagraph()}
				</Paragraph>
			{:else if $screening.bones === 'low'}
				<Paragraph customized>
					<b>
						You have indicated that you have had a bone density scan and you were told you have low
						bone density.
					</b>
					Depending on specific measurements, this could mean you have osteopenia or osteoporosis. People
					with osteoporosis have weaker bones compared to those with osteopenia. Osteopenia can progress
					to osteoporosis. Osteoporosis is a condition that weakens the bones and increases the risk
					of fracture.
					<br /><br />
					Treatment of low bone density can typically include vitamin D, calcium, prescription medications,
					and lifestyle modifications.
					<br /><br />
					<b>
						Post-menopausal patients have a higher risk of developing osteoporosis due to hormonal
						changes that naturally occur after menopause. There are also several other risk factors
						for low bone density. Speak to your doctor about whether you have these risks.
					</b>
					{@html smokingParagraph()}
				</Paragraph>
			{/if}
			<Paragraph>
				<b>Vitamin D and calcium are important for bone health.</b> Post-menopausal people should
				try to obtain:
				<ol class="ml-8 list-decimal">
					<li>
						<b>Elemental calcium (1200mg per day) through diet or supplements.</b>
						If you are getting your calcium through your diet, this is about 3 servings of dairy per
						day.
						<br /><br />
						If you need to take calcium through a supplement, <b>calcium carbonate</b> supplements
						have the highest amount of <i>elemental calcium</i>. Take this supplement with food for
						better absorption. Sometimes, calcium carbonate can lead to constipation or bloating. If
						you need to switch supplements, you can try <b>calcium citrate</b> but may need to take
						more tablets to get your daily requirements.<br />
					</li>
					<br />
					<li>
						<b>Vitamin D (800-2000 international units (IU) per day) through supplementation.</b>
						The best form of Vitamin D to take is Vitamin D3.
					</li>
				</ol>
				<br />
				Important lifestyle modifications for optimal bone health include daily weight-bearing exercise,
				limiting alcohol intake, and smoking cessation.
			</Paragraph>
		</Content>
	</Card>
</div>