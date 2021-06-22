interface Personas {
  nombre: string;
  edad: number;
  altura?: string;
}

function mostrarPersonas(p: Personas): string {
  let datos = `Este caballero es ${p.nombre} tiene ${p.edad}`;
  if (p.altura) {
    return `${datos} y su altura es de ${p.altura}`;
  } else {
    return "Esta persona no tiene altura";
  }
}

let persona: Personas = {
  nombre: "Ikki",
  edad: 25,
  /* altura: "177cm", */
};

console.log(mostrarPersonas(persona));
