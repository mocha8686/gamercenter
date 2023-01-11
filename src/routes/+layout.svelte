<script lang="ts">
	import '$lib/styles/global.scss';
	import 'normalize.css/normalize.css';
	import Header from '$lib/components/Header.svelte';
	import type { LayoutData } from './$types';
	import { fly } from 'svelte/transition';

	export let data: LayoutData;

	const duration = 300;
	const offset = 100;
</script>

<Header />
{#key data.url}
	<div in:fly={{ duration, x: -offset, delay: duration }} out:fly={{ duration, x: offset }}>
		<slot />
	</div>
{/key}
