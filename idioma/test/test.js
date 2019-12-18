const expect = require('chai').expect
const idioma = require('..').default

describe('#idioma', function () {

  it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function () {
    const translation = idioma('Programar')
    expect(translation).to.equal('Program') 
  })

  it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
    const translation = idioma('Zorro')
    const translation2 = idioma('Zarpar')

    expect(translation).to.equal('Zorrope')
    expect(translation2).to.equal('Zarppe')
  })

  it('Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio', function () {
    const translation = idioma('abecedario')
    expect(translation).to.equal('abece-dario')
  })

  it('Si la palabra origin es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalanado mayusculas y minusculas', function () {
    const translation = idioma('sometemos')
    expect(translation).to.equal('SoMeTeMoS')
  })

})