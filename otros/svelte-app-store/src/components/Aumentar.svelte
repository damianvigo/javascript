<script>
  import { contador } from '../stores'

  const aumentar = () => {
    contador.sumar()
  }
</script>

<button on:click={aumentar}>Aumentar</button>
