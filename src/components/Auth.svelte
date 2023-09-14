<script>
    let register=false;
    let email="";
    let password="";
    let confirmPassword="";
</script>


<div class="container">
    <h1>Sign up</h1>
    <form>
        <label>
            <input bind:value={email} type="text" placeholder="Email">
        </label>
        <label>
            <input bind:value={password} type="password" placeholder="Password">
        </label>
        {#if register}
        <label>
            <input bind:value={confirmPassword} type="password" placeholder="Confirm Password">
        </label>
        {/if}
        <button>Submit</button>
    </form>
    {#if register}
        <div>Already have an account? <p>Log in</p></div>
    {:else}
        <div>Don't have an account?
            <p>Sign Up</p>
        </div>
    {/if}
</div>

<style>
    .container {
        display: grid;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
    }
    .container form {
        display: flex;
        flex-direction: column;
    }
</style>