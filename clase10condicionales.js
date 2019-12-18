var damian = 
{
nombre: 'Damian',
apellido: 'Vigo',
edad: 31,
tecnico: false,
cocinero: false,
cantante: false,
dj: false,
guitarrista: false,
JugadorDeFutbol: true
}

function imprimirProfesiones (persona)
{
  console.log(`${persona.nombre} es: `)
  
  if (persona.tecnico) {
      console.log('tecnico')
    } else {
      console.log('no es tecnico')
    }

    if(persona.cocinero) {
      console.log('cocinero')
    }
    if(persona.cocinero) {
      console.log('cantante')
    }
    if(persona.cocinero) {
      console.log('dj')
    }
    if(persona.cocinero) {
      console.log('guitarrista')
    }
    if(persona.jugadorDePc) {
      console.log('jugador De Pc')
    }
} 
imprimirProfesiones(damian)

var leandro = 
{
  nombre: 'leandro',
  edad: 16
}

function esMayorDeEdad(persona) {
  if  (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de ${persona.edad} años`);
  }  
  else {
    console.log(` No eres mayor de edad tienes: ${persona.edad} años`);
  }
  // damian es mayor de edad
  // damian es menor de edad
}
esMayorDeEdad(damian)
esMayorDeEdad(leandro) 