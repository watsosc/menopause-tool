<script>
	import Card from '$lib/layouts/Card.svelte';
	import Content from '$lib/layouts/Content.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
	import { basics, medication } from '../../store';
</script>

<div class="container mx-auto px-4">
	<Card>
		<EducationTitleBar>Your Menstrual Period</EducationTitleBar>
		<Content>
			<Paragraph customized>
				<b>
					Menopause occurs when the ovaries decrease their functioning and no longer release eggs.
				</b>
				This leads to low estrogen, which can cause menopausal symptoms. Usually, menopause is diagnosed
				after you have gone 12 months without a menstrual period.
			</Paragraph>

			{#if parseInt($basics.age) < 40}
				<Paragraph customized>
					<b>
						You have indicated that you are younger than 40 years old and your periods have stopped.
					</b> This could represent a condition called Premature Ovarian Insufficiency (POI). Our education
					tool is not yet suitable for patients with a diagnosis of POI. Speak to your healthcare provider
					about the investigations, treatment recommendations and follow up necessary for you.
				</Paragraph>
			{:else if parseInt($basics.age) < 50 && !$basics.period.some( (selection) => ['ovarian-surgery', 'medical-treatment'].includes(selection) )}
				<Paragraph customized>
					<b>You have indicated that you are 40-49 years old.</b> If you ever experienced four (or
					more) months without a natural menstrual period before the age of 40 that
					<b>
						could not be explained by a medical condition (e.g., PCOS, pregnancy, etc.), medication
						use or surgery,
					</b>
					your doctor may want to review your history and consider a condition called Premature Ovarian
					Insufficiency (POI). Speak to your doctor about this, as you may require special investigations
					and treatment.
				</Paragraph>
			{/if}

			{#if $basics.period.includes('regular') && $medication.medicationSelection.includes('hormone')}
				<Paragraph customized>
					<b>You have indicated you still get a natural period regularly.</b> It is possible to be in
					perimenopause or menopause and still get regular periods if you are taking a hormonal medication
					that is giving you a regular period.
				</Paragraph>
			{:else if $basics.period.includes('regular')}
				<Paragraph customized>
					<b>You have indicated you still get a natural period regularly.</b> It is possible to be in
					perimenopause and still get regular periods. You may have noticed the time between periods
					has begun to change. However, if your periods are regular and you are getting menopausal symptoms,
					your doctor may look for other reasons why this is happening.
				</Paragraph>
			{/if}

			{#if $basics.period.includes('irregular') && !$basics.period.some( (selection) => ['regular', 'one-year', 'ten-year', 'ovarian-surgery', 'medication-stop', 'medication-expected'].includes(selection) )}
				<Paragraph customized>
					<b>
						You have indicated you still get your period but it is irregular. You may be in
						perimenopause.
					</b>
					Perimenopause occurs during a time of fluctuating hormones. You may experience menstrual cycle
					irregularity and menopausal symptoms. However, your doctor may look for other reasons why you
					have irregular cycles. If your bleeding is very heavy, lasts longer than a normal period or
					you have bleeding between your periods, your doctor may recommend further testing or investigations
					to you.
				</Paragraph>
			{/if}

			{#if $basics.period.includes('one-year')}
				<Paragraph customized>
					<b>
						You have indicated it has been at least 1 year since your last natural period but less
						than 10 years since your last period. You are likely now postmenopausal.
					</b>
				</Paragraph>
			{/if}

			{#if $basics.period.includes('ten-year')}
				<Paragraph customized>
					<b>
						You have indicated it has been more than 10 years since your last natural period. You
						are most likely now postmenopausal.
					</b>
				</Paragraph>
			{/if}

			{#if $basics.period.includes('surgery')}
				<Paragraph customized>
					<b>You have indicated you have had uterine surgery that stopped your periods.</b> You may experience
					symptoms of menopause when your ovaries begin to decrease their functioning. You may not know
					when you go into menopause because you are not getting periods.
				</Paragraph>
			{/if}

			{#if $basics.period.includes('surgery-ovarian')}
				<Paragraph customized>
					<b>You have indicated you have had surgery to remove BOTH your ovaries.</b> If you were not
					in menopause before your surgery, you will be menopausal now.
				</Paragraph>
			{/if}

			{#if $basics.period.includes('medical-treatment') && !$basics.period.includes('surgery-ovarian')}
				<Paragraph customized>
					You have indicated you had
					<b>medical treatment (e.g., chemotherapy, radiation therapy)</b>
					that decreased the function of your ovaries and/or put you into perimenopause or menopause.
					Some cancer treatments can impact ovarian function.
					<b>
						If you still have a uterus, you may not get a regular period without medication to
						simulate a natural menstrual cycle.
					</b>
				</Paragraph>
			{/if}

			{#if $basics.period.includes('medication-stop') && !$basics.period.includes('surgery-ovarian')}
				<Paragraph customized>
					<b>
						You have indicated you aren’t sure if you still get a natural period because you take
						medication that has stopped your periods (e.g., Lupron, Mirena IUD, birth control pill,
						hormone therapy). Certain hormonal medications, depending on the way they are taken, can
						stop your periods.
					</b>
					If you were not in menopause before you started the medication, it may be difficult to know
					if you are truly in menopause at this time.
				</Paragraph>
			{/if}

			{#if $basics.period.includes('medication-expected') && !$basics.period.includes('surgery-ovarian')}
				<Paragraph customized>
					<b>
						You have indicated you aren’t sure if you still get a natural period because you take
						medication that gives you an expected period.
					</b>
					Examples of medications that can give you a regular period include birth control pills and
					menopausal hormone therapy. Whether you get a period on these medications, depends on how your
					doctor has told you to take them. If you are getting any unexpected bleeding, you should speak
					to your doctor.
				</Paragraph>
			{/if}
			<div class="flex flex-row justify-center mt-4 print:hidden">
				<img
					class="max-w-[350px] mx-4"
					src="/images/birth_control_pill.png"
					alt="Birth control pill"
				/>
				<img
					class="max-w-[350px] mx-4"
					src="/images/cyclic_progesterone.png"
					alt="Cyclic progesterone"
				/>
			</div>
			{#if $basics.bleeding === 'yes'}
				<Paragraph customized>
					<b>Postmenopausal bleeding</b> occurs when someone has vaginal bleeding after having 12 or
					more months without a period. There are many different causes of postmenopausal bleeding.
					<br /> <br />
					<b>
						By indicating you had bleeding after going more than 12 months without a period, you may
						have had postmenopausal bleeding.
					</b>
					You should speak to your doctor about this as they will likely suggest different tests to rule
					out worrisome causes of postmenopausal bleeding. If you have already had these investigations
					and your doctor is not worried about any abnormalities, there may be a larger number of menopausal
					therapies available to you.
				</Paragraph>
			{/if}
		</Content>
	</Card>
</div>
