<script>
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import SubSection from '$lib/layouts/SubSection.svelte';
	import EducationSubTitle from '$lib/titles/EducationSubTitle.svelte';
	import { bmi, medication, genetics } from '../../../store';

	const breastCancerFamily = $genetics.family.includes('breast-cancer');
	const takingTamoxifen = $medication.medicationSelection.includes('tamoxifen');
	const takingAnxietyMeds = $medication.medicationSelection.includes('anxiety');
</script>

<div>
	<EducationSubTitle>Vasomotor Symptoms</EducationSubTitle>
	<Paragraph>
		<b>Hot flashes and night sweats are called vasomotor symptoms.</b> They are common symptoms of
		menopause occurring in about <b>80% of women</b>. A hot flash is the sensation of heat, usually
		starting in the chest and rising upwards. It can be accompanied by anxiety or palpitations.
		These symptoms last an average of 7 years, can start before the last menstrual period, and can
		continue afterwards.
	</Paragraph>
	<Paragraph>
		<b>
			About 20% of women experiencing hot flashes will have severe symptoms with 20-30 episodes per
			day.
		</b>
		The cause of vasomotor symptoms is not well understood but has to do with estrogen’s effect on the
		body’s ability to regulate temperature.
	</Paragraph>
	<Paragraph>
		Vasomotor symptoms can also be caused and worsened by other medical concerns, such as thyroid
		disease, some medications, and smoking.
	</Paragraph>

	{#if $medication.medicationSelection.includes('thyroid')}
		<Paragraph customized>
			<b>You have indicated you take medication to help your thyroid.</b> Thyroid problems can cause
			and worsen hot flashes and night sweats. It is important to have your thyroid levels checked with
			your doctor and make sure you have the right medication dose.
		</Paragraph>
	{/if}

	<SubSection title="Treating Vasomotor Symptoms">
		<p class="font-title text-2xl border-b border-secondary mb-4">Lifestyle Changes</p>
		<Paragraph>
			<b>
				Cognitive behaviour therapy (CBT) has been shown to be effective in managing vasomotor
				symptoms in several studies.
			</b>
			This can be accessed through counsellors or psychiatric services.
		</Paragraph>
		<Paragraph>
			<b>Weight loss</b> can also be associated with improvement or even elimination of vasomotor symptoms
			for women who are overweight.
		</Paragraph>
		{#if Number($bmi) > 25}
			<Paragraph customized>
				<b>
					Your Body Mass Index is currently above 25 kg/m\u00B2. If you are able to lose weight, it
					may help with your vasomotor symptoms.
				</b>
				A healthy diet in menopause can promote appropriate weight, help energy levels and can decrease
				other chronic medical conditions. Women should strive to eat a diet high in protein, fibre and
				fruits and vegetables. Fats should be unsaturated, and sodium should be limited to 1300 mg per
				day. Women should ensure adequate calcium in their diets (1200 mg/day) as well as take a vitamin
				D supplement (800-2000 IU daily).
			</Paragraph>
		{/if}
		<Paragraph>
			There have been some studies indicating that <b>paced respiration</b> may be of some benefit for
			people with vasomotor symptoms, although the evidence is not strong.
		</Paragraph>
		<p class="font-title text-2xl border-b border-secondary mt-6 mb-4">
			Naturopathic and Complementary Medicine
		</p>
		<Paragraph>
			<b>Soy products</b> are phytoestrogens (estrogens derived from plants) that can bind to
			estrogen receptors in the body. Currently, the evidence is inconclusive on efficacy of most
			soy products in helping manage vasomotor symptoms.
			<b>S-equol is a soy product that may have some benefit.</b>
		</Paragraph>
		<Paragraph>
			<b><i>Femarelle</i></b> is an over-the-counter product made of fermented soybean extract. There
			is a small amount of research that has shown that it was helpful in managing vasomotor symptoms.
		</Paragraph>
		<Paragraph>
			Acupuncture may help some people with vasomotor symptoms, although the evidence is not strong.
		</Paragraph>
		{#if breastCancerFamily}
			<Paragraph customized>
				<i>
					<b>You have indicated you have a history of breast cancer.</b> Soy products, including Femarelle,
					should be avoided. Speak to your healthcare provider about this and consult your oncologist.
				</i>
			</Paragraph>
		{/if}
		<p class="font-title text-2xl border-b border-secondary mt-6 mb-4">Bioidenticals</p>
		<Paragraph>
			The safety and efficacy of bioidentical products have not been tested with the same rigour as
			approved pharmaceutical options for treatment of vasomotor symptoms and are <b>
				not recommended
			</b>
			by Health Canada.
		</Paragraph>
		<p class="font-title text-2xl border-b border-secondary mt-6 mb-4">
			Non-hormonal Prescription Medications
		</p>
		<Paragraph>
			<b>
				There are non-hormonal options to treat vasomotor symptoms for women who cannot or prefer
				not to take hormones.
			</b>
		</Paragraph>
		<div class="pl-4">
			<p class="font-title text-xl underline mt-4 mb-2">Antidepressant Classes of Medications</p>
			<Paragraph>
				<b>
					Some antidepressant medications can help reduce the frequency and severity of hot flashes
					by 27-61%.
				</b> Venlafaxine, desvenlafaxine, paroxetine, citalopram and escitalopram are common antidepressants
				used for this purpose. They have the added benefit of helping treat depression and mood symptoms
				for some women who may need this. Side effects include nausea, headache, dizziness, dry mouth,
				insomnia and nervousness. Selective Serotonin Reuptake Inhibitors (SSRI) medications (such as
				paroxetine, citalopram and escitalopram) can worsen vasomotor symptoms at high doses.
			</Paragraph>
			{#if breastCancerFamily && takingAnxietyMeds}
				<Paragraph customized>
					<i>
						<b>
							You have indicated you already take a medication for anxiety and/or depression and
							also have a history of breast cancer.
						</b>
						While Venlafaxine is a good first-line option for people with a history of breast cancer,
						it may not be advisable to add an antidepressant as a means to treat your vasomotor symptoms.
						Speak to your doctor about options that might be right for you.
					</i>
				</Paragraph>
			{:else if breastCancerFamily}
				<Paragraph customized>
					<i>
						<b>You have indicated you have a history of breast cancer.</b> Venlafaxine is typically a
						first-choice recommendation. However, this will depend on other medications you take and
						your own preferences. Speak to your doctor about options that might be right for you.
					</i>
				</Paragraph>
			{:else if takingAnxietyMeds}
				<Paragraph customized>
					<i>
						<b> You have indicated you already take a medication for anxiety and/or depression. </b>
						Discuss your medication regimen with your doctor as it may not be advisable to add an antidepressant
						to treat your vasomotor symptoms. If you are currently taking an SSRI, depending on the dose,
						it could be making your vasomotor symptoms worse. Speak to your healthcare provider about
						your current medication regimen.
					</i>
				</Paragraph>
			{/if}
			{#if takingTamoxifen}
				<i>
					<b>You have indicated that you are currently taking Tamoxifen.</b> Paroxetine is
					<b>not</b> a good choice of medication for you.
				</i>
			{/if}
			<p class="font-title text-xl underline mt-4 mb-2">Other Options</p>
			<Paragraph>
				<ol class="list-decimal ml-6">
					<li>
						<b>Gabapentin</b> is a medication often used for the treatment of seizures and chronic
						pain.
						<b>
							It can also be used to treat hot flashes and night sweats and improve symptoms by
							45-71%.
						</b>
						It can cause dizziness, unsteadiness and drowsiness when it is first started. Often these
						symptoms will improve. For this reason, we will often prescribe this medication to be taken
						at night, which can also be helpful for women who have sleep problems. In older patients,
						gabapentin can be associated with respiratory depression.
					</li>
					<li class="pt-2">
						<b>Clonidine</b> is a medication that is often used to treat high blood pressure.
						<b>
							It can also help to treat hot flashes and night sweats but is not as effective as
							antidepressants or gabapentin.
						</b>
						It can cause dizziness, dry mouth and low blood pressure. Speak to your doctor about whether
						this option is right for you.
					</li>
					<li class="pt-2">
						<b>Oxybutynin</b> is a medication often used to treat incontinence. It can also help treat
						hot flashes and night sweats. Side effects include dry eyes, blurred vision, dry mouth, constipation
						and it can have an effect on brain function in older women. Talk to your doctor about whether
						this option is right for you.
					</li>
				</ol>
				<br />
				<b
					>If you are interested in non-hormonal prescription medications to manage your vasomotor
					symptoms, your doctor may be able to start you on one of the medications listed in the
					following Table:
				</b>
				<img src="/images/VMS_management_table.png" alt="Vasomotor management table" />
			</Paragraph>
		</div>
		<p class="font-title text-2xl border-b border-secondary mt-6 mb-4">
			Menopausal Hormone Therapy
		</p>
		<Paragraph>
			<b>
				Menopausal hormone therapy (MHT) can be used to treat many symptoms of menopause but is most
				effective at managing vasomotor symptoms.
			</b>
			MHT can reduce the symptom severity by up to 75%. MHT can safely be prescribed to women who are
			under the age of 60, less than 10 years from the last menstrual period, and have no contraindications.
		</Paragraph>
		CUSTOM STUFF HERE
		<Paragraph>
			Risks of hormone therapy include heart attack, stroke, and blood clot in the leg or the lung.
			The risk of these occurrences is less than 1% in women without other identified risk factors.
			Your age, other health concerns, previous history, time since the menopausal transition and
			smoking status can all affect your personal risk.
			<b> It is important to talk to your healthcare provider about your personal risk profile. </b>
		</Paragraph>
		<Paragraph>
			1/8 women will develop breast cancer in their lifetime. There is a slightly increased risk for
			women who take MHT, especially for women on both estrogen and progesterone. The increased risk
			of breast cancer for women on MHT is similar to other risk factors for breast cancer, such as
			drinking more than 2 alcoholic beverages per day, obesity, starting your periods before the
			age of 12, or entering menopause after the age of 55.
		</Paragraph>
		<Paragraph>
			<b> MHT is usually given as a combination of the hormones estrogen and progesterone </b> for people
			with a uterus. As a general rule, higher doses of estrogen require higher doses of progesterone.
		</Paragraph>
		<Paragraph>
			When prescribing MHT, your healthcare provider will start at a low dose of medication and
			increase it in order to manage your symptoms. Higher starter doses may be needed for younger
			women. Most women will begin to see an effect of the medications within 2-6 weeks.
		</Paragraph>
		CUSTOM STUFF HERE
	</SubSection>
</div>
