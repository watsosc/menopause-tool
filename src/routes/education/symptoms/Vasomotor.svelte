<script>
	import CollapsibleCard from '$lib/layouts/CollapsibleCard.svelte';
	import Image from '$lib/layouts/Image.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import SubSection from '$lib/layouts/SubSection.svelte';
	import {
		bmi,
		medication,
		history,
		genetics,
		surgeries,
		basics,
		treatment,
		habits
	} from '../../../store';

	const breastCancerHistory = $history.conditions.includes('breast-cancer');
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
	const takingTamoxifen = $medication.medicationSelection.includes('tamoxifen');
	const takingAnxietyMeds = $medication.medicationSelection.includes('anxiety');
</script>

<CollapsibleCard title="Your Vasomotor Symptoms">
	<Image>
		<img class="max-w-[250px]" src="/images/symptoms_hotflashes.png" alt="Fire" />
	</Image>
	<Paragraph>
		<b>Hot flashes and night sweats are called vasomotor symptoms.</b> They are common symptoms of
		menopause occurring in about <b>80% of women</b>. A hot flash is the sensation of heat, usually
		starting in the chest and rising upwards. It can be accompanied by anxiety or palpitations.
		<b>These symptoms last an average of 7 years.</b> They can start before the last menstrual period,
		and can continue afterwards.
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
					Your Body Mass Index is currently above 25 kg/m². If you are able to lose weight, it may
					help with your vasomotor symptoms.
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
			<b>Acupuncture</b> may help some people with vasomotor symptoms, although the evidence is not strong.
		</Paragraph>
		{#if breastCancerHistory}
			<Paragraph customized>
				<b>You have indicated you have a history of breast cancer.</b> Soy products, including Femarelle,
				should be avoided. Speak to your healthcare provider about this and consult your oncologist.
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
			<p class="font-title text-xl font-semibold underline mt-4 mb-2">
				Antidepressant Classes of Medications
			</p>
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
			{#if breastCancerHistory && takingAnxietyMeds}
				<Paragraph customized>
					<b>
						You have indicated you already take a medication for anxiety and/or depression and also
						have a history of breast cancer.
					</b>
					While Venlafaxine is a good first-line option for people with a history of breast cancer, it
					may not be advisable to add an antidepressant as a means to treat your vasomotor symptoms.
					Speak to your doctor about options that might be right for you.
				</Paragraph>
			{:else if breastCancerHistory}
				<Paragraph customized>
					<b>You have indicated you have a history of breast cancer.</b> Venlafaxine is typically a first-choice
					recommendation. However, this will depend on other medications you take and your own preferences.
					Speak to your doctor about options that might be right for you.
				</Paragraph>
			{:else if takingAnxietyMeds}
				<Paragraph customized>
					<b> You have indicated you already take a medication for anxiety and/or depression. </b>
					Discuss your medication regimen with your doctor as it may not be advisable to add an antidepressant
					to treat your vasomotor symptoms. If you are currently taking an SSRI, depending on the dose,
					it could be making your vasomotor symptoms worse. Speak to your healthcare provider about your
					current medication regimen.
				</Paragraph>
			{/if}
			{#if takingTamoxifen}
				<Paragraph customized>
					<b>You have indicated that you are currently taking Tamoxifen.</b> Paroxetine is
					<b>not</b> a good choice of medication for you.
				</Paragraph>
			{/if}
			<p class="font-title text-xl font-semibold underline mt-4 mb-2">Other Options</p>
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
				<b>
					If you are interested in non-hormonal prescription medications to manage your vasomotor
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
		{#if !takingTamoxifen}
			{#if $treatment.current.includes('contraceptive')}
				<Paragraph customized>
					<b>
						You have indicated that you are are taking hormonal contraception to help your
						menopausal symptoms.
					</b>
					At some point, your doctor will speak to you about switching to MHT. Hormonal contraceptives
					contain higher amounts of hormones and, as you age, it will be safer to consider a switch to
					MHT or a non-hormonal option. Speak to your doctor about the best option for you.
				</Paragraph>
			{/if}
			{#if $basics.bleeding === 'yes'}
				<Paragraph customized>
					<b>You have indicated that you may have had postmenopausal bleeding.</b> Postmenopausal bleeding
					occurs when someone has vaginal bleeding after 12 or more months without a period. Postmenopausal
					bleeding can have many causes, but some of the worrisome causes include endometrial pre-cancer
					or cancer. It is important that you speak to your doctor about this, as they will likely suggest
					investigations to rule out these worrisome causes. If you have already had these investigations
					and your doctor is not worried about any abnormalities, you may be able to consider MHT.
				</Paragraph>
			{/if}
			{#if Number($basics.age) > 60}
				<Paragraph customized>
					<b>You have indicated that you are over the age of 60.</b> Using menopausal hormone therapy
					after the age of 60 carries greater risk, and may not be a suitable treatment option for you.
				</Paragraph>
				{#if $treatment.current.includes('hormone')}
					<Paragraph customized>
						<b>You have indicated that you are over the age of 60 and currently taking MHT.</b> It is
						important to review your medications and risk profile with your healthcare provider, as the
						risks of MHT can increase as women age.
					</Paragraph>
				{/if}
			{/if}
		{/if}
		{#if $basics.period.includes('ten-year')}
			<Paragraph customized>
				<b>You have indicated that you are more than 10 years from your last menstrual period.</b>
				Taking menopausal hormone therapy is likely not the best option. Speak to your doctor about treatments
				that might be better for you.
			</Paragraph>
			{#if $treatment.current.includes('hormone')}
				<Paragraph customized>
					<b>
						You have indicated that you are more than 10 years from your last menstrual period and
						currently taking MHT.
					</b>
					It is important to review your medications and personal risk profile with your healthcare provider,
					as the risks of MHT increase when someone is more than 10 years from their final menstrual
					period.
				</Paragraph>
			{/if}
		{/if}
		{#if breastCancerHistory}
			<Paragraph customized>
				<b>You have indicated that you have a history of breast cancer.</b> A history of breast cancer
				is a contraindication to using MHT. Studies have shown MHT can increase the risk of recurrence
				of breast cancer.
			</Paragraph>
		{/if}
		{#if $history.conditions.includes('heart-disease')}
			<Paragraph customized>
				<b>You have indicated that you have a history of coronary artery disease.</b>
				MHT can increase the risk of cardiac events, such as a heart attack. For this reason, MHT is
				not recommended for you.
			</Paragraph>
		{/if}
		{#if $history.conditions.includes('heart-attack')}
			<Paragraph customized>
				<b>You have indicated that you have a history of a heart attack.</b>
				MHT can increase the risk of cardiac events, such as a heart attack. For this reason, MHT is
				not recommended for you.
			</Paragraph>
		{/if}
		{#if $history.conditions.includes('stroke')}
			<Paragraph customized>
				<b>You have indicated that you have a history of stroke.</b>
				MHT can increase the risk of stroke, and is not recommended for people with a history such as
				yours.
			</Paragraph>
		{/if}
		{#if $history.conditions.includes('blood-clot')}
			<Paragraph customized>
				<b>You have indicated that you have a history of a blood clot.</b>
				MHT puts you at higher risk of developing another clot. For this reason, MHT is not recommended
				for you.
			</Paragraph>
		{/if}
		{#if $history.conditions.includes('thrombo') || $genetics.genes.includes('clot')}
			<Paragraph customized>
				<b>You have indicated that you have a thrombophilia.</b>
				This puts you at higher risk of developing a blood clot. Because MHT also increases the risk
				of blood clots, it is not a recommended treatment for you.
			</Paragraph>
		{/if}
		{#if $history.conditions.includes('liver-disease')}
			<Paragraph customized>
				<b>You have indicated that you have a history of liver disease.</b>
				MHT can affect the liver and potentially lead to worsening liver function. For this reason, MHT
				is not recommended for people with a history of significant liver disease.
			</Paragraph>
		{/if}
		{#if !hideMht}
			{#if $history.conditions.includes('endo-cancer')}
				<Paragraph customized>
					<b>
						You have indicated that you have a history of endometrial cancer. MHT is not
						well-studied among patients with a history of endometrial cancer.
					</b>
					However, if you have been treated already and your cancer was a low grade, early stage endometrial
					cancer, you may be able to take MHT. However, it is very important that you speak to your doctor
					about the benefits and risks of using MHT in your particular case.
				</Paragraph>
			{/if}
			{#if $history.conditions.includes('ovarian-cancer')}
				<Paragraph customized>
					<b>You have indicated that you have a history of ovarian cancer.</b>
					MHT is not well-studied among patients with a history of ovarian cancer. However, depending
					on your age and type of ovarian cancer, your doctor can speak to you about the benefits and
					risks of using MHT in your particular case.
				</Paragraph>
			{/if}
			{#if $history.conditions.includes('blood-pressure') || $medication.medicationSelection.includes('blood-pressure')}
				<Paragraph customized>
					<b>You have indicated that you have high blood pressure.</b>
					Women who have high blood pressure are at higher risk of cardiovascular disease. If you are
					considering MHT, speak to your doctor about which route of administration might be best for
					you.
				</Paragraph>
			{/if}
			{#if $history.conditions.includes('migraine') || $medication.medicationSelection.includes('migraine')}
				<Paragraph customized>
					<b>You have indicated that you have a history of migraine headaches.</b>
					Women who have migraine headaches with auras are at higher risk of stroke than women without
					them. Being on MHT may increase the risk of this even more. It is important to discuss the
					pros and cons of using MHT with your healthcare provider. If you choose to use MHT, it is best
					to start with a very low dose to ensure there is no increase in the frequency or severity of
					your migraines.
				</Paragraph>
			{/if}
			{#if $history.conditions.includes('other-cancer')}
				<Paragraph customized>
					<b>
						You have indicated that you have a history of a cancer other than breast, endometrial or
						ovarian cancer.
					</b>
					Generally speaking, MHT can be used by people who have a history of cancers other than the
					types just mentioned. It is still important to discuss the risks and benefits of MHT with your
					healthcare provider.
				</Paragraph>
			{/if}
			{#if $history.conditions.includes('miscarriage')}
				<Paragraph customized>
					<b>
						You have indicated that you have had 3 or more miscarriages or early pregnancy losses.
					</b>
					You may benefit from investigations for thrombophilia, also known as a blood clotting disorder.
					Speak to your doctor about this, especially if you are considering MHT.
				</Paragraph>
			{/if}
			{#if $habits.smoking === 'yes'}
				<Paragraph customized>
					<b> You have indicated that you currently smoke. </b>
					Smoking increases your risk of an adverse event, such as blood clot, stroke or heart attack,
					while taking menopausal hormone therapy. Speak to your doctor about whether MHT is right for
					you and which route of administration might be best.
				</Paragraph>
			{/if}
			{#if $genetics.family.includes('breast-cancer') && $genetics.family.includes('ovarian-cancer')}
				<Paragraph customized>
					<b>You have indicated you have a family history of breast cancer and ovarian cancer.</b>
					Your personal risk of breast cancer is higher than someone without this family history. Speak
					to your doctor about whether MHT is right for you.
				</Paragraph>
			{:else if $genetics.family.includes('breast-cancer')}
				<Paragraph customized>
					<b>You have indicated you have a family history of breast cancer.</b>
					Your personal risk of breast cancer is higher than someone without this family history. Speak
					to your doctor about whether MHT is right for you.
				</Paragraph>
			{:else if $genetics.family.includes('ovarian-cancer')}
				<Paragraph customized>
					<b>You have indicated you have a family history of ovarian cancer.</b>
					Ovarian and breast cancers can sometimes be related. Your baseline risk of breast cancer may
					be higher than someone without a family history of ovarian cancer. Speak to your doctor about
					whether MHT is right for you.
				</Paragraph>
			{/if}
			{#if ($genetics.genes.includes('brca1') || $genetics.genes.includes('brca2')) && $surgeries.received.includes('bilateral')}
				<Paragraph customized>
					<b>
						You have indicated you carry a BRCA gene and have had surgery to remove your ovaries and
						fallopian tubes.
					</b>
					MHT does not significantly increase breast cancer risk if you are younger than the average
					age of menopause (51) and have had a risk-reducing salpingo-oophorectomy (removal of your ovaries
					and fallopian tubes).
				</Paragraph>
			{/if}
			{#if $genetics.family.includes('stroke')}
				<Paragraph customized>
					<b>You have indicated that you have a family history of stroke.</b>
					This could indicate that you are at higher risk of stroke than the average person. MHT is still
					a treatment option for you, however using a transdermal estrogen may help to lower your risk
					with MHT. Speak to your doctor about the MHT option that is best for you.
				</Paragraph>
			{/if}
			{#if $genetics.family.includes('heart')}
				<Paragraph customized>
					<b>You have indicated that you have a family history of heart attack.</b>
					This could indicate that you are at higher risk of heart attack than the average person. MHT
					is still a treatment option for you, however using a transdermal estrogen may help to lower
					your risk with MHT. Speak to your doctor about what is best for you.
				</Paragraph>
			{/if}
			{#if $genetics.family.includes('blood-clot')}
				<Paragraph customized>
					<b>You have indicated that you have a family history of blood clots.</b>
					This could indicate that you are at higher risk of blood clots than the average person. MHT
					may still be a treatment option for you, however, using a transdermal estrogen may help to
					lower your risk of blood clot. Speak to your doctor about what is best for you.
				</Paragraph>
			{/if}

			<Paragraph>
				Risks of hormone therapy include heart attack, stroke, and blood clot in the leg or the
				lung. The risk of these occurrences is less than 1% in women without other identified risk
				factors. Your age, other health concerns, previous history, time since the menopausal
				transition and smoking status can all affect your personal risk.
				<b>
					It is important to talk to your healthcare provider about your personal risk profile.
				</b>
			</Paragraph>
			<Paragraph>
				1/8 women will develop breast cancer in their lifetime. There is a slightly increased risk
				for women who take MHT, especially for women on both estrogen and progesterone. The
				increased risk of breast cancer for women on MHT is similar to other risk factors for breast
				cancer, such as drinking more than 2 alcoholic beverages per day, obesity, starting your
				periods before the age of 12, or entering menopause after the age of 55.
			</Paragraph>
			<Paragraph>
				<b> MHT is usually given as a combination of the hormones estrogen and progesterone </b> for
				people with a uterus. As a general rule, higher doses of estrogen require higher doses of progesterone.
			</Paragraph>
			<Paragraph>
				When prescribing MHT, your healthcare provider will start at a low dose of medication and
				increase it in order to manage your symptoms. Higher starter doses may be needed for younger
				women. Most women will begin to see an effect of the medications within 2-6 weeks.
			</Paragraph>
			{#if $surgeries.received.includes('hysterectomy')}
				<Paragraph customized>
					<b>You have indicated that you have had a hysterectomy (removal of the uterus).</b>
					For women who have previously had a total hysterectomy, only estrogen is required. If you are
					unsure about whether you had a total (your cervix was removed as part of the operation) or
					subtotal (your cervix was not removed) it is important you clarify this with your doctor. In
					some circumstances, women with a previous hysterectomy may still benefit from being on progesterone
					at the same time. Speak to your doctor about what is best for you.
				</Paragraph>
				{#if $history.conditions.includes('endo')}
					<Paragraph customized>
						<b>
							You have indicated that you have a history of endometriosis and have had a
							hysterectomy.
						</b>
						Women with a history of significant endometriosis who have had a hysterectomy may benefit
						from estrogen and progesterone therapy to help decrease the rate of recurrence of endometriosis
						symptoms. Speak to your doctor about what is best for you.
					</Paragraph>
				{/if}
			{/if}
			<div class="px-4">
				<p class="font-title text-xl font-semibold underline mt-4 mb-2 text-center">
					How to Take Menopausal Hormone Therapy
				</p>
				<Paragraph>
					<b>Estrogen</b> is available in the form of oral pills or transdermal (through the skin)
					preparations in the form of a patch or gel.
					<b>
						Transdermal estrogen is often the preferred route for women who smoke, who have high
						blood lipids, high blood pressure, migraines, gallbladder disease or malabsorption
						syndromes. Transdermal estrogen may have lower risk of blood clots.
					</b>
				</Paragraph>
				<Paragraph>
					<b>Progesterone</b> is available in the form of oral pills, transdermal preparations (in
					combination with estrogen), and intrauterine delivery through a progesterone-containing
					intrauterine device (<b><i>Mirenia</i></b> IUD). Your doctor may also suggest you use one
					of the oral progesterone pills vaginally (micronized progesterone,
					<b><i>Prometrium</i></b>).
				</Paragraph>
				<Paragraph>
					Progesterone tablets can be given in two ways: continuously (meaning that you take a pill
					every day) or cyclically (meaning you take a pill on certain days per month). Cyclic
					regimens are usually selected for younger women and women at higher risk of breast cancer.
					Women on a cyclic regimen can expect to have scheduled bleeding each month. Speak to your
					healthcare provider about which option is best for you.
				</Paragraph>
				<Paragraph>
					<b>Estrogen and Progesterone Combination Products</b> are available transdermally (e.g.,
					<b><i>Estalis</i></b>
					patch) or orally (e.g., <b><i>Activelle</i></b> and <b><i>Activelle Lo</i></b>).
				</Paragraph>
				<Paragraph>
					<b>Tibolone</b> (Brand Name: <b><i>Tibella</i></b>), is a synthetic steroid that has
					estrogen, progesterone and androgen properties. It has been available in Europe for many
					years but is newer in Canada. It has favourable effects on bone density and research has
					shown it may have less unscheduled bleeding compared to other menopausal hormone therapy
					regimens.
				</Paragraph>
				{#if ($basics.period.includes('regular') || $basics.period.includes('irregular')) && !$medication.medicationSelection.includes('menopause')}
					<Paragraph customized>
						<b>
							You have indicated you still get your period, which means your ovaries are still
							making enough estrogen to build your endometrial lining.
						</b>
						If you are considering MHT, your doctor may suggest <b>cyclic progesterone</b>. This
						means you will take progesterone approximately 12 days per month. This typically allows
						you to have a “progesterone withdrawal bleed” each month. This is a simulated period
						allowing you to shed any lining that has built up inside the uterus. Cyclic progesterone
						will likely reduce your rate of unscheduled bleeding. At some point, your doctor may
						discuss switching you over to a continuous progesterone regimen so you won’t have the
						monthly withdrawal bleed.
					</Paragraph>
				{:else if $basics.period.includes('one-year') && !$surgeries.received.includes('hysterectomy') && !$history.conditions.includes('endo-cancer')}
					<Paragraph customized>
						<b>
							You have indicated it has been more than one year since your last menstrual period.
						</b>
						Your doctor may suggest you take your progesterone <b>continuously</b>. While it can be
						common to have breakthrough bleeding in the first 6 months of a Combined
						Estrogen/Progesterone regimen where the progesterone is taken continuously, it is
						important for you to tell your doctor if you do.
					</Paragraph>
				{/if}
				<Paragraph>
					<b>
						Typical starting doses and combinations for various MHT formulations available in Canada
						are shown in the Table below. Talk to your doctor about which one may be right for you.
					</b>
				</Paragraph>
				<img src="/images/MHT_Table_Sept23.png" alt="MHT doses and combinations table" />
			</div>
		{/if}
	</SubSection>
</CollapsibleCard>
