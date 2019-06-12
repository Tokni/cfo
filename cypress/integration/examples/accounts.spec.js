/// <reference types="Cypress" />

context('End testing accounts CRUD...', () => {
  beforeEach(() => {
    localStorage.setItem('sub', process.env.REACT_APP_TEST_TOKEN)
  })
   describe('./Accounts', () => {
    localStorage.setItem('sub', process.env.REACT_APP_TEST_TOKEN)
    it('Visits CFO on localhost', () => {
      cy.visit('http://localhost:3000/')
      cy.wait(500)
    })

    it('go to accounts', () => {
      cy.wait(500)
      cy.get('[name="accounts"]').click()
    })

    it('open and cancel modal', () => {
      cy.get('[name="addaccount"]').click()
      cy.get('[name="cancel"]').click()
    })

    it('open and cancel modal', () => {
      cy.get('[name="addaccount-Income"]')
        .children()
        .click()
      cy.get('[name="cancel"]').click()
    })

    it('open and submit modal', () => {
      cy.get('[name="addaccount-Income"]')
        .children()
        .click()
      cy.get('[id="name"]').type('Betri')
      cy.get('[id="accountnumber"]').type('9181-300.200.5')
      cy.get('[name="submit"]').click()
      cy.wait(200)
      cy.get('[name="addaccount-Income"]')
        .children()
        .click()
      cy.get('[id="name"]').type('Bank Nordic')
      cy.get('[id="accountnumber"]').type('6460-312.633.2')
      cy.get('[name="submit"]').click()
    })

    it('find created account number', () => {
      cy.contains('9181-300.200.5')
    })

    it('open and submit modal', () => {
      cy.get('[name="addaccount"]').click()
      cy.get('[id="name"]').type('Konta 1')
      cy.get('[name="submit"]').click()
    })

    it('find created customer', () => {
      cy.contains('Konta 1')
    })
  })
})