function mostrar(data: string): string {
  return data;
}

function mostrar2<T>(data: T): T {
  return data;
}

const numero = mostrar2(5);
// numero.
const palabra = mostrar2("Damian");
// palabra.
const si = mostrar2(true);
// palabra.
