<script>
    let { data } = $props()

    import Cards from '$lib/card.svelte'
	import { render } from 'svelte/server';


    let input = $state()

    let yes = $state(false)


    let title = $state('')
    let category = $state('')
    let content = $state('')

    let ezkell = []
    let info = {}
    let kovi = 0
    for (let i =0; i<data.uzenet.length; i++) {
        const t = data.uzenet[i]
        const tt = t.category
        if (tt in info) {
            ezkell[info[tt]].push(t)
        } else {
            info[tt] = kovi
            ezkell.push([t])
            kovi++
        }
    console.log(ezkell)
    }
</script>

<button
style="position: fixed; z-index:100; background-color:white;"
onclick={()=>{
    yes = !yes
}}>
    Upload

</button>

<div class="upload {yes ? 'open':''}">
    <h1>Make Card</h1>
    <input bind:value={title} type="text" placeholder="Title*">
    <input bind:value={category} type="text" placeholder="category*">
    <textarea bind:value={content} style="width: 95%; max-height:30%; overflow-y:hidden;"></textarea>
    <button
    onclick={async ()=>{
        const response = await fetch('/', {
            method: 'POST',
            body: JSON.stringify({
                'title':title,
                'category':category,
                'content':content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        
        })
    location.reload()
    }}>Send</button>
</div>


<h1>{input}</h1>


{#each ezkell as adat}
    <Cards mi={adat}  />
{/each}

<style>
    .upload {
        z-index: 99;
        position: fixed;
        background-color: white;
        width: 200px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 17px;

        visibility: hidden;
    }

    .open {
        visibility: visible;
    }
</style>