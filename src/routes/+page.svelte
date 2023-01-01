<script lang="ts">
	let thing = 'world';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Hello, <span class="thing">{thing}!</span></p>
<input bind:value={thing} />

<style lang="scss">
	.thing {
		font-size: 2rem;
	}
</style>
