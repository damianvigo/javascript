let permiso = false;
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setNombre(nombre) {
        if (permiso) {
            this.nombre = nombre;
        }
        else {
            console.log("No tienes permisos para esto");
        }
    }
}
const objeto = new Persona("Manuel");
objeto.setNombre = "Jose";
console.log(objeto.getNombre);
