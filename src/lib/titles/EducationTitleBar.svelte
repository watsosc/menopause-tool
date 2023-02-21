<script lang="ts">
	export let collapse: () => void;
	export let open: boolean;
</script>

<div
	class="flex flex-row cursor-pointer print:break-before-page print:break-after-avoid-page"
	on:click={collapse}
>
	<div class="w-6 bg-secondary print:w-0" />
	<div class="bg-orange flex-grow print:bg-white">
		<p class="text-2xl font-title font-semibold ml-4 my-2 print:ml-0 print:mt-8"><slot /></p>
	</div>
	<div class="font-title text-2xl text-grey pr-2 bg-orange py-2 print:hidden">
		{open ? '\u2796' : '\u2795'}
	</div>
</div>
