var opcionales = function (nombre, apellido, edad) {
    if (edad) {
        console.log("se llama " + nombre + " su apellido es " + apellido + " y su edad es " + edad);
    }
    else {
        console.log("se llama " + nombre + " y su apellido es " + apellido);
    }
};
// opcionales('Carolina', 'Hernandez', 29)
opcionales("Carolina", "Hernandez", 29);
