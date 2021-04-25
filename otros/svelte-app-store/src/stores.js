import { derived, writable } from 'svelte/store';

const createContador = () => {
  const { subscribe, update, set } = writable(0);

  return {
    subscribe,
    sumar: () => {
      update((n) => n + 1);
    },
    restar: () => {
      update((n) => n - 1);
    },
    reset: () => {
      set(0);
    },
  };
};

export const contador = createContador();

export const maximo = derived(contador, ($contador) => {
  if ($contador === 5) {
    return 'El maximo es 5';
  } else if ($contador > 5) {
    contador.reset();
  } else {
    return 'Aun Falta...';
  }
});
