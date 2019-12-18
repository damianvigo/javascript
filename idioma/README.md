# Idioma

Idioma. 
Es un idioma inventado para el primer curso de JavaScript.

## Descripcion del idioma 

- Si la palabra termina en "ar", se le quitan esos dos caracteres
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio
- Si la palabra origin es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalanado mayusculas y minusculas

## Instalación 

```
npm install idioma
```

## Uso 

```
import idioma from 'idioma'

console.log(idiomaInventado('Programar')) // Program
console.log(idiomaInventado('Zorro')) //  Zorrope
console.log(idiomaInventado('Zarpar')) // Zarppe
console.log(idiomaInventado('abecedario')) // abece-dario
console.log(idiomaInventado('sometemos')) // SoMeTeMoS
```

## Créditos 
- [Damian Vigo](https://damianvigo.com)

## Licencia

[MIT](https://opensource.org/licenses/MIT)