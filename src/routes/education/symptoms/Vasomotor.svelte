<script>
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import EducationSubTitle from '$lib/titles/EducationSubTitle.svelte';
	import { bmi, medication } from '../../../store';
</script>

<div>
	<EducationSubTitle>Vasomotor Symptoms</EducationSubTitle>
	<Paragraph>
		<b>Hot flashes and night sweats are called vasomotor symptoms.</b> They are common symptoms of
		menopause occurring in about <b>80% of women</b>. A hot flash is the sensation of heat, usually
		starting in the chest and rising upwards. It can be accompanied by anxiety or palpitations.
		These symptoms last an average of 7 years, can start before the last menstrual period, and can
		continue afterwards.
		<br /><br />
		<b>
			About 20% of women experiencing hot flashes will have severe symptoms with 20-30 episodes per
			day.
		</b>
		The cause of vasomotor symptoms is not well understood but has to do with estrogen’s effect on the
		body’s ability to regulate temperature.
		<br /><br />
		Vasomotor symptoms can also be caused and worsened by other medical concerns, such as thyroid disease,
		some medications, and smoking.
	</Paragraph>

	{#if $medication.medicationSelection.includes('thyroid')}
		<Paragraph customized>
			<b>You have indicated you take medication to help your thyroid.</b> Thyroid problems can cause
			and worsen hot flashes and night sweats. It is important to have your thyroid levels checked with
			your doctor and make sure you have the right medication dose.
		</Paragraph>
	{/if}

	<div class="bg-orange-light mt-2 -mx-4 p-4 px-8">
		<p class="font-title text-2xl border-b mb-4">Lifestyle Changes</p>
		<Paragraph>
			<b>
				Cognitive behaviour therapy (CBT) has been shown to be effective in managing vasomotor
				symptoms in several studies.
			</b>
			This can be accessed through counsellors or psychiatric services.
			<br /><br />
			<b>Weight loss</b> can also be associated with improvement or even elimination of vasomotor symptoms
			for women who are overweight.
		</Paragraph>
		{#if Number($bmi) > 25}
			<Paragraph customized>
				<b>
					Your Body Mass Index is currently above 25 kg/m2. If you are able to lose weight, it may
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

		<p class="font-title text-2xl border-b mt-6 mb-4">Naturopathic and Complementary Medicine</p>
	</div>
</div>
