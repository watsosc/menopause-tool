<script lang="ts">
	export let name: string;
	export let label: string;
	export let subtitle: string | null = null;
</script>

<label class="text-xl font-body font-bold mx-2 leading-snug" for={name}>{@html label}</label>
{#if !!subtitle}
	<p class="text-sm font-body mx-2 my-1">{subtitle}</p>
{/if}
