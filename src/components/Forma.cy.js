import React from 'react'
import Forma from './Forma'

describe('<Forma />', () => {
  beforeEach(()=>{
    cy.mount(<Forma />)
  })

  it('Treba sadržavati dva elementa za unos i jedno dugme', () => {
    cy.get('#usernameInput').should('exist')
    cy.get('#passwordInput').should('exist')
    cy.get('#buttonLogIn').should('exist')
  });

  it('Input elementi trebaju sadržavati određenu vrijednost', () => {
    cy.get('#usernameInput').type('Josip')
    cy.get('#passwordInput').type('1234')

    cy.get('#usernameInput').should('have.value', 'Josip')
    cy.get('#passwordInput').should('have.value', '1234')
  });

  it('Nakon pritiska dugmeta, input elementi ne smiju imati neku vrijednost u sebi', ()=>{
    cy.contains('#buttonLogIn', 'Submit').click()

    cy.get('#usernameInput').should('have.value', '')
    cy.get('#passwordInput').should('have.value', '')
  });
})