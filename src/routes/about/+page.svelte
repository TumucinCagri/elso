<script>
  let email = '';
  let password = '';
  let error = '';
  let success = false;

  function handleLogin() {
    // Ide jön majd az igazi auth (backend vagy API)
    if (email === 'admin@example.com' && password === 'admin123') {
      success = true;
      error = '';
    } else {
      error = 'Hibás email vagy jelszó.';
      success = false;
    }
  }
</script>

<style>
  .login-container {
    max-width: 400px;
    margin: 10vh auto;
    padding: 2rem;
    background: #ffffffcc;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    font-family: sans-serif;
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0.7rem;
    margin: 0.5rem 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    width: 100%;
    padding: 0.8rem;
    background-color: #4f46e5;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
  }

  button:hover {
    background-color: #4338ca;
  }

  .error {
    color: #e11d48;
    margin-top: 0.5rem;
    text-align: center;
  }

  .success {
    color: #10b981;
    margin-top: 0.5rem;
    text-align: center;
  }
</style>

<div class="login-container">
  <h2>Bejelentkezés</h2>
  <form on:submit|preventDefault={handleLogin}>
    <input type="email" placeholder="Email cím" bind:value={email} required />
    <input type="password" placeholder="Jelszó" bind:value={password} required />
    <button type="submit">Belépés</button>
  </form>

  {#if error}
    <div class="error">{error}</div>
  {/if}

  {#if success}
    <div class="success">Sikeres bejelentkezés! 🎉</div>
  {/if}
</div>
