let permiso: boolean = false;
class Persona {
  public nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  get getNombre(): string {
    return this.nombre;
  }

  set setNombre(nombre: string) {
    if (permiso) {
      this.nombre = nombre;
    } else {
      console.log("No tienes permisos para esto");
    }
  }
}

const objeto = new Persona("Manuel");
objeto.setNombre = "Jose";
console.log(objeto.getNombre);
