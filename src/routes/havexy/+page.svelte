<script>
    let x = $state(0) 
    let y = $state(0) 



    let options = ['Home']

    let yes = $state(false) 

    let save_ = [0, 0]

    let open = (e)=>{
        let toggle = e.currentTarget.getBoundingClientRect()
        y = toggle.top
        x = toggle.left
        if (save_[0] != x || save_[1] != y) {
            yes = false
            save_ = [x, y]
            console.log(save_, x, y)
        }

        /* Fuggolegesen */
        let h = toggle.height
        let window_h = document.documentElement.scrollHeight

        if (y < window_h / 2) {
            y += h + 3
        } else {
            y -= 30 * options.length + 3 + 10
        }


        /* Vizszintesen */
        let w = toggle.width
        let w_con = 250
        let window_w = document.documentElement.scrollWidth

        if (x > window_w / 2) {
            x -= w_con - w
        }

        yes = !yes
    }
</script>

<div
class="container {yes ? 'open':''}" style="top: {y}px; left: {x}px;">
{#each options as option}
    <button
    class="items">{option}</button>
{/each}
</div>


<main>
    <button
    class="toggle"
    on:click={open}>open</button>


    <button
    style="left:100px ;"
    class="toggle"
    on:click={open}>open</button>
</main>

<style>
    .items {
        color:white;
        height: 30px;
        width: 100%;
        border-radius: 4px;
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 5px;
    }

    .items:hover {
        background-color: rgba(20, 23, 24);
    }

    

    .container {
        display: flex;
        visibility: hidden;
        opacity: 0;
        position: absolute;
        width: 250px;
        padding: 5px;
        border: 1px rgb(31, 31, 36) solid;
        transition: all 0.4s ease-in-out;
        transform: scale(0.9) translateY(50px);
    }

    .container.open {
        visibility: visible;
        opacity: 1;
        transform:translateY(0px);
    }

    main {
        width: 100%;
        height: 100vh;
        background-color: rgba(10, 13, 14);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .toggle {
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