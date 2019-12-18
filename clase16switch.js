 var signo = prompt('Cuál es tu signo?')

 switch (signo.toLowerCase, signo.toUpperCase()) {
  case 'acuario':
  case 'ACUARIO':
  case 'Acuario':
    console.log('te gusta el agua')
    break
  case 'piscis':
    console.log()  
  break
  case 'cancer':
    console.log()
  default:
    console.log('No es un signo zodiacal válido')
}