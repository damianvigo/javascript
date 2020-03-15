/* Instanciamos la dependencia con require() */
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let URL_API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest(); // Referencia del objeto que necesitamos.
  /* Hacemos un llamado a una url */
  xhttp.open('GET', url_api, true) // El último parámetro hace referencia al asincronismo. Por defecto es true, pero lo ponemos para referencia.

  // escuchar lo que va a hacer la conexión y validar.
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) { // Validar si la petición se completó. (Estado 5 pero contamos desde 0 como en un array)
      if (xhttp.status === 200) { // Validar el estado en el que se encuentra la petición. (200 = todo bien, 400 = no encontró algo, 500 = error en el servidor)
        /* Regresar el callback (primer valor que pasamos es el error y el segundo es el resultado del llamado a la API) */
        callback(null, JSON.parse(xhttp.responseText)) // Como el resultado viene en formato de texto de JSON, lo tenemos que convertir a un objeto para trabajar con él
      } else {
        /* Definimos y retornamos un error en caso de obtenerlo (buena práctica) */
        const error = newError('Error ' + url_api)
        return callback(error, null)
      }
    }
  }
  xhttp.send(); // Enviamos la petición.
  }

  // llamamos la funcion y pasamos la url esto devolvera toda la informacion
  fetchData(URL_API, function(error1, data1) {
    
    // retornara en que url fallo y terminara la ejecucion
    if (error1) return console.log(error1);
  
    // En data1 se guardo la primera respuesta
    // URL concatenamos el valor que se encuentra data1.results[0].id ente caso es 1
    //la url que pasamos es https://rickandmortyapi.com/api/character/1
    fetchData(URL_API + data1.results[0].id, function(error2, data2) {
  
      // retornara en que url fallo y terminara la ejecucion
      if (error2) return console.log(error2);
  
      // data2 tiene un objeto con la respuesta de la anterior URL
      // data2 es toda la información de Rick Sanches
      // data2.origin.url es una URL que contiene el objeto https://rickandmortyapi.com/api/location/1
      fetchData(data2.origin.url, function(error3, data3) {
  
        // retornara en que url fallo y terminara la ejecucion
        if (error3) return console.log(error3);
  
        // data3 tiene como valor la respuesta de la anterior URL
        // En conclusion data1, data2 y data3 tienen diferentes valores
        console.log(data1.info);
        console.log(data2.name);
        console.log(data3.dimension);
      });
    });
  });