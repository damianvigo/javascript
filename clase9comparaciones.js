  var x = 4, y = '4' 

 var damian = {           //objeto
  nombre: 'Damian' 
}

var otraPersona = {
   nombre: 'Damian'
}

var otraPersona = damian //mismo lugar de memoria de la variable damian, cuando se comparan con == o === va a dar true, el mismo
                         // objeto en memoria ram.      

                          // en objetos la comparacion, resulta ser false porque son independientes entre si y ubican
                        // un espacio diferente en memoria