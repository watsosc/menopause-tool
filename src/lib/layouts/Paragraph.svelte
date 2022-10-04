<script lang="ts">
	export let customized: boolean = false;

	const paraClass = () => {
		if (customized) {
			return 'font-body text-xl text-justify my-2 p-2';
		} else {
			return 'font-body text-xl text-justify my-2';
		}
	};
</script>

{#if customized}
	<div class="border-2 border-[#000000] mt-2 rounded-lg bg-grey pr-6">
		<p class={paraClass()}>
			<slot />
		</p>
	</div>
{:else}
	<p class={paraClass()}>
		<slot />
	</p>
{/if}
