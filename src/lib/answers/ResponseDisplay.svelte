<script lang="ts">
	export let response: string | null | undefined;
	export let context: string;

	let text = response ? response : '____';
</script>

<b>{text} {context}</b>
