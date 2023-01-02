<script>
	import Card from '$lib/layouts/Card.svelte';
	import Content from '$lib/layouts/Content.svelte';
	import Image from '$lib/layouts/Image.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import SubSection from '$lib/layouts/SubSection.svelte';
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
	import { history, treatment } from '../../../store';
</script>

<Card>
	<EducationTitleBar>Your Vaginal Symptoms</EducationTitleBar>
	<Content>
		<Image>
			<img class="max-w-[250px]" src="/images/symptoms_vaginaldryness.png" alt="Vaginal dryness" />
		</Image>
		<Paragraph>
			The vulva, vagina, lower urinary tract and pelvic floor muscles contain estrogen receptors and
			are sensitive to the hormonal changes of menopause. These changes are termed
			<b>“Genitourinary Syndrome of Menopause” (GSM).</b>
		</Paragraph>
		<Paragraph>
			<b>
				GSM is a broad term that can include vaginal dryness, burning and irritation, pain with sex,
				lack of vaginal lubrication, urinary tract infections as well as urinary urgency and pain
				with urination.
			</b>
			GSM can also cause changes in the outward appearance of the vulva, including shrinking of the labia
			minora, loss of pubic hair, narrowing of the opening of the vagina, changes in vaginal discharge
			and paler colour of the skin. <b>GSM occurs in about 40-50% of menopausal women.</b>
		</Paragraph>
		<Paragraph>
			<b>
				Speak to your doctor about your symptoms. They will likely suggest a physical examination to
				rule out other issues such as infection or skin conditions.
			</b>
		</Paragraph>
		<SubSection title="Treating Genitourinary Syndrome of Menopause">
			<div class="pl-4">
				{#if $treatment.current.includes('vaginal-treatment')}
					<Paragraph customized>
						<b> You have indicated you are currently using treatment for your vaginal symptoms. </b>
						If you are on treatment but are still bothered by your vaginal symptoms, speak to your doctor
						as your regimen can likely be adjusted or a new option introduced.
					</Paragraph>
				{/if}
				<p class="font-title text-2xl border-b border-secondary mt-6 mb-4">
					Non-Hormonal Treatments
				</p>
				<Paragraph>
					<ol class="ml-4 list-decimal">
						<li>
							<b>Avoiding irritants</b> such as soaps, detergents, chlorine, and some spermicides contained
							in condoms may be helpful. Wearing a pad, especially if you have wetness associated with
							urine leakage, can also be irritating to vulvar skin. Barrier ointments can help avoid
							this, as can wearing cotton underwear and avoiding triggers.
						</li>
						<li class="mt-2">
							<b>Lubricants</b> are helpful for those who have pain with sex. Lubricants have no long
							lasting effects. Water-based lubricants that are free of chemical additives, especially
							parabens, are the least irritating to vulvar skin.
						</li>
						<li class="mt-2">
							<b>Moisturizers</b> are available over-the-counter and are another first-line therapy
							for management of GSM. They bind to the vaginal tissue like a biofilm and can be used
							regularly 2-3 times per week. They help to reduce friction with intercourse and bind
							water to restore some moisture in the vulva and vagina. Brand names that can be
							purchased in Canada include <i>Replens, Gynatrof</i>
							and <i>Zestica</i>. <i>RepaGyn</i> is another option, which comes in a tablet form that
							is inserted into the vagina.
						</li>
						<li class="mt-2">
							<b>Pelvic floor physiotherapy</b> can be helpful for women with GSM who experience pain
							with sex, especially if the pain is secondary to spasm of the pelvic floor muscles. This
							can be assessed on a pelvic exam.
						</li>
					</ol>
				</Paragraph>
				<p class="font-title text-2xl border-b border-secondary mt-6 mb-4">Hormonal Treatments</p>
				<Paragraph>
					<b>Vaginal estrogen is the most effective therapy for management of GSM.</b> It helps to
					increase blood supply to vulvar and vaginal tissue, improve tissue quality and restore
					vaginal pH. Vaginal estrogen therapy can be delivered as a cream (Brand Names:
					<b><i>Estragyn</i></b>
					or <b><i>Premarin</i></b>), a vaginal suppository (Brand Name: <b><i>Vagifem</i></b>), or
					a ring (Brand Name: <b><i>Estring</i></b>).
				</Paragraph>
				<Paragraph>
					Vaginal estrogen has an excellent safety profile and has been extensively studied. It is
					not associated with increased cardiovascular risk or risk of cancer. Vaginal estrogen is
					an option for some breast cancer survivors.
				</Paragraph>
				<Paragraph>
					<b>Ospemiphene</b> (Brand Name: <b><i>Osphena</i></b>) is a selective estrogen receptor
					modulator (SERM) that is used to treat GSM and sexual dysfunction. It is taken as an oral
					tablet daily. It can be good for people who find it challenging to insert anything into
					the vagina. While uncommon, side effects can include hot flashes, as well as risk of blood
					clots, stroke, heart attack. It has also been associated with vaginal bleeding in some
					women. If you take this medication and have bleeding, it is very important you speak to
					your family doctor. This medication is relatively new in Canada. There are many people who
					should not take this medication. Speak to your doctor about whether this medication is an
					option for you.
				</Paragraph>
				<Paragraph>
					<b>Dehydroepiandrosterone (DHEA or prasterone)</b> is a vaginal suppository that is
					inserted daily. It contains inactive precursors to androgens and estrogens that get
					converted into their active forms in vaginal tissues. It has been recently approved in
					Canada. Its brand name is
					<b><i>Intrarosa</i></b>.
				</Paragraph>
				{#if $history.conditions.includes('breast-cancer')}
					<Paragraph customized>
						<b>You have indicated you have a history of breast cancer.</b> Vaginal estrogen should not
						be used as a first-line option to treat GSM for you. Decision-making should be shared between
						you and your doctor and incorporate opinions from all members of your healthcare team.
					</Paragraph>
				{/if}
			</div>
		</SubSection>
	</Content>
</Card>
