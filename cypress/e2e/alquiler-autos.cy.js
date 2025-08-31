describe('alquiler', () => {

  it('alquiler', () => {
    cy.visit('https://exercises.test-design.org/rental/')


    // agregar autos R1 y R2
    picarboton("Car + button", 2)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 600);
    picarboton("Car - button", 2)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 0);

    cy.get('[data-harmony-id="Next test"]').click();
    //agregar bicis
    picarboton("Bike + button", 2)
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 200);
    picarboton("Bike - button", 2)
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 0);

    cy.get('[data-harmony-id="Next test"]').click();

    //R3 y R3b
    picarboton("Car + button", 3)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1);

    cy.get('[data-harmony-id="Next test"]').click();

    //R3a
    picarboton("Bike + button", 2)
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 2);
    picarboton("Car + button", 3)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 1000);

    cy.get('[data-harmony-id="Next test"]').click();

    //R4
    picarboton("Car + button", 3)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1);

    picarboton("Car - button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 600);

    cy.get('[data-harmony-id="Next test"]').click();

    //R4a
    picarboton("Car + button", 3)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1);

    picarboton("Car - button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 600);

    picarboton("Car + button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1);

    cy.get('[data-harmony-id="Next test"]').click();

    //R4b
    picarboton("Car + button", 3)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1); //bici gratis

    picarboton("Car - button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 600);

    picarboton("Car + button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1); //bici gratis de nuevo

    picarboton("Bike + button", 2)
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 3); // hay 3 porque 1 esta gratis
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 1100);

    cy.get('[data-harmony-id="Next test"]').click();

    //R5
    picarboton("Car + button", 3)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1); //bici gratis

    picarboton("Bike - button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900); //saco la bici gratis pero no se hace otro descuento

    //weas de la pagina

    picarboton("Car - button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 600); // +3 autos, -1 bici, -1 auto

    picarboton("Car + button", 1)
    cy.get('[data-harmony-id="Car number"]').should('have.text', 3);
    picarboton("Bike + button", 1)
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 1000);
     picarboton("Bike - button", 1)
    cy.get('[data-harmony-id="Bike number"]').should('have.text', 1);
    cy.get('[data-harmony-id="Rental price"]').should('have.text', 900); //+1 auto, + 1 bici, -1 bici
    

    
    cy.get('[data-harmony-id="Stop"]').click();


  })
})

function picarboton(id, cantidad) {
  let i = 0;
  while (i < cantidad) {
    cy.get('[data-harmony-id="' + id + '"]').click();
    i++;
  }
}

// function picarboton(id) {
//   for (let i = 0; i < 3; i++) {
//     cy.get('[data-harmony-id="' + id + '"]').click();
//   }
// }

// function picarboton(id) {
//   let i = 0;
//   while ( i < 3) {
//     cy.get('[data-harmony-id="' + id + '"]').click();
//     i++;
//   }
// }
