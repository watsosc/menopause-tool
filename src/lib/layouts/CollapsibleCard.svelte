<script lang="ts">
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
	import Card from './Card.svelte';
	import Content from './Content.svelte';

	export let title: string;
	let open = true;

	const collapse = () => {
		open = !open;
	};

	$: visibility = () => `overflow-hidden ${open ? 'block' : 'hidden'}`;
</script>

<Card>
	<EducationTitleBar {collapse} {open}>{title}</EducationTitleBar>
	<div class={visibility()}>
		<Content>
			<slot />
		</Content>
	</div>
</Card>
