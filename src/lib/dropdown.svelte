<script>

    import { fly } from 'svelte/transition' 
    

    let save_ = $state([])

    let options = $state([])


    let ide = $state(false)

    let open = (e)=>{
        console.log(e.target.dataset.dropdown)

        let items = []

        try {
            items = JSON.parse(e.target.dataset.dropdown)

        } catch (error) {
            return
        }


        let id = 0

        id = e.target.dataset.id

        let y = 0
        let x = 0

        if (!id) {
            options = []

            let toggle = e.currentTarget.getBoundingClientRect()
             y = toggle.top
             x = toggle.left
            
             if (x === save_[0] && y === save_[1]) {
                save_ = [0, 0]
                return
             }

             save_ = [x, y]


            /* Fuggolegesen */
            let h = toggle.height
            let window_h = document.documentElement.scrollHeight

            if (y <= window_h / 2) {
                y += h + 3
            } else {
                y -= 30 * items.its.length + 3 + 10
                console.log('szia')
            }

            /* Vizszintesen */
            ide = true
            let w = toggle.width
            let w_con = 200
            let window_w = document.documentElement.scrollWidth

            if (x > window_w / 2) {
                x -= w_con - w
                ide = false
            }

        } else {
            options = options.slice(0, id)
            x = e.target.dataset.x
            y = e.target.dataset.y
            x -= 203
            if (ide) {
                x += 406
            }
            console.log(x)
        }

        items.x = x
        items.y = y
        items.id = options.length + 1
        console.log(id)


        console.log(items)
        console.log(options)
        options.push(items)
    }
</script>




{#each options as option}
<div
transition:fly={{ y: 100, duration: 800, }}
class="container" style="top: {option.y}px; left: {option.x}px;">
{#each option.its  as item}
    {#if item.status}
    <button
    data-id={option.id}
    data-x={option.x}
    data-y={option.y}
    on:click={open}
    data-dropdown={JSON.stringify(item.command)}
    class="items"><p>{item.name}</p> <p>{"->"}</p></button>
    {:else}
    <button
    class="items">{item.name}</button>
    {/if}
{/each}
</div>
{/each}



<main>
    <button
    class="toggle"
    style="right: 100px;"
    data-dropdown = {JSON.stringify({
  its: [
    { status: false, name: "Kezdőlap" },
    { status: true, name: "Felfedezés", command: {
      its: [
        { status: false, name: "Népszerű" },
        { status: false, name: "Új" },
        { status: false, name: "Követettek" }
      ]
    }},
    { status: true, name: "Beállítások", command: {
      its: [
        { status: false, name: "Személyes adatok" },
        { status: true, name: "Megjelenés", command: {
          its: [
            { status: false, name: "Világos mód" },
            { status: false, name: "Sötét mód" },
            { status: false, name: "Automatikus" }
          ]
        }},
        { status: false, name: "Értesítések" }
      ]
    }},
    { status: true, name: "Segítség", command: {
      its: [
        { status: false, name: "GYIK" },
        { status: true, name: "Kapcsolat", command: {
          its: [
            { status: false, name: "Email" },
            { status: false, name: "Telefon" }
          ]
        }}
      ]
    }},
    { status: false, name: "Kijelentkezés" }
  ]
}
)}
    on:click={open}>open</button>

    <button
    class="toggle"
    style="bottom: 100px"
    data-dropdown={JSON.stringify({
  its: [
    { status: false, name: "Játék indítása" },
    { status: true, name: "Játék mód", command: {
      its: [
        { status: false, name: "Kampány" },
        { status: true, name: "Multiplayer", command: {
          its: [
            { status: false, name: "Szerver keresés" },
            { status: false, name: "LAN játék" },
            { status: false, name: "Barátok meghívása" }
          ]
        }},
        { status: false, name: "Sandbox mód" }
      ]
    }},
    { status: true, name: "Beállítások", command: {
      its: [
        { status: true, name: "Grafika", command: {
          its: [
            { status: false, name: "Felbontás" },
            { status: false, name: "V-Sync" },
            { status: false, name: "Ray Tracing" }
          ]
        }},
        { status: true, name: "Hang", command: {
          its: [
            { status: false, name: "Zene hangereje" },
            { status: false, name: "Effektek hangereje" },
            { status: true, name: "Voice chat", command: {
              its: [
                { status: false, name: "Mikrofon engedélyezése" },
                { status: false, name: "Automatikus érzékelés" }
              ]
            }}
          ]
        }},
        { status: true, name: "Irányítás", command: {
          its: [
            { status: false, name: "Billentyűkiosztás" },
            { status: false, name: "Kontroller támogatás" }
          ]
        }}
      ]
    }},
    { status: false, name: "Kilépés" }
  ]
}
)}
    on:click={open}>open</button>

    <button
    style="left:100px ;"
    class="toggle"
    data-dropdown = {JSON.stringify({
  its: [
    { status: true, name: "Fájl", command: {
      its: [
        { status: false, name: "Új fájl" },
        { status: false, name: "Mentés" },
        { status: false, name: "Mentés másként" },
        { status: true, name: "Megnyitás", command: {
          its: [
            { status: false, name: "Helyi fájl" },
            { status: true, name: "Felhő", command: {
              its: [
                { status: false, name: "Google Drive" },
                { status: false, name: "Dropbox" },
                { status: false, name: "OneDrive" }
              ]
            }}
          ]
        }}
      ]
    }},
    { status: true, name: "Szerkesztés", command: {
      its: [
        { status: false, name: "Vágás" },
        { status: false, name: "Másolás" },
        { status: false, name: "Beillesztés" },
        { status: false, name: "Visszavonás" }
      ]
    }},
    { status: true, name: "Nézet", command: {
      its: [
        { status: false, name: "Nagyítás" },
        { status: true, name: "Kis nézet", command: {
          its: [
            { status: false, name: "Lista" },
            { status: false, name: "Rács" }
          ]
        }}
      ]
    }}
  ]
}
)}
    on:click={open}>open</button>
</main>

<style>
    .items {
        color:white;
        height: 30px;
        width: 100%;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
    }

    .items:hover {
        background-color: rgba(20, 23, 24);
    }

    

    .container {
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 200px;
        padding: 5px;
        border-radius: 8px;
        border: 1px rgb(31, 31, 36) solid;
        transition: all 0.4s ease-in-out;
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

