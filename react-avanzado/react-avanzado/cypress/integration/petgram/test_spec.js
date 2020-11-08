/* global describe, it, cy */

describe('Primer test', function () {
  it('ir al home', function () {
    cy.visit('/')
  })

  it('navegar a categoria y ver foto', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('navegar con la navbar a la home', function() {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('los usuarios no registrados ven el formulario de registro o inicio de sesion al ir a favs', function() {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})