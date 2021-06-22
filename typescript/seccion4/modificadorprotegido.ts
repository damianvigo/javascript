class Padre {
  protected nombre: string;

  public constructor(nombre_: string) {
    this.nombre = nombre_;
  }
}

class Hijo extends Padre {
  public apellido: string;

  constructor(nombre_: string, apellido_: string) {
    super(nombre_);
  }

  mostrarNombre(): void {
    console.log(this.nombre);
  }
}

/* const obj = new Hijo("Manuel", "Munioz");
obj. */
