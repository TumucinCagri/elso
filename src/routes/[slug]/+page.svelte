<script>
    let { data } = $props()
</script>

<div class="inter">
    <h1>{data.data.title}</h1>
    <p>{data.data.content}</p>
</div>

<style>
    .inter {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: rgb(0, 0, 0);
        text-shadow: 0px 0px 20px black;
        width: 100%;
        height: 100vh;
        background-color: aquamarine;
        gap: 100px;
    }

    h1 {
        font-size: 85px;
    }

    p {
        font-size: 25px;
    }
</style>