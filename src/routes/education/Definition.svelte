<script>
	import Card from '$lib/layouts/Card.svelte';
	import Content from '$lib/layouts/Content.svelte';
	import Image from '$lib/layouts/Image.svelte';
	import Paragraph from '$lib/layouts/Paragraph.svelte';
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<EducationTitleBar>Defining Perimenopause and Menopause</EducationTitleBar>
		<Content>
			<Paragraph>
				<b>
					Not everyone’s menopause is the same and people go through it at different times and
					rates.
				</b>
				To help you better understand, some general definitions related to menopause and perimenopause
				are described below.
			</Paragraph>
			<Paragraph>
				<b><u>Perimenopause</u> occurs during a time of fluctuating hormones.</b> People may experience
				irregular periods and menopausal symptoms. It can last 4 to 8 years and typically starts with
				changes in the length of time between periods and ends 1 year after the final menstrual period.
			</Paragraph>
			<img src="/images/menopause_timeline.png" alt="Menopause timeline" />
			<Paragraph>
				<b>
					<u>Menopause</u> occurs when the ovaries decrease their functioning and no longer release eggs.
				</b>
				This leads to low estrogen, which can cause symptoms of menopause. Usually, menopause is diagnosed
				after you have gone 12 months without a menstrual period.
				<b>The average age of natural menopause in Canada is 51 years old.</b>
			</Paragraph>
			<img class="mt-4" src="/images/menopause_age.png" alt="Menopause age" />
			<Paragraph>
				<b>
					<u>Early menopause</u> is when menopause happens between the ages of 40 and 45 years old.
				</b>
				This affects 5% of women.
			</Paragraph>
			<Paragraph>
				<b>
					<u>Premature ovarian insufficiency (POI)</u> is when menopause occurs before the age of 40
					years old.
				</b>
				POI happens in 1% of women. In most cases (85%), we don’t know what causes premature ovarian
				insufficiency. Sometimes, there is a genetic reason, an autoimmune cause or an exposure that
				has led to this condition. If you have this type of menopause and there is no obvious reason
				why it happened, your doctor will take a detailed medical and family history and likely suggest
				specific investigations.
			</Paragraph>
			<Paragraph>
				<b><u>Induced menopause</u></b> can happen after treatments such as radiation therapy and some
				chemotherapies.
			</Paragraph>
			<Paragraph>
				<b><u>Surgical menopause</u></b> happens after surgery to remove a person’s ovaries. Symptoms
				with this type of menopause can have a more abrupt onset and be more severe and frequent.
			</Paragraph>
			<Image>
				<img class="max-w-[250px]" src="/images/surgery.png" alt="Surgery" />
			</Image>
		</Content>
	</Card>
</div>
