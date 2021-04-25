<script>
  import { contador, maximo } from "./stores";
  import Contador from "./components/Contador.svelte";
  import Aumentar from "./components/Aumentar.svelte";
  import Reset from "./components/Reset.svelte";
  import Restar from "./components/Restar.svelte";
</script>

<main>
  <h1>Store: {$contador}</h1>
	<h4>{$maximo}</h4>
  <Contador />
  <Aumentar />
	<Reset />
	<Restar />
</main>
