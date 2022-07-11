<script lang="ts">
	export let name: string;
	export let label: string;
</script>

<label class="text-xl font-body font-bold mx-2" for={name}>{label}</label>
