

  var damian = /* objeto! */ 
  {
  nombre: 'Damian',
  apellido: 'vigo',
  edad: 31
  }
  
  var dario = 
  {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
  }
  
  /* function imprimirNombreEnMayusculas (persona)  agregar un parametro para no modificar la variable global 
  {                                             nombre solo existe dentro de la funcion
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
  }
  
  
  
  imprimirNombreEnMayusculas(damian)
  imprimirNombreEnMayusculas(dario) */
  
  function imprimirNombreYEdad (nye)
  {
      var {nombre, apellido, edad} = nye;
      /* console.log( `Hola, me llamo ${nombre}, mi edad es ${edad}`) */
      console.log(`hola mi nombre es ${nombre} y tengo ${31} años` )                                   
  }
  
  imprimirNombreYEdad(damian);
  /*  Hola, me llamo Sacha y tengo 28 años
      Hola, me llamo Dario y tengo 21 años */

 function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  } 
 }



