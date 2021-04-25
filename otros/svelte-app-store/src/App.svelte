<script>
  import { contador } from "./stores";
  import Contador from "./components/Contador.svelte";
  import Aumentar from "./components/Aumentar.svelte";
</script>

<main>
  <h1>Store: {$contador}</h1>
  <Contador />
  <Aumentar />
</main>
