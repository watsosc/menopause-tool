<script>
	import { basics } from './results';
</script>

<h1 class="text-3xl font-bold font-title text-primary uppercase">Menopause History Form</h1>
<form class="content">
	<label class="font-body">How old are you?</label>
	<input type="text" bind:value={$basics.age} />
</form>
