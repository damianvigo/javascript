   //////////// Funciones Anónima Autoejecutable IIFE
   (function () {
    console.log('Primer IIFE');
  }) ();
  
  (function (d, w, c) {
    console.log('Segunda IIFE');
    console.log(d);
    console.log(w);
    c.log('Este es console.log');
  })(document, window, console);

  // Clásica
  (function () {
    console.log('versión Clásica')
  })();

  // La Crockford (Creador del formato Json) (JavaScript The Good Parts)
  ((function () {
    console.log('versión Crockford')
  })());
  
  //Unaria
  +function () {
    console.log('version Unaria')
  }();

  //Facebook
  !function () {
    console.log('version Facebook')
  }();