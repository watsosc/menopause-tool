<script lang="ts">
	export let title: string;
</script>

<div class="flex -mx-4 mt-2">
	<p
		class="flex-shrink bg-orange-light font-title text-2xl font-semibold pl-8 pr-4 pt-1 border-t border-r print:bg-white"
	>
		{title}
	</p>
	<div class="flex-grow border-b" />
</div>
<div class="bg-orange-light -mx-4 p-4 px-8 border-b print:bg-white">
	<slot />
</div>
