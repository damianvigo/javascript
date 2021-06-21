var mostrar = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 32; }
    return "Se llama " + nombre + " su apellido es " + apellido + " y tiene " + edad + " anios";
};
console.log(mostrar("Carolina", "Munoz", 40));
console.log(mostrar("Victoria", "Mas"));
