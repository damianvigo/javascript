class Padre {
  protected atributo1: string;
  protected atributo2: string;

  constructor(a: string, b: string) {
    this.atributo1 = a;
    this.atributo2 = b;
  }

  protected llamarAtributos(): void {
    console.log("Llamando atributos");
  }
}

class Hijo extends Padre {
  super(a, b) {}
}
