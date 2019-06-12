/// <reference types="Cypress" />

context('Deleting ...', () => {
  beforeEach(() => {
    localStorage.setItem('sub', process.env.REACT_APP_TEST_TOKEN)
  })
  
  describe('./Invoice', () => {
    it('Visits CFO on localhost', () => {
      cy.visit('http://localhost:3000/')
      cy.wait(300)
    })

    it('go to invoice', () => {
      cy.get('[name="invoice"]').click()
    })

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
      cy.visit('http://localhost:3000/')
      cy.wait(500)
    })

    it('go to bills', () => {
      cy.get('[name="bills"]').click()
    })

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
      cy.visit('http://localhost:3000/')
      cy.wait(300)
    })

    it('go to companies', () => {
      cy.get('[name="customers"]').click()
    })

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
      cy.visit('http://localhost:3000/')
      cy.wait(500)
    })

    it('go to tax', () => {
      cy.get('[name="tax"]').click()
    })

    it('delete tax', () => {
      cy.get(':nth-child(1) > :nth-child(6) > .MuiButtonBase-root-278').click()
      cy.wait(700)
      cy.get(':nth-child(1) > :nth-child(6) > .MuiButtonBase-root-278').click()
    })

    it('tax deleted successfully', () => {
      cy.get('table tr')
        .children()
        .should('have.length', 0)
    })
  })

  describe('./Products', () => {
    it('Visits CFO on localhost', () => {
      cy.visit('http://localhost:3000/')
      cy.wait(300)
    })

    it('go to products', () => {
      cy.get('[name="products"]').click()
    })

    it('delete product', () => {
      cy.get('[name="delete"]').click()
    })

    it('product deleted successfully', () => {
      cy.get('table tr')
        .children()
        .should('have.length', 0)
    })
  })

  describe('./Vendor', () => {
    it('Visits CFO on localhost', () => {
      cy.visit('http://localhost:3000/')
      cy.wait(300)
    })

    it('go to vendor', () => {
      cy.get('[name="vendor"]').click()
    })

    it('delete vendoor', () => {
      cy.get('[name="delete"]').click()
      cy.wait(2000)
    })

    it('vendor deleted successfully', () => {
      cy.get('table tr')
        .children()
        .should('have.length', 0)
    })

    describe('./Expense', () => {
      it('Visits CFO on localhost', () => {
        cy.visit('http://localhost:3000/')
        cy.wait(300)
      })

      it('go to expense', () => {
        cy.get('[name="expense"]').click()
      })

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
})