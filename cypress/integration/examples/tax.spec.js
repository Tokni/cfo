/* eslint-disable no-unused-vars */
/// <reference types="Cypress" />

context('End testing tax ...', () => {
  beforeEach(() => {
    localStorage.setItem('sub', Cypress.env('REACT_APP_TEST_TOKEN'))
  })
  describe('./Tax', () => {
    it('Visits CFO on localhost', () => {
      cy.visit('/tax')
      cy.wait(1000)
    })

    // it('go to tax', () => {
    //   cy.wait(1000)
    //   cy.get('[name="tax"]').click()
    // })

    it('open and cancel modal', () => {
      cy.get('[name="addtax"]').click()
      cy.get('[name="cancel"]').click()
    })

    it('open and submit modal', () => {
      cy.get('[name="addtax"]').click()
      cy.get('[id="tax"]').type('MVG')
      cy.get('[id="taxPercentage"]').type(25)
      cy.get('[name="submit"]').click()
    })

    it('open and submit modal', () => {
      cy.wait(200)
      cy.get('[name="addtax"]').click()
      cy.get('[id="tax"]').type('øl')
      cy.get('[id="taxPercentage"]').type(0.51)
      cy.get('[name="submit"]').click()
    })

    it('find created tax at rate 25%', () => {
      cy.contains(/^([0]{1}([,]|[.])[2,5]{2})$/) // checks for format x,xx and x.xx
    })

    it('find created tax at rate 51%', () => {
      cy.contains(/^([0]{1}([,]|[.])[1,5]{2})$/) // checks for format x,xx and x.xx
    })

    //   it('update vendor', () => {
    //     cy.get('[name="update"]').click()
    //     cy.get('[id="name"]').type(' and 5G')
    //     cy.get('[name="submit"]').click()
    //   })

    //   it('find updated vendor', () => {
    //     cy.contains('FT and 5G')
    //   })
  })
})
