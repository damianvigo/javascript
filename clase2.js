var nombre = 'Damian', apellido = 'Vigo';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primerLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var ultima = nombre.substr(5)

console.log('tu nombre es: ' + nombreCompleto + ' ' + 'tenes en total: ' + cantidadDeLetrasDelNombre + ' ' + 'letras' + ' y tu ultima letra de tu nombre es: ' + ultima)



