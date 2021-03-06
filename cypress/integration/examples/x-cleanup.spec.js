/* eslint-disable no-unused-vars */

/// <reference types="Cypress" />

context('Deleting ...', () => {
  beforeEach(() => {
    localStorage.setItem('sub', Cypress.env('REACT_APP_TEST_TOKEN'))
  })

  describe('./Transactions', () => {
    it('Visits CFO on localhost', () => {
      cy.visit('/transactions')
    })

    // it('go to transactions', () => {
    //   cy.get('[name="transactions"]').click('center')
    // })

    it('delete transaction', () => {
      cy.get('[name="delete"]').click()
    })

    it('transaction deleted successfully', () => {
      cy.wait(1000)
      cy.get('table tr')
        .children()
        .should('have.length', 0)
    })
  })

  describe('./Invoice', () => {
    it('Visits CFO on localhost', () => {
      cy.visit('/invoice')
      cy.wait(300)
    })

    // it('go to invoice', () => {
    //   cy.get('[name="invoice"]').click('center')
    // })

    it('delete invoice', () => {
      cy.get('[name="delete"]').click()
    })

    it('invoice deleted successfully', () => {
      cy.wait(1000)
      cy.get('table tr')
        .children()
        .should('have.length', 0)
    })
  })

  describe('./Bills', () => {
    it('Visits CFO on localhost', () => {
      cy.visit('/bills')
      cy.wait(500)
    })

    // it('go to bills', () => {
    //   cy.get('[name="bills"]').click('center')
    // })

    it('delete bill', () => {
      cy.get('[name="delete"]').click()
    })

    it('bill deleted successfully', () => {
      cy.wait(1000)
      cy.get('table tr')
        .children()
        .should('have.length', 0)
    })
  })

  describe('./Customers', () => {
    it('Visits CFO on localhost', () => {
      cy.visit('/customers')
      cy.wait(300)
    })

    // it('go to companies', () => {
    //   cy.get('[name="customers"]').click('center')
    // })

    it('delete customer', () => {
      cy.get('[name="delete"]').click()
    })

    it('customer deleted successfully', () => {
      cy.get('table tr')
        .children()
        .should('have.length', 0)
    })
  })

  describe('./Tax', () => {
    it('Visits CFO on localhost', () => {
      cy.visit('/tax')
      cy.wait(500)
    })

    // it('go to tax', () => {
    //   cy.get('[name="tax"]').click('center')
    // })

    it('delete tax', () => {
      cy.get('[name="delete"]').click('center', { multiple: true })
    })

    it('tax deleted successfully', () => {
      cy.get('table tr')
        .children()
        .should('have.length', 0)
    })
  })

  describe('./Products', () => {
    it('Visits CFO on localhost', () => {
      cy.visit('/products')
      cy.wait(300)
    })

    // it('go to products', () => {
    //   cy.get('[name="products"]').click('center')
    // })

    it('delete product', () => {
      cy.get('[name="delete"]')
        .children()
        .click('left')
    })

    it('product deleted successfully', () => {
      cy.get('table tr')
        .children()
        .should('have.length', 0)
    })
  })

  describe('./Vendor', () => {
    it('Visits CFO on localhost', () => {
      cy.visit('/vendor')
      cy.wait(300)
    })

    // it('go to vendor', () => {
    //   cy.get('[name="vendor"]').click('center')
    // })

    it('delete vendor', () => {
      cy.get('[name="delete"]').click()
      cy.wait(2000)
    })

    it('vendor deleted successfully', () => {
      cy.get('table tr')
        .children()
        .should('have.length', 0)
    })
  })
  describe('./Expense', () => {
    it('Visits CFO on localhost', () => {
      cy.visit('/expense')
      cy.wait(300)
    })

    // it('go to expense', () => {
    //   cy.get('[name="expense"]').click('center')
    // })

    it('delete expense', () => {
      cy.get('[name="delete"]').click()
      cy.wait(2000)
    })

    it('expense deleted successfully', () => {
      cy.get('table tr')
        .children()
        .should('have.length', 0)
    })
  })
})
