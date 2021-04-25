<script>
  import { contador } from '../stores'

  const aumentar = () => {
    contador.update((n) => n + 1)
  }
</script>

<main>
  <button on:click={aumentar}>Aumentar</button>
</main>