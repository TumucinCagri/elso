<script>
    const ans = ['alma', 'szilva', 'apple']
</script>

<div class="main">
    {#each ans as an}
        <div class="box">{an}</div>
    {/each}
</div>

<style>
    .main {
        width: 100%;
        height: 100vh;
        background-image: url('/top.jpg');
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }

    .box {
        backdrop-filter: blur(14px);
        border-radius: 15px;
        width: 250px;
        height: 350px;
        transition: all 0.4s ease;
    }

    .box:hover {
        transform: scale(1.1);
    }
</style>
