<script lang="ts">
	import '@fontsource/fira-code';
	import Icon from 'svelte-icon/Icon.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import logo from '$lib/assets/logo.svg?raw';
	import hamburger from '$lib/assets/hamburger.svg?raw';
	import Navbar from './Navbar.svelte';
	import { browser } from '$app/environment';

	const transitionOpts = {
		duration: 200,
		easing: cubicInOut,
	};

	let enabled = false;
	let always = false;

	if (browser) {
		window.addEventListener('resize', () => {
			always = window.matchMedia('(min-width: 450px)').matches;
		});
	}
</script>

<header>
	<a class="logo-link" href="/">
		<Icon data={logo} size="4rem" />
	</a>
	{#if !always}
		<button
			transition:fade={transitionOpts}
			class="hamburger-button"
			on:click={() => (enabled = !enabled)}
		>
			<Icon data={hamburger} size="2rem" />
		</button>
	{/if}
	<Navbar {always} {enabled} />
</header>
<slot />

<style lang="scss">
	@use '$lib/styles/variables' as *;

	header {
		background-color: $clr-background-accent;

		display: grid;
		grid-template:
			'logo nav-header' auto
			'nav nav' auto / 1fr 1fr;
		justify-content: space-between;
		align-items: center;
		padding-inline: 1rem;

		.logo-link {
			grid-area: logo;
			justify-self: start;
			display: flex;
			align-items: center;
		}

		.hamburger-button {
			grid-area: nav-header;
			justify-self: end;
			background: none;
			border: none;
			cursor: pointer;
		}
	}
</style>
