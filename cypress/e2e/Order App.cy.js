describe('Order App', () => {
  it('Online Order App', () => {
    cy.visit('https://exercises.test-design.org/pizza/')

    // R1 - Before any user action, all item quantities should be 0
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 0);
    cy.get('[data-harmony-id="pollo number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Beer number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Coke number"]').should('have.text', 0);

    // R2 - The user can increase the quantity of any item using "+"
    clickButton("fresca + button", 1)
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 1);
    clickButton("pollo + button", 1)
    cy.get('[data-harmony-id="pollo number"]').should('have.text', 1);
    clickButton("Beer + button", 1)
    cy.get('[data-harmony-id="Beer number"]').should('have.text', 1);
    clickButton("Coke + button", 1)
    cy.get('[data-harmony-id="Coke number"]').should('have.text', 1);

    clickButton("Next test", 1)

    // R3 - The user can reset item quantity to 0 by pressing "X"
    clickButton("fresca + button", 1)
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 1);
    clickButton("pollo + button", 1)
    cy.get('[data-harmony-id="pollo number"]').should('have.text', 1);
    clickButton("Beer + button", 1)
    cy.get('[data-harmony-id="Beer number"]').should('have.text', 1);
    clickButton("Coke + button", 1)
    cy.get('[data-harmony-id="Coke number"]').should('have.text', 1);
    clickButton("fresca X button", 1)
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 0);
    clickButton("pollo X button", 1)
    cy.get('[data-harmony-id="pollo number"]').should('have.text', 0);
    clickButton("Beer X button", 1)
    cy.get('[data-harmony-id="Beer number"]').should('have.text', 0);
    clickButton("Coke X button", 1)
    cy.get('[data-harmony-id="Coke number"]').should('have.text', 0);

    clickButton("Next test", 1)

    // R4 & R5 - When non-beverage total reaches €45, free drinks options appear.
    // User can select either free beer or free coke, but cannot switch once selected.

    cy.get('[data-harmony-id="free beer"]').should('not.exist');
    cy.get('[data-harmony-id="free coke"]').should('not.exist');

    clickButton("fresca + button", 3) // Add 3 Fresca pizzas to reach €54
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    cy.get('[data-harmony-id="free beer"]').should('be.visible');
    cy.get('[data-harmony-id="free coke"]').should('be.visible');

    clickButton("free beer", 1) // Select free beer

    cy.get('[data-harmony-id="free beer"]').should('not.exist');
    cy.get('[data-harmony-id="free coke"]').should('not.exist');

    cy.contains('span', 'Free beer added').should('be.visible');
    cy.contains('span', 'Free coke added').should('not.exist');

    clickButton("Next test", 1)

    // R4 & R5 again - now testing selection of free coke instead of beer
    cy.get('[data-harmony-id="free beer"]').should('not.exist');
    cy.get('[data-harmony-id="free coke"]').should('not.exist');

    clickButton("fresca + button", 3) // Add 3 Fresca pizzas to reach €54 total
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    cy.get('[data-harmony-id="free coke"]').should('be.visible');
    cy.get('[data-harmony-id="free beer"]').should('be.visible');

    clickButton("free coke", 1) // Add free Coke

    cy.get('[data-harmony-id="free beer"]').should('not.exist');
    cy.get('[data-harmony-id="free coke"]').should('not.exist');

    cy.contains('span', 'Free coke added').should('be.visible'); // The span should display only the free Coke, and not the beer
    cy.contains('span', 'Free beer added').should('not.exist');

    clickButton("Next test", 1)

    // R6 - If food total drops below 45€, the free drink disappears
    clickButton("fresca + button", 1) // Add 1 Fresca pizza
    clickButton("pollo + button", 2) // Add 2 Pollo pizzas

    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 1);
    cy.get('[data-harmony-id="pollo number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 48);

    cy.get('[data-harmony-id="free coke"]').should('be.visible');
    cy.get('[data-harmony-id="free beer"]').should('be.visible');

    clickButton("fresca X button", 1) // Remove 1 Fresca pizza, total now €30

    cy.get('[data-harmony-id="free beer"]').should('not.exist');
    cy.get('[data-harmony-id="free coke"]').should('not.exist');
    cy.get('[data-harmony-id="Total price"]').should('have.text', 30);

    clickButton("fresca + button", 1) // Add Fresca pizza again, total back to €48
    cy.get('[data-harmony-id="free coke"]').should('be.visible');
    cy.get('[data-harmony-id="free beer"]').should('be.visible');

    clickButton("Next test", 1)

    // R7 - Free drink can be deleted and re-added without cost
    clickButton("fresca + button", 3)
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    clickButton("free beer", 1)

    cy.contains('span', 'Free beer added').should('be.visible');
    cy.contains('span', 'Free coke added').should('not.exist');

    clickButton("Beer X button", 1) // Remove the free beer

    cy.get('[data-harmony-id="Beer number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    clickButton("Beer + button", 1) // Re-add beer
    cy.contains('span', 'Free beer added').should('be.visible'); // Verify that the item was added as a free item
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    clickButton("Next test", 1)

    // R8 - Clearing all resets state and allows new free drink selection
    clickButton("fresca + button", 1)
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 1);
    clickButton("pollo + button", 1)
    cy.get('[data-harmony-id="pollo number"]').should('have.text', 1);
    clickButton("Beer + button", 1)
    cy.get('[data-harmony-id="Beer number"]').should('have.text', 1);
    clickButton("Coke + button", 1)
    cy.get('[data-harmony-id="Coke number"]').should('have.text', 1);

    clickButton("clear all", 1) // Delete all items

    clickButton("fresca + button", 3)
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    cy.get('[data-harmony-id="free beer"]').should('be.visible');
    cy.get('[data-harmony-id="free coke"]').should('be.visible');

    clickButton("free beer", 1)

    clickButton("clear all", 1)

    clickButton("fresca + button", 3)
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    cy.get('[data-harmony-id="free beer"]').should('be.visible');
    cy.get('[data-harmony-id="free coke"]').should('be.visible');

    clickButton("free coke", 1)

    clickButton("Stop", 1)
  })
})

function clickButton(id, quantity) {
  for (let i = 0; i < quantity; i++)
    cy.get('[data-harmony-id="' + id + '"]').click();
}