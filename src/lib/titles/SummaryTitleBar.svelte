<script lang="ts">
	export let Icon: any = null;
</script>

<div class="flex flex-row">
	<div class="w-6 bg-secondary" />
	<div class="bg-green flex-grow">
		<p class="text-2xl font-title font-semibold ml-4 my-2"><slot /></p>
	</div>
	{#if Icon}
		<div class="bg-green pr-2">
			<Icon height={48} />
		</div>
	{/if}
</div>
