<script>
    let open = $state(false);

    let toggle = () => {
        open = !open
    }
</script>

<main>
    <div class="dropdown">
    <button
    on:click={toggle}
    class="dropdown-toggle">
        open
    </button>
    <div class="dropdown-menu {open ? 'open' : ''}">
        <button class="dropdown-item">Home</button>
        <button class="dropdown-item">About</button>
        <button class="dropdown-item">Contact</button>
    </div>
</div>

</main>

<style>
    main {
        width:100%;
        height:100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(10, 13, 14);
    }

    .dropdown {
        color: white;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
    }

    .dropdown-toggle {
        position: absolute;
        border-radius: 4px;
        background-color: rgba(20, 23, 24);
        border: 1px rgb(31, 31, 36) solid;
        color: white;
        width: 56px;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .dropdown-toggle:hover{
        background-color: rgba(25, 25, 25);
    }

    .dropdown-menu {
        background-color: rgba(20, 23, 24);
        width: 100%;
        top: 60px;
        position: relative;
        justify-content: start;
        align-items:s;
        flex-direction: column;
        border-radius: 8px;
        padding: 5px;
        transition: all 0.3s ease-in-out;
        display: flex;
        opacity: 0;
        transform: translateY(-10px) scale(0.9);
        visibility: hidden;

    }

    .dropdown-menu.open {
        transform: translateY(0) scale(1);
        visibility: visible;
        opacity: 1;
    }

    .dropdown-item {
        background-color: transparent;
        color: white;
        width: 100%;
        height: 30px;
        border-radius: 4px;
        cursor: pointer;
    }

    .dropdown-item:hover {
        background-color: rgb(25, 25, 25);
    }
</style>