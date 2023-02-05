<div class="flex flex-row mb-2 -ml-4 print:ml-0">
	<div class="w-6 bg-secondary-light print:w-0" />
	<div class="bg-orange w-[70%] py-1 print:bg-white">
		<p class="text-2xl font-title font-semibold ml-4 print:ml-0 print:mt-6"><slot /></p>
	</div>
	<div class="triangle" />
</div>

<style>
	.triangle {
		border-color: white white white #fde4cf;
		border-style: solid;
		border-width: 1.3rem;
		height: 0px;
		width: 0px;
	}
</style>
