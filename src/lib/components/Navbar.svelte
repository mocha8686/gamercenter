<script lang="ts">
	const routes = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '#' },
		{ name: 'Games', href: '#' },
		{ name: 'Bots', href: '#' },
	];

	export let enabled: boolean;
</script>

<nav hidden={!enabled}>
	<ul>
		{#each routes as route}
			<li><a class="nav-link" href={route.href}>{route.name}</a></li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	@use '$lib/styles/variables' as *;

	$nav-duration: 250ms;
	$link-duration: 100ms;
	$links: 4;

	$nav-delay: $link-duration;
	$link-delay: $nav-duration;
	$delay-gap: 50ms;
	$link-delay-gap: 50ms;

	nav {
		grid-column: 1/3;
		background-color: $clr-background-accent;
		font-family: $ff-header;

		ul {
			display: flex;
			flex-direction: column;
			align-items: stretch;

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
