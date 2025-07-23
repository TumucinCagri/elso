<script>
  // Ha szeretnél dinamikus adatokat, ide jöhet egy cards tömb pl.
  let cards = [
    'Kártya 1',
    'Kártya 2',
    'Kártya 3',
    'Kártya 4',
    'Kártya 5'
  ];
</script>

<style>
  .container {
    display: flex;
    flex-direction: row-reverse; /* Jobbról balra */
    gap: 1rem;
    overflow-x: auto;
    padding: 1rem;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  .card {
    min-width: 200px;
    height: 150px;
    background-color: #4A90E2;
    color: white;
    border-radius: 8px;
    padding: 1rem;
    box-sizing: border-box;
    flex-shrink: 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
</style>

<div class="container">
  {#each cards as card}
    <div class="card">{card}</div>
  {/each}
</div>
