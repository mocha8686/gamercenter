<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	export let always: boolean;
	export let enabled: boolean;

	const routes = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '#' },
		{ name: 'Games', href: '#' },
		{ name: 'Bots', href: '#' },
	];

	const transitionOpts = {
		duration: 300,
		easing: cubicInOut,
		x: 100,
	};
</script>

<!-- Mobile -->
{#if !always && enabled}
	<nav class="mobile" transition:slide={transitionOpts}>
		<ul>
			{#each routes as route}
				<li><a class="nav-link" href={route.href}>{route.name}</a></li>
			{/each}
		</ul>
	</nav>
{/if}

<!-- Desktop -->
{#if always}
	<nav class="desktop" transition:fly={transitionOpts}>
		<ul>
			{#each routes as route}
				<li><a class="nav-link" href={route.href}>{route.name}</a></li>
			{/each}
		</ul>
	</nav>
{/if}

<style lang="scss">
	@use '$lib/styles/variables' as *;

	nav {
		grid-area: nav;

		background-color: $clr-background-accent;
		font-family: $ff-header;

		display: flex;
		flex-direction: column;
		align-items: stretch;

		&.desktop {
			grid-area: nav-header;
			flex-direction: row;
			justify-content: flex-end;
			gap: 2rem;
		}

		ul {
			display: contents;

			li {
				text-align: center;

				.nav-link {
					display: block;
					padding-block: 1rem;
				}
			}
		}
	}

	@media (hover: hover) {
		.nav-link {
			transition: color 150ms ease-out;
		}

		.nav-link:hover {
			color: $clr-accent;
		}
	}
</style>
