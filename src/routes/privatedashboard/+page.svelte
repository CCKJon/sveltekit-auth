<script>
	import { authHandlers, authStore } from '../../stores/authStore';
	import AuthReset from '../../components/AuthReset.svelte';

	let email;
	authStore.subscribe((curr) => {
		// console.log('CURR', curr);
		email = curr?.currentUser?.email;
	});
</script>

{#if $authStore.currentUser}
	<div>
		<h1>Current User: {email}</h1>
		<AuthReset />
		<button on:click={authHandlers.logout}>Logout</button>
	</div>
{:else}
	<div>Loading....</div>
{/if}

<style>
	div {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h1 {
		text-align: center;
	}
</style>
