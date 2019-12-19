const usuario = {
  nombre: 'Damian',
  correo: ' correo@correo.com',
  edad: 30, 
  pais: 'Argentina',
  profesion: 'Desarrollador Web'
}

const {nombre, pais, profesion = 'No especificado'} = usuario

// console.log(profesion)

const mostrarInfo = ( { nombre, profesion } ) => console.log(`${nombre} es ${profesion}`)


mostrarInfo(usuario)

