<script>
	import { authStore } from "../../stores/authStore";
    import { auth } from "../../lib/firebase/firebase.client";

    let email;
    authStore.subscribe((curr) => {
        console.log('CURR', curr)
        email=curr?.currentUser?.email;
    });
</script>

<div>
    <h1>Current User: {email}</h1>
</div>


<style>
    div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>