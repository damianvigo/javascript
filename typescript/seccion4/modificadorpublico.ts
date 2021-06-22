class Animal {
  public nombre: string;
  public tamanio: number;

  public constructor(_nombre: string, _tamanio: number) {
    this.nombre = _nombre;
    this.tamanio = _tamanio;
  }

  public moverse(): void {
    console.log("Me estoy moviendo");
  }
}

const obj = new Animal("Serpiente", 2);
