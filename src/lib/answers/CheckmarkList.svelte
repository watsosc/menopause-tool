<script lang="ts">
	export let list: string[] = [];
</script>

<ul class="ml-10 mt-4 print:list-disc">
	{#each list as item}
		<li class="font-body text-xl">{@html item}</li>
	{/each}
</ul>

<style>
	@media screen {
		ul {
			list-style: none;
			padding-left: 0;
		}
		li {
			position: relative;
			padding-left: 1.5em; /* space to preserve indentation on wrap */
		}
		li:before {
			content: '';
			position: absolute;
			left: 0;
			top: 5px;
			width: 1em;
			height: 1em;
			background: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg width='18' height='18' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z'/></svg>")
				no-repeat;
		}
	}
</style>
