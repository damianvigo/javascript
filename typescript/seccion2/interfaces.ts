interface Personas {
  nombre: string;
  edad: number;
}

let persona: Personas = { nombre: "Ikki", edad: 20 };

function mostrarPersona(p: Personas) {
  console.log(p.nombre);
  console.log(p.edad);
}

mostrarPersona(persona);
