<div class="hero">
    <div class="box">
        <h1>Welcome to XQ7T Site</h1>
        <p>This is a new technology-built marketplace where you can confidently buy and sell the latest gadgets.</p>
        <button>Join</button>
    </div>
</div>

<style>
    .hero {
        background-image: url(top.jpg);
        width: 100vw;
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        display: flex;
        justify-content: center;
        align-items: center;
        
        text-align: center;
        
    }

    .box {
        backdrop-filter: blur(8px);
        background-color: rgba(255, 255, 255, 0.2);
        width: 40%;  
        height: 40%;
        border-radius: 20px;
        padding: 15px;
        gap: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    h1 {
        font-size: 55px;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
        color: #222;
    }

    p {
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        color: #444;
    }

    button {
        background-color: #444;       /* Szép kék alap */
        color: white;                   /* Fehér szöveg */
        padding: 12px 24px;             /* Kényelmes belső margó */
        border: none;                  /* Nincs keret */
        border-radius: 6px;            /* Lekerekített sarkok */
        font-size: 16px;               /* Olvasható méret */
        cursor: pointer;               /* Kéz ikon az egér fölött */
        box-shadow: 0 4px 6px rgba(0,0,0,0.2); /* Enyhe árnyék */
        transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Szép átmenet */
    }

    button:hover {
        background-color: #222;
    }
    </style>