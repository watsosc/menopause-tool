<script>
	import Card from '$lib/layouts/Card.svelte';
	import Content from '$lib/layouts/Content.svelte';
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
	import Management from './Management.svelte';
	import { treatment, menopause } from '../../../store';
	import Vasomotor from './Vasomotor.svelte';
</script>

<div class="container mx-auto px-4">
	<Card>
		<EducationTitleBar>Managing Menopausal Symptoms</EducationTitleBar>
		<Content>
			{#if ($treatment.all.length > 0 && $treatment.current.length === 0) || ($treatment.current.length > 0 && $treatment.helping !== 'much')}
				<Management />
			{/if}

			<Vasomotor />
		</Content>
	</Card>
</div>
