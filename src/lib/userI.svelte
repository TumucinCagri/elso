<script>
    let name = ''
</script>

<div class="user">
    <h2>Welcome Back</h2>
    {#if name}
    <p>{name.split('@')[0]}</p>
    {:else}
    <p>...</p>
    {/if}

    <form action="">
        <div class="box">
            <label for="">Email</label>
            <input bind:value={name} type="email" required>
        </div>
        <div class="box">
            <label for="">Password</label>
            <input type="password" required>
        </div>
        <button>Login</button>
    </form>
</div>

<style>
    .user {
        position: fixed;
        top: 15px;
        left: 15px;
        margin: 0;
        padding: 15px;
        width: 200px;
        height:300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgb(252, 252, 252);
        border: 2px solid black;
        border-radius: 13px;
    }

    .box {
        margin: 5px;
    }

    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    input {
        padding: 3px;
        text-align: center;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.25);
    }

    button {
        background-color: rgb(162, 162, 162);
        height: 35px;
        width: 80%;
        border-radius: 20px;
    }

    button:hover {
        background-color: rgb(79, 79, 79);
        color: white;
    }
</style>