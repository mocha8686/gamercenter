<script lang="ts">
	import '@fontsource/fira-code';
	import Icon from 'svelte-icon/Icon.svelte';

	import logo from '$lib/assets/logo.svg?raw';
	import hamburger from '$lib/assets/hamburger.svg?raw';
	import Navbar from './Navbar.svelte';

	let enabled = false;
</script>

<header>
	<a class="logo-link" href="/">
		<Icon data={logo} size="4rem" />
	</a>
	<button class="hamburger-button" on:click={() => (enabled = !enabled)}>
		<Icon data={hamburger} size="2rem" />
	</button>
</header>
<Navbar {enabled} />
<slot />

<style lang="scss">
	@use '$lib/styles/variables' as *;

	header {
		background-color: $clr-background-accent;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-inline: 1rem;

		.logo-link {
			justify-self: start;
			display: flex;
			align-items: center;
		}

		.hamburger-button {
			position: relative;
			z-index: 1;

			justify-self: end;
			background: none;
			border: none;
			cursor: pointer;
		}
	}
</style>
