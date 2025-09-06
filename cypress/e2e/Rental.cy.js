describe('Rental', () => {
  it('Vehicle Rental', () => {
    cy.visit('https://exercises.test-design.org/rental/')

    // Add cars R1 and R2
    clickButton("Car + button", 2)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 600);
    clickButton("Car - button", 2)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 0);

    cy.get('[data-harmony-id="Next test"]').click();
    // Add bikes
    clickButton("Bike + button", 2)
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 200);
    clickButton("Bike - button", 2)
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 0);

    cy.get('[data-harmony-id="Next test"]').click();

    // Test discount when car rental exceeds 600 EUR - requirements R3 and R3b
    clickButton("Car + button", 3)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1);

    cy.get('[data-harmony-id="Next test"]').click();

    // Test discount when bikes already selected - requirement R3a
    clickButton("Bike + button", 2)
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 2);
    clickButton("Car + button", 3)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 1000);

    cy.get('[data-harmony-id="Next test"]').click();

    // Remove vehicles and check discount withdrawal - requirement R4
    clickButton("Car + button", 3)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1);

    clickButton("Car - button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 600);

    cy.get('[data-harmony-id="Next test"]').click();

    // Discount is withdrawn and re-applied when no bike is added - requirement R4a
    clickButton("Car + button", 3)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1);

    clickButton("Car - button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 600);

    clickButton("Car + button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1);

    cy.get('[data-harmony-id="Next test"]').click();

    // Discount is withdrawn and re-applied when bikes are added - requirement R4b
    clickButton("Car + button", 3)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1); // Free bike

    clickButton("Car - button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 600);

    clickButton("Car + button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1); // Free bike again

    clickButton("Bike + button", 2)
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 3); // 3 bikes because 1 is free
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 1100);

    cy.get('[data-harmony-id="Next test"]').click();

    // Remove free bike and check no discount - requirement R5
    clickButton("Car + button", 3)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1); // Free bike

    clickButton("Bike - button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900); // removed free bike, no additional discount

    clickButton("Car - button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 600); // +3 cars, -1 bike, -1 car

    clickButton("Car + button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    clickButton("Bike + button", 1)
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 1000);
    clickButton("Bike - button", 1)
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900); // +1 car, +1 bike, -1 bike

    cy.get('[data-harmony-id="Stop"]').click();
  })
})

function clickButton(id, amount) {
  let i = 0;
  while (i < amount) {
    cy.get('[data-harmony-id="' + id + '"]').click();
    i++;
  }
}