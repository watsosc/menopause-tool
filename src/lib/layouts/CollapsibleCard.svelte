<script lang="ts">
	import EducationTitleBar from '$lib/titles/EducationTitleBar.svelte';
	import Card from './Card.svelte';
	import Content from './Content.svelte';

	export let title: string;
	let open = false;

	const collapse = () => {
		open = !open;
	};

	$: visibility = () => `overflow-hidden ${open ? 'block' : 'hidden'} print:block`;
</script>

<Card>
	<EducationTitleBar {collapse} {open}>{title}</EducationTitleBar>
	<div class={visibility()}>
		<Content>
			<slot />
			<div class="flex flex-row-reverse">
				<div class="flex flex-row-reverse cursor-pointer print:hidden" on:click={collapse}>
					<div class="font-body text-xl">Hide Section</div>
					<div class="font-body text-xl pr-2 py-[0.2rem]">
						{open ? '\u2796' : '\u2795'}
					</div>
				</div>
			</div>
		</Content>
	</div>
</Card>
