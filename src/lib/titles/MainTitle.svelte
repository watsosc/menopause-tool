<script lang="ts">
	export let colour = 'title';

	const textClass = `text-4xl font-extrabold font-title text-${colour} m-2 ml-4`;
</script>

<div class="flex flex-row max-h-[56px]">
	<div class="w-6 bg-secondary" />
	<div class="bg-white flex-grow">
		<p class={textClass}><slot /></p>
	</div>
	<img class="mr-2" src="/images/GYNQI_logo.png" alt="GYN QI Logo" width={58} />
	<img src="/images/sinai-logo.png" alt="Sinai Health Logo" width={152} />
</div>
