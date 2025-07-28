<script>
    let { mi } = $props()

    let index = $state(0)
    
    let mennyi = mi.length
    
    let plus = ()=>{
        index ++
        index %= mennyi
    }

    let minus = ()=>{
        index --
        index = ((index%mennyi)+mennyi)%mennyi
    }

    let indexl = $derived(((((index+1)%mennyi)+mennyi)%mennyi))

    let indexr = $derived(((((index-1)%mennyi)+mennyi)%mennyi))

    let indexlL = $derived(((((indexl+1)%mennyi)+mennyi)%mennyi))

    let indexrL = $derived(((((indexr-1)%mennyi)+mennyi)%mennyi))

    console.log(mi)
</script>

<div 
class="cont">
    <h1 style="position: absolute; top:5px; left:5px; color:white; text-shadow: 0px 0px 12px black ;">{mi.category}</h1>
    {#each mi as cigi, i}
                    <div
        class="card {i==index ? 'center':''} {i==indexl ? 'left':''} {i==indexr ? 'right':''} {i==indexlL ? 'leftL':''} {i==indexrL ? 'rightL':''}">
            <h1 style="color: white;"><a href="{cigi.title}">{cigi.title}</a></h1>
        </div>
    {/each}
    <button onclick={minus} style="left: 20px;">Vissza</button>
    <button onclick={plus} style="right: 20px;">Elore</button>
</div>

<style>
    * {
        text-shadow: 0px 0px 12px black ;
    }

    button {
        position: absolute;
        z-index: 5;
        font-size: 30px;
        cursor: pointer;
        color: white;
    }

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
        background-color: rgb(255, 255, 255);
        border-radius: 12px;
        
        transition: all 1s ease;
        


        background-image: url('/top.jpg');
        background-position: center;
        background-size: cover;
        z-index: 2;

        opacity: 0;

    }


    .center:hover {
        transform: scale(1.1) rotate(3deg);
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