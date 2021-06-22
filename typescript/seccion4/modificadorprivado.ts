class Animal {
  private nombre: string;
  private tamanio: number;

  public constructor(_nombre: string, _tamanio: number) {
    this.nombre = _nombre;
    this.tamanio = _tamanio;
  }

  public moverse(): void {
    console.log("Me estoy moviendo");
  }
}

const obj = new Animal("Serpiente", 2);

/*   class Conectar {
     private url:string = ''
  }
  
  const ob = new Conectar()
  ob. */
