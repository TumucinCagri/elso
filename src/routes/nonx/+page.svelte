<script>


    let yes = $state(false)

    let x = $state(0)
    let y = $state(0)


    let test_ = ()=>{
        console.log('success')
    }

    let mm = [{name:'Home', command: test_}, {name:'About', command: test_}, {name:'Contact', command: test_}, {name:'Blog', command: test_}]


    let here = (e)=>{
        yes = !yes

        let h = e.currentTarget.getBoundingClientRect().height


        x = e.currentTarget.getBoundingClientRect().left
        y = e.currentTarget.getBoundingClientRect().top

        const winW = document.documentElement.scrollWidth
        const winH = document.documentElement.scrollHeight

        console.log(h)

        if (y < winH / 2) {
            y += h + 3
        }  else if (y > winH / 2) {
            y -= 33 * mm.length + 3
        }

    }


</script>

<div style="left: {x}px; top:{y}px;" class="dropdown-container {yes ? 'open':''}">
    {#each mm as item}
        <button
        on:click={item.command}
        class="dropdown-items"><p>{item.name}</p>  <p></p></button>
    {/each}
</div>

<main>
    <button
    on:click={here}
    style="bottom: 100px;"
    class="dropdown-toggle">open</button>


</main>

<style>
    .dropdown-container {
        position: absolute;
        color: white;
        padding: 5px;
        border: 1px rgb(31, 31, 36) solid;
        background-color: rgba(10, 13, 14);
        width: 250px;
        border-radius: 8px;
        justify-content: start;
        display: flex;
        flex-direction: column;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s ease;
        transform: scale(0.9) translateY(-3px);
    }

    .dropdown-container.open {
        visibility: visible;
        opacity: 1;
        transform: scale(1) translateY(0px);
    }

    .dropdown-items {
        padding: 5px;
        border-radius: 4px;
        cursor: pointer;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: start;
    }

    .dropdown-items:hover {
        background-color: rgb(20, 20, 20);
        justify-content: start;
    }

    main {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(10, 13, 14);
    }

    .dropdown-toggle {
        position: absolute;
        cursor: pointer;
        width: 56px;
        height: 30px;
        border-radius: 4px;
        background-color: rgba(20, 23, 24);
        border: 1px rgb(31, 31, 36) solid;
        color: white;
    }

</style>