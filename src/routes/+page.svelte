<script>
    let { data } = $props()


    let index = $state(0)
    
    let mennyi = 5
    
    let plus = ()=>{
        index ++
        index %= mennyi
    }

    let indexl = $derived(((((index+1)%mennyi)+mennyi)%mennyi))

    let indexr = $derived(((((index-1)%mennyi)+mennyi)%mennyi))

    let indexlL = $derived(((((indexl+1)%mennyi)+mennyi)%mennyi))

    let indexrL = $derived(((((indexr-1)%mennyi)+mennyi)%mennyi))

</script>

<h1>{index}</h1>
<h1>{indexl}</h1>
<h1>{indexr}</h1>
<h1>...</h1>
<h1>{indexlL}</h1>
<h1>{indexrL}</h1>

<div 
class="cont">
    {#each ['szia', 'papus', 'cigany', 'bence', 'tum'] as cigi, i}
        <div
        class="card {i==index ? 'center':''} {i==indexl ? 'left':''} {i==indexr ? 'right':''} {i==indexlL ? 'leftL':''} {i==indexrL ? 'rightL':''}">
            <h1 style="color: white;">{cigi}</h1>
        </div>
    {/each}
</div>


<button onclick={plus}>
    plusz
</button>

<style>
    .cont {
        position: relative;
        display: flex;
        background-color: aquamarine;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 400px;
        overflow: hidden;
    }

    .card {
        position: absolute;
        width: 350px;
        height: 350px;
        background-color: rgb(0, 0, 0);
        border-radius: 12px;
        
        transition: all 1s ease;
        


        background-image: url('/top.jpg');
        background-position: center;
        background-size: cover;
        z-index: 2;

        opacity: 0;
    }


    .center {
        transform: scale(1.08) rotate(3deg);
        opacity: 1;
    }


    .left {
        transform: translateX(-430px) rotateY(-50deg);
        opacity: 1;
    }



    .right {
        transform:  translateX(430px) rotateY(50deg);
        opacity: 1;
    }

    .leftL {
        transform: translateX(-860px);
    }

    .rightL {
        transform: translateX(860px);
    }



</style>