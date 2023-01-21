<script lang="ts">
	import Card from '$lib/layouts/Card.svelte';
	import Content from '$lib/layouts/Content.svelte';
	import Image from '$lib/layouts/Image.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
	import { basics, screening, habits } from '../../store';

	const underSixtyFive = Number($basics.age) < 65;
	const preMenopausal = ['regular', 'irregular'].includes($basics.period);
	const postMenopausal = ['one-year', 'ten-year'].includes($basics.period);
	const hysterectomyWithOvaries = $basics.period === 'surgery';
	const periodMedication = $basics.period === 'medication';

	const smokingParagraph = `<b>Patients who smoke are at a higher risk of fracture.</b> Smoking cessation is
					recommended to reduce the risk of fractures after menopause, and to reduce other health
					risks associated with smoking. If you are ready to quit smoking, speak to your healthcare
					provider about resources available to help you stop smoking.`;
</script>

<div class="container mx-auto px-4">
	<Card>
		<EducationTitleBar>Bone Health and Menopause</EducationTitleBar>
		<Content>
			<Image>
				<img class="max-w-[250px]" src="/images/bone.png" alt="Two bones" />
			</Image>
			{#if $screening.bones === 'never' && hysterectomyWithOvaries}
				<Paragraph customized>
					<b>
						You have indicated you have had a hysterectomy, and have never had a bone density scan.
					</b>
					<br /><br />
					<b>
						After hysterectomy, it may be difficult to identify if you are in menopause. The average
						age of menopause in Canada is 51.
					</b>
					<br /><br />
					Post-menopausal people aged 65 or older
					<u>should undergo bone mineral density assessment</u>
					and discuss their individualized fracture risk with their healthcare provider.
					<br /><br />
					<b>
						Post-menopausal people have a higher risk of developing osteoporosis due to hormonal
						changes that naturally occur after menopause. Osteoporosis is a condition that weakens
						the bones and increases the risk of fracture. There are also several other risk factors
						for low bone density. Speak to your doctor about whether you have these risks.
					</b>
				</Paragraph>
				{#if $habits.smoking === 'yes'}
					<Paragraph customized>
						{@html smokingParagraph}
					</Paragraph>
				{/if}
			{:else if $screening.bones === 'never' && underSixtyFive && periodMedication}
				<Paragraph customized>
					<b>
						You have indicated that you are younger than 65 years old, you are taking medication
						that has stopped your period, and have never had a bone density scan.
					</b>
					<br /><br />
					Most medications that may stop your period, such as birth control pills or the Mirena IUD,
					do not increase your risk of having low bone density. However, prolonged use of certain medications,
					such as Lupron, may require early initiation bone mineral density assessment.
					<br /><br />
					<b>Before the age of 65</b>, most patients do not require routine bone mineral density
					assessment. If you are on hormonal therapies, speak to your doctor about whether you
					require a bone mineral density assessment.
					<br /><br />
					<b>
						Post-menopausal people have a higher risk of developing osteoporosis due to hormonal
						changes that naturally occur after menopause. Osteoporosis is a condition that weakens
						the bones and increases the risk of fracture. There are also several other risk factors
						for low bone density. Speak to your doctor about whether you have these risks.
					</b>
				</Paragraph>
				{#if $habits.smoking === 'yes'}
					<Paragraph customized>
						{@html smokingParagraph}
					</Paragraph>
				{/if}
			{:else if $screening.bones === 'never' && underSixtyFive && postMenopausal}
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
				</Paragraph>
				{#if $habits.smoking === 'yes'}
					<Paragraph customized>
						{@html smokingParagraph}
					</Paragraph>
				{/if}
			{:else if $screening.bones === 'never' && !underSixtyFive && preMenopausal}
				<Paragraph customized>
					<b>
						You have indicated that you are 65 years of age or older, and have never had a bone
						density scan.
					</b>
					<br /><br />
					<b>You have indicated that you still have regular or irregular vaginal bleeding.</b>
					<br /><br />
					The average age of menopause in Canada is 51. For patients not taking hormonal therapy, vaginal
					bleeding after menopause should be evaluated by a physician. You should speak to your healthcare
					provider about your post-menopausal bleeding.
					<br /><br />
					Post-menopausal people aged 65 or older
					<u>should undergo bone mineral density assessment</u>
					and discuss their individualized fracture risk with their healthcare provider.
					<br /><br />
					<b>
						Post-menopausal people have a higher risk of developing osteoporosis due to hormonal
						changes that naturally occur after menopause. Osteoporosis is a condition that weakens
						the bones and increases the risk of fracture.
					</b>
				</Paragraph>
				{#if $habits.smoking === 'yes'}
					<Paragraph customized>
						{@html smokingParagraph}
					</Paragraph>
				{/if}
			{:else if $screening.bones === 'never' && !underSixtyFive && postMenopausal}
				<Paragraph customized>
					<b>
						You have indicated that you are post-menopausal, 65 years of age or older, and have
						never had a bone density scan.
					</b>
					<br /><br />
					Post-menopausal people aged 65 or older
					<u>should undergo bone mineral density assessment</u>
					and discuss their individualized fracture risk with their healthcare provider.
					<br /><br />
					<b>
						Post-menopausal people have a higher risk of developing osteoporosis due to hormonal
						changes that naturally occur after menopause. Osteoporosis is a condition that weakens
						the bones and increases the risk of fracture. There are also several other risk factors
						for low bone density. Speak to your doctor about whether you have these risks.
					</b>
				</Paragraph>
				{#if $habits.smoking === 'yes'}
					<Paragraph customized>
						{@html smokingParagraph}
					</Paragraph>
				{/if}
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
				</Paragraph>
				{#if $habits.smoking === 'yes'}
					<Paragraph customized>
						{@html smokingParagraph}
					</Paragraph>
				{/if}
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
				</Paragraph>
				{#if $habits.smoking === 'yes'}
					<Paragraph customized>
						{@html smokingParagraph}
					</Paragraph>
				{/if}
			{/if}
			<Paragraph>
				<b>Vitamin D and calcium are important for bone health.</b> Post-menopausal people should
				try to obtain:
				<ol class="ml-8 list-decimal">
					<li>
						<b>Elemental calcium (1200mg per day) through diet or supplements.</b>
						If you are getting your calcium through your diet, this is about 3 servings of dairy per
						day.
						<br class="my-1" />
						If you need to take calcium through a supplement, <b>calcium carbonate</b> supplements
						have the highest amount of <b>elemental calcium</b>. Take this supplement with food for
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
