/// <reference types="Cypress" />
//Dodaj gornju liniju za ukljucit InteliSense

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// ## first passing test ##
// describe('My first test', () => {
//   it('Does not much !', ()=>{
//     expect(true).to.equal(true)
//   })
// })

// ## first fail test ##
// describe('My first test', ()=>{
//   it('Does so much wow', ()=>{
//     expect(true).to.equal(false)
//   })
// })

// ## visiting a page test ##
// ## trazi neki objekt na stranici koji glasi type ##
// describe('First web test', ()=>{
//   it('Visits the link and looks for looks for an element', ()=>{
//     cy.visit('https://example.cypress.io')
//     cy.contains('type')
//   })
// })

// ## visit the site, find an element that has Type and click on it ##
// describe('First web test', ()=>{
//   it('Clicks the Type element', ()=>{
//     cy.visit('https://example.cypress.io')
//     cy.contains('type').click()
//   })
// })

// ## visit the site and test if it's the correct URL ##
// describe('First web test', ()=>{
//   it('Clicking the Type element navigates to new url', ()=>{
//     cy.visit('https://example.cypress.io')
//     cy.contains('type').click()

//     cy.url().should('include', '/commands/actions')
//   })
// })

// ## type into the input of className mentioned in get() and type a value ##
// describe('First web test', ()=>{
//   it('Clicking the Type element navigates to new url', ()=>{
//     cy.visit('https://example.cypress.io')
//     cy.contains('type').click()

//     cy.url().should('include', '/commands/actions')

//     cy.get('.action-email').type('fake@email.com')
//     //verify
//     cy.get('.action-email').should('have.value', 'fake@email.com')
//   })
// })

describe('Page contains elements', () => {
  it('Check if the page contains 2 input elements and 1 button', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#usernameInput').should('exist')
    cy.get('#passwordInput').should('exist')
    cy.contains('#buttonLogIn', 'Submit').should('exist')
  })
})

describe('Elements have certain values', () => {
  it('Check if the input fields contain what is written', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#usernameInput').type('jpivac@pmfst.hr')
    cy.get('#passwordInput').type('1234')

    cy.get('#usernameInput').should('have.value', 'jpivac@pmfst.hr')
    cy.get('#passwordInput').should('have.value', '1234')
  })
})

describe('Are the input fields empty', () => {
  it('Check if the input fields are empty after pressing the button', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#usernameInput').type('jpivac@pmfst.hr')
    cy.get('#passwordInput').type('1234')

    cy.contains('#buttonLogIn', 'Submit').click()

    cy.get('#usernameInput').should('have.value', '')
    cy.get('#passwordInput').should('have.value', '')
  })
})