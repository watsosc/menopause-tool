<script lang="ts">
	export let colour = 'title';

	const textClass = `text-4xl font-extrabold font-title text-${colour} m-2 ml-4 print:mx-0 print:my-2`;
</script>

<div class="flex flex-row">
	<div class="w-6 bg-secondary print:w-0" />
	<div class="bg-white flex-grow">
		<p class={textClass}><slot /></p>
	</div>
	<div class="max-h-[56px] min-h-[56px]">
		<img src="/images/sinai-logo.png" alt="Sinai Health Logo" />
	</div>
</div>
