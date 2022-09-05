<script lang="ts">
	export let list: string[] = [];
</script>

<ul class="ml-10 pb-2">
	{#each list as item}
		<li class="font-body text-xl">{@html item}</li>
	{/each}
</ul>

<style>
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
		background: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/></svg>")
			no-repeat;
	}
</style>
