<script lang="ts">
	export let colour = 'title';

	const textClass = `text-4xl font-extrabold font-title text-${colour} m-2 ml-4`;
</script>

<div class="flex flex-row">
	<div class="w-6 bg-secondary" />
	<div class="bg-white flex-grow">
		<p class={textClass}><slot /></p>
	</div>
</div>
