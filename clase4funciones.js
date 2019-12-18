var nombre = 'Damian', edad = 28;

function imprimirEdad(n, e) /* lenguaje interpretado, function para reutilizar codigo */
{
  console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Vicky', 28)
imprimirEdad('Eric', 24)
imprimirEdad('Dario', 27)
imprimirEdad(25, 'Carlos')

/* es un lenguaje debilmente tipeado */