<script lang="ts">
	import 'iconify-icon';

	export const prerender = true;

	const email = 'gamer.center.mail@gmail.com';
</script>

<main>
	<h1>About</h1>
	<p>Gaming gamers.</p>
	<p>This is a little personal project to work on web dev stuff. Don't expect frequent updates.</p>

	<address>
		<section class="contact">
			<iconify-icon icon="mdi:email" class="email" />
			<a href="mailto:{email}">{email}</a>
		</section>
	</address>
</main>

<style lang="scss">
	.contact {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.25rem;
	}
</style>
