<script>
  import { contador } from "../stores";

  const reset = () => {
    contador.reset(1);
  };
</script>

<button on:click={reset}>Reset</button>
