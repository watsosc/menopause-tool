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
			{#if parseInt($basics.age) < 40}
				<Paragraph customized>
					<b>
						You have indicated that you are younger than 40 years old and your periods have stopped.
					</b> This could represent a condition called Premature Ovarian Insufficiency (POI). Our education
					tool is not yet suitable for patients with a diagnosis of POI. Speak to your healthcare provider
					about the investigations, treatment recommendations and follow up necessary for you.
				</Paragraph>
			{:else if parseInt($basics.age) < 50}
				<Paragraph customized>
					<b>You have indicated that you are 40-49 years old.</b> If your last menstrual period was before
					the age of 40, you may have a condition called Premature Ovarian Insufficiency (POI). Speak
					to your doctor about this, as you may require special investigations and treatment.
				</Paragraph>
			{/if}

			{#if $basics.period === 'regular' && $medication.medicationSelection.includes('hormone')}
				<Paragraph customized>
					<b>You have indicated you still get your periods regularly.</b> It is possible to be in perimenopause
					or menopause and still get regular periods if you are taking a hormonal medication that is
					giving you a regular period.
				</Paragraph>
			{:else if $basics.period === 'regular'}
				<Paragraph customized>
					<b>You have indicated you still get your periods regularly.</b> It is possible to be in perimenopause
					and still get regular periods. You may have noticed the time between periods has begun to change.
					However, if your periods are regular and you are getting menopausal symptoms, your doctor may
					look for other reasons why this is happening.
				</Paragraph>
			{:else if $basics.period === 'medication'}
				<Paragraph customized>
					Examples of medications that can give you a regular period include birth control pills and
					menopausal hormone therapy. Whether you get a period on these medications, depends on how
					your doctor has told you to take them. If you are getting any unexpected bleeding, you
					should speak to your doctor.
				</Paragraph>

				<div class="flex flex-row justify-center print:hidden">
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
			{/if}

			{#if $basics.period === 'irregular'}
				<Paragraph customized>
					<b>Perimenopause</b> occurs during a time of fluctuating hormones. You may experience
					menstrual cycle irregularity and menopausal symptoms.
					<br /> <br />
					<b>You have indicated you still get your periods but they are irregular.</b> You may be in
					perimenopause. However, your doctor may look for other reasons why you have irregular cycles.
					If your bleeding is very heavy, lasts longer than a normal period or you have bleeding between
					your periods, your doctor may recommend further testing or investigations to you.
				</Paragraph>
			{:else if ['one-year', 'ten-year'].includes($basics.period)}
				<Paragraph customized>
					<b>Menopause</b> occurs when the ovaries decrease their functioning and no longer release
					eggs. This leads to low estrogen, which can cause menopausal symptoms.
					<b>
						You have indicated your last period was more than 1 year ago and are now postmenopausal.
					</b>
				</Paragraph>
			{:else if $basics.period === 'surgery'}
				<Paragraph customized>
					<b>Menopause</b> occurs when the ovaries decrease their functioning and no longer release
					eggs. This leads to low estrogen, which can cause menopausal symptoms. Usually, menopause
					is diagnosed after you have gone 12 months without a menstrual period.
					<br /> <br />
					<b>
						You have indicated you have had a uterine surgery that stopped your periods but you
						still have your ovaries.
					</b>
					You may experience symptoms of menopause when your ovaries begin to decrease their functioning.
					You may not know when you go into menopause because you are not getting periods.
				</Paragraph>
			{:else if $basics.period === 'medication'}
				<Paragraph customized>
					<b>Menopause</b> occurs when the ovaries decrease their functioning and no longer release
					eggs. This leads to low estrogen, which can cause menopausal symptoms. Usually, menopause
					is diagnosed after you have gone 12 months without a menstrual period.
					<br /> <br />
					<b>You have indicated you are taking medication that has stopped your periods.</b> Certain
					hormonal medications, depending on the way they are taken, can stop your periods. If you were
					not in menopause before you started the medication, it may be difficult to know if you are
					truly in menopause at this time.
				</Paragraph>
			{/if}
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
