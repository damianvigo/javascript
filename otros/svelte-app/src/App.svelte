<script>
  /*   let counter = 0;
  let textColor = "text-primary";

  let increaseCount = () => {
    counter++;
    if (counter > 5) {
      textColor = "text-danger";
    }
  };

	$: double = counter * 2;
	$: message = counter > 5 ? 'is higher that 5' : 'is lower that 5';

	$: if(counter > 5) {
		textColor = 'text-danger'
	} */

  let frameworks = ["svelte", "angular", "vue"];
  let numbers = [2, 5, 13];

  const increaseNumber = () => {
    let num = Math.floor(Math.random() * (20 - 1)) + 1;
    // numbers.push(num);
    numbers = [...numbers, num];
    console.log(numbers);
  };
</script>

<style>
  /*   .text-primary {
    color: blue;
  }
  .text-danger {
    color: red;
  } */
</style>

<main class="container">
  <!--   <h1 class={textColor}>Counter: {counter}</h1>
  <button on:click={increaseCount}>plus</button>

	<h2>{message}</h2>

	<h2>Doble: {double}</h2>
	<h2>Doble: {double}</h2> -->

  <h1>Frameworks</h1>
  <ul>
    {#each frameworks as framework, index}
      <li>{index + 1} {framework}</li>
    {/each}
  </ul>

  {#if numbers.length > 5}
    <h3>more that 5 numbers</h3>
  {:else}
    <button on:click={increaseNumber} class="btn btn-primary">
      Agregar numero
    </button>
  {/if}

  <ul>
    {#each numbers as number}
      <li>{number}</li>
    {/each}
  </ul>
</main>
