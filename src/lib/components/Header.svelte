<script lang="ts">
	import Navbar from './Navbar.svelte';
	import Icon from 'svelte-icon/Icon.svelte';

	import logo from '$lib/assets/logo.svg?raw';
	import hamburger from '$lib/assets/hamburger.svg?raw';

	import '$lib/styles/global.scss';
	import 'normalize.css/normalize.css';

	let enabled = false;
</script>

<header>
	<div class="logo-container">
		<Icon data={logo} size="4rem" />
	</div>
	<div class="hamburger-container">
		<Icon data={hamburger} size="2rem" />
	</div>
</header>
<Navbar {enabled} />
<slot />

<style lang="scss">
	header {
		display: grid;
		grid-template: 4rem / auto 4rem;
		align-items: center;
		justify-items: center;

		.logo-container {
			grid-row: 1;
			grid-column: 1 / 3;
		}
		.hamburger-container {
			grid-row: 1;
			grid-column: 2 / 3;
		}
	}
</style>
