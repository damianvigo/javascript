class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre;
    this.amigos = amigos;
  }

  listarAmigos() {
    this.amigos.forEach((amigos) => {
      console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigos}`);
    });
  }
}

const damian = new Persona('Damian', ['Pedro', 'Juan', 'David']);
damian.listarAmigos();
