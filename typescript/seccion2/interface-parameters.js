function mostrarPersonas(p) {
    var datos = "Este caballero es " + p.nombre + " tiene " + p.edad;
    if (p.altura) {
        return datos + " y su altura es de " + p.altura;
    }
    else {
        return "Esta persona no tiene altura";
    }
}
var persona = {
    nombre: "Ikki",
    edad: 25
};
console.log(mostrarPersonas(persona));
