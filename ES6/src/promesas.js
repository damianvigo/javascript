const promesa = new Promise((resolve, reject) => { // la promesa necesita un argumento y esta es una funcion
  // accion que se ejecutara.
  // resolve()
  // reject()
  setTimeout(() => {
    const exito = true 
    if(exito) {
      resolve('La operacion tuvo exito')
    } else {
      reject('La operacion no tuvo exito')
    }
  }, 4000)
}) 

promesa.then((mensaje) => {
  alert(mensaje)
})

promesa.catch((mensaje) => {
  alert(mensaje)
})