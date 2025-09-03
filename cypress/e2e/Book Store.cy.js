describe('Book Store', () => {

  it('Book Store', () => {
    cy.visit('https://exercises.test-design.org/online-book-store/')


    let newPrices = [40, 49.99, 50, 29, 30, 30.01, 60];
    let oldPrices = [59, 60.01, 61, 60, 0];
    let vipCustomers = [true, false];
  
    for (let newPrice of newPrices) {
      cy.get('[data-harmony-id="New price"]').clear().type(newPrice);

      for (let oldPrice of oldPrices) {
        cy.get('[data-harmony-id="Second price"]').clear().type(oldPrice);

        for (let vipCustomer of vipCustomers) {
          if (vipCustomer) {
            cy.get('[data-harmony-id="Card"]').check();
          } else {
            cy.get('[data-harmony-id="Card"]').uncheck();
          }
          cy.get('[data-harmony-id="Add test"]').click();
        }
      }
    }
    cy.get('[data-harmony-id="Stop"]').click();
  })
})