//const { xit } = require("mocha");

describe('Price Calculation', () => {
  it('Without card', () => {
    cy.visit('https://exercises.test-design.org/price-calculation/')
    cy.get('[data-harmony-id="Price"]').type('200');
    cy.get('[data-harmony-id="Weight"]').type('4');
    cy.get('[data-harmony-id="Add test"]').click();
    cy.get('[data-harmony-id="Total price"]').should('have.text', '180');
  })

  it('With card', () => {
    cy.visit('https://exercises.test-design.org/price-calculation/')
    cy.get('[data-harmony-id="Price"]').type('200');
    cy.get('[data-harmony-id="Weight"]').type('4');
    cy.get('[data-harmony-id="Card"]').check();
    cy.get('[data-harmony-id="Add test"]').click();
    cy.get('[data-harmony-id="Total price"]').should('have.text', '170');
  })

  let prices = ["99", "100", "101", "199", "200", "201"];
  let weights = ["4", "5", "6"];
  let cards = [true, false];


  it('All cases', () => {
    cy.visit('https://exercises.test-design.org/price-calculation/')
    for (let price of prices) {
      cy.get('[data-harmony-id="Price"]').type(price);
      for (let weight of weights) {
        cy.get('[data-harmony-id="Weight"]').type(weight);
        for (let card of cards) {
          if (card === true) {
            cy.get('[data-harmony-id="Card"]').check();
          }
          cy.get('[data-harmony-id="Add test"]').click();
          cy.get('[data-harmony-id="Card"]').uncheck();
        }
        cy.get('[data-harmony-id="Weight"]').clear();
      }
        cy.get('[data-harmony-id="Price"]').clear();
    }
    cy.get('[data-harmony-id="Stop"]').click();
    //cy.get('[data-harmony-id="Total price"]').should('have.text','170');
  })
})