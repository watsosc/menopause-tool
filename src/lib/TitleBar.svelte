<script lang="ts">
	export let color: string = 'primary';

	$: internalDiv = `bg-${color} flex-grow`;
</script>

<div class="flex flex-row">
	<div class="w-6 bg-secondary" />
	<div class={internalDiv}>
		<p class="text-2xl font-title font-semibold ml-4 my-2"><slot /></p>
	</div>
</div>
