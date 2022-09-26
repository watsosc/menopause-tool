<script>
	import Card from '$lib/layouts/Card.svelte';
	import Content from '$lib/layouts/Content.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
	import { basics, screening, genetics, history } from '../../store';

	const breastCancerFamily = $genetics.family.includes('breast-cancer');
	const ovarianCancerFamily = $genetics.family.includes('ovarian-cancer');
	const cancerFamily = breastCancerFamily || ovarianCancerFamily;
	const breastCancerPersonal = $history.conditions.includes('breast-cancer');

	const screeningParagraphBold = `<b>
						Screening recommendations are different for people at higher personal risk of breast
						cancer (e.g., personal history of breast cancer, history of breast cancer in
						first-degree relatives, known mutations of the BRCA1/BRCA2 genes or previous exposure of
						the chest wall to radiation).
					</b>`;
	const screeningParagraph = `${screeningParagraphBold} If you have any concerns about your personal breast cancer risk, 
    you should speak with your healthcare provider about your individualized risk factors, values and preferences, as well as the risks 
    and benefits of screening. Your healthcare provider will discuss screening recommendations that are right for you.`;
</script>

<div class="container mx-auto px-4">
	<Card>
		<EducationTitleBar>Breast Screening</EducationTitleBar>
		<Content>
			<div class="flex flex-row justify-center">
				<img class="max-w-[250px]" src="/images/mammogram.png" alt="Mammogram" />
			</div>
			<Paragraph>
				<b>
					Mammograms are performed to screen for cancers of the breast. Breast screening
					recommendations vary across provinces. For people at <u>average risk</u> of breast cancer
					living in <u>Ontario, Canada</u> routine breast cancer screening begins at age 50 and is repeated
					every 2 years.
				</b>
			</Paragraph>
			{#if breastCancerPersonal}
				<Paragraph customized>
					{screeningParagraphBold}
					<br /><br />
					<b> You have indicated you have a personal history of breast cancer. </b>
					Your doctor has likely discussed how to complete breast surveillance moving forward. If you
					are unsure, speak to your healthcare provider about breast screening recommendations that are
					right for you.
				</Paragraph>
			{:else if !breastCancerPersonal && breastCancerFamily && ovarianCancerFamily}
				<Paragraph customized>
					{screeningParagraphBold}
					<br /><br />
					<b> You have indicated you have a family history of breast cancer and ovarian cancer. </b>
					If you have not already discussed breast screening, speak to your doctor about recommendations
					that are right for you.
				</Paragraph>
			{:else if !breastCancerPersonal && breastCancerFamily}
				<Paragraph customized>
					{screeningParagraphBold}
					<br /><br />
					<b> You have indicated you have a family history of breast cancer. </b>
					If you have not already discussed breast screening, speak to your doctor about recommendations
					that are right for you.
				</Paragraph>
			{:else if !breastCancerPersonal && ovarianCancerFamily}
				<Paragraph customized>
					{screeningParagraphBold}
					<br /><br />
					<b> You have indicated you have a family history of ovarian cancer. </b> Ovarian cancer and
					breast cancer can sometimes be related. Speak to your doctor about breast screening recommendations
					that are right for you.
				</Paragraph>
			{:else if !(cancerFamily || breastCancerPersonal) && $genetics.genes.some( (gene) => ['brca1', 'brca2'].includes(gene) )}
				<Paragraph customized>
					<b>
						You have indicated you carry a gene that may increase your risk of breast cancer
						compared to someone without this gene.
					</b>
					If you have not already discussed breast screening, speak to your doctor about recommendations
					that are right for you.
				</Paragraph>
			{:else if cancerFamily && !breastCancerPersonal && $genetics.genes.some( (gene) => ['brca1', 'brca2'].includes(gene) )}
				<Paragraph customized>
					{screeningParagraphBold}
					<br /><br />
					<b>
						You have indicated you carry a gene that may increase your risk of breast cancer
						compared to someone without this gene. You have also indicated you have a family history
						of breast or ovarian cancer.
					</b>
					If you have not already discussed breast screening, speak to your doctor about recommendations
					that are right for you.
				</Paragraph>
			{:else if !(cancerFamily || breastCancerPersonal) && $genetics.genes.some( (gene) => ['risk'].includes(gene) )}
				<Paragraph customized>
					{screeningParagraphBold}
					<br /><br />
					<b>
						You have indicated you carry a gene that increases your risk of developing a certain
						condition.
					</b>
					If you have not already discussed breast screening, speak to your doctor about recommendations
					that are right for you.
				</Paragraph>
			{:else if Number($basics.age) < 50 && $screening.mammogram === 'young' && !(cancerFamily || breastCancerPersonal)}
				<Paragraph customized>
					<b>
						You have indicated that you have not had a mammogram before, and you are younger than 50
						years old.
					</b>
					You likely do not need routine breast screening until you turn 50 years old. However, you should
					speak to your doctor about when to start.
					<br /><br />
					{@html screeningParagraph}
					<br /><br />
					<b>
						Last, if you notice any change in your breasts, regardless of your age, speak to your
						doctor as you may require early breast screening.
					</b>
				</Paragraph>
			{:else if $screening.mammogram === 'young' && !(cancerFamily || breastCancerPersonal)}
				<Paragraph customized>
					<b>
						You have indicated that you have not had a mammogram before, you are aged 50 or older.
					</b>
					You should speak to your healthcare provider about arranging your first mammogram for routine
					breast screening.
					<br /><br />
					{@html screeningParagraph}
				</Paragraph>
			{:else if $screening.mammogram === 'last-year' && !(cancerFamily || breastCancerPersonal)}
				<Paragraph customized>
					<b> You have indicated that your last mammogram was within the past 1 year. </b>
					You are likely up-to-date on your breast cancer screening. However, some people may require
					more frequent screening.
					<br /><br />
					{@html screeningParagraph}
				</Paragraph>
			{:else if $screening.mammogram === 'two-year' && !(cancerFamily || breastCancerPersonal)}
				<Paragraph customized>
					<b> You have indicated that your last mammogram was within the past 2 years. </b>
					You are likely up-to-date on your breast cancer screening. However, some people may require
					more frequent screening. You should speak to your healthcare provider about arranging your
					next mammogram.
					<br /><br />
					{@html screeningParagraph}
				</Paragraph>
			{:else if $screening.mammogram === 'overdue' && !(cancerFamily || breastCancerPersonal)}
				<Paragraph customized>
					<b> You have indicated that your mammogram is overdue. </b>
					If you have not had a mammogram within the last 2 years, you should speak to your healthcare
					provider about arranging a mammogram for breast cancer screening.
					<br /><br />
					{@html screeningParagraph}
				</Paragraph>
			{/if}
		</Content>
	</Card>
</div>
