<script>
  let cards = ['Kártya 1', 'Kártya 2', 'Kártya 3', 'Kártya 4', 'Kártya 5', 'Kártya 1', 'Kártya 2', 'Kártya 3', 'Kártya 4', 'Kártya 5'];

  let container;
  let isDown = false;
  let startX;
  let scrollLeft;

  function onMouseDown(event) {
    isDown = true;
    container.classList.add('active');
    startX = event.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  }

  function onMouseLeave() {
    isDown = false;
    container.classList.remove('active');
  }

  function onMouseUp() {
    isDown = false;
    container.classList.remove('active');
  }

  function onMouseMove(event) {
    if(!isDown) return;
    event.preventDefault();
    const x = event.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // *2 az érzékenység, állíthatod
    container.scrollLeft = scrollLeft - walk;
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: row-reverse;
    overflow-x: auto;
    cursor: grab;
    gap: 1rem;
    padding: 1rem;
    user-select: none;
    scrollbar-width: none;
  }

  .container::-webkit-scrollbar {
    display: none;
  }

  .container.active {
    cursor: grabbing;
  }

  .card {
    min-width: 200px;
    height: 150px;
    background-color: #4A90E2;
    color: white;
    border-radius: 8px;
    padding: 1rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
</style>

<div
  bind:this={container}
  class="container"
  on:mousedown={onMouseDown}
  on:mouseleave={onMouseLeave}
  on:mouseup={onMouseUp}
  on:mousemove={onMouseMove}
>
  {#each cards as card}
    <div class="card">{card}</div>
  {/each}
</div>
