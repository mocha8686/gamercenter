<script lang="ts">
	import '@fontsource/fira-code';
	import Icon from 'svelte-icon/Icon.svelte';
	import Navbar from './Navbar.svelte';
	import { browser } from '$app/environment';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import hamburger from '$lib/assets/hamburger.svg?raw';
	import logo from '$lib/assets/logo.svg?raw';
	import { page } from '$app/stores';

	const transitionOpts = {
		duration: 200,
		easing: cubicInOut,
	};

	const toggleEnabled = () => (enabled = !enabled);
	const hide = () => (enabled = false);

	let enabled = false;
	let always = false;

	if (browser) {
		always = window.matchMedia('(min-width: 450px)').matches;
		window.addEventListener('resize', () => {
			always = window.matchMedia('(min-width: 450px)').matches;
		});
	}

	let url = $page.url.href;
	$: {
		if ($page.url.href !== url) {
			url = $page.url.href;
			hide();
		}
	}
</script>

<header>
	<a class="logo-link" href="/">
		<Icon data={logo} size="4rem" />
	</a>
	{#if !always}
		<button transition:fade={transitionOpts} class="hamburger-button" on:click={toggleEnabled}>
			<Icon data={hamburger} size="2rem" />
		</button>
	{/if}
	<Navbar {always} {enabled} />
</header>
<slot />

<style lang="scss">
	@use '$lib/styles/variables' as *;

	header {
		position: relative;
		z-index: 1000;

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
			text-decoration: inherit;
		}

		.hamburger-button {
			padding: 0;

			grid-area: nav-header;
			justify-self: end;

			background: none;
			border: none;
			cursor: pointer;
		}
	}
</style>
