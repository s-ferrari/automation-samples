describe('Vacaciones', () => {

  it('Vacaciones', () => {
    cy.visit('https://exercises.test-design.org/online-book-store/')

    let preciosnuevos = [40, 49.99, 50, 29, 30, 30.01, 60];
    let preciosviejos = [59, 60.01, 61, 60, 0];
    let vips = [true, false];

    for (let precionuevo of preciosnuevos) {
      cy.get('[data-harmony-id="New price"]').type(precionuevo);
      for (let precioviejo of preciosviejos) {
        cy.get('[data-harmony-id="Second price"]').type(precioviejo);
        for (let vip of vips) {
          if (vip) {
            cy.get('[data-harmony-id="Card"]').check();
          }
          cy.get('[data-harmony-id="Add test"]').click();
          cy.get('[data-harmony-id="Card"]').uncheck();
        }
        cy.get('[data-harmony-id="Second price"]').clear();
      }
      cy.get('[data-harmony-id="New price"]').clear();
    }
      cy.get('[data-harmony-id="Stop"]').click();
  })
})

