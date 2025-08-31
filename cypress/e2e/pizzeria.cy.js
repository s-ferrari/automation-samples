describe('pizzeria', () => {

  it('pizzeria', () => {
    cy.visit('https://exercises.test-design.org/pizza/')


    //R1
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 0);
    cy.get('[data-harmony-id="pollo number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Beer number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Coke number"]').should('have.text', 0);

    //R2
    picarboton("fresca + button", 1)
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 1);
    picarboton("pollo + button", 1)
    cy.get('[data-harmony-id="pollo number"]').should('have.text', 1);
    picarboton("Beer + button", 1)
    cy.get('[data-harmony-id="Beer number"]').should('have.text', 1);
    picarboton("Coke + button", 1)
    cy.get('[data-harmony-id="Coke number"]').should('have.text', 1);

    picarboton("Next test", 1)

    //R3
    picarboton("fresca + button", 1)
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 1);
    picarboton("pollo + button", 1)
    cy.get('[data-harmony-id="pollo number"]').should('have.text', 1);
    picarboton("Beer + button", 1)
    cy.get('[data-harmony-id="Beer number"]').should('have.text', 1);
    picarboton("Coke + button", 1)
    cy.get('[data-harmony-id="Coke number"]').should('have.text', 1);
    picarboton("fresca X button", 1)
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 0);
    picarboton("pollo X button", 1)
    cy.get('[data-harmony-id="pollo number"]').should('have.text', 0);
    picarboton("Beer X button", 1)
    cy.get('[data-harmony-id="Beer number"]').should('have.text', 0);
    picarboton("Coke X button", 1)
    cy.get('[data-harmony-id="Coke number"]').should('have.text', 0);

    picarboton("Next test", 1)

    //R4a y R5 con cerveza gratis

    cy.get('[data-harmony-id="free beer"]').should('not.exist'); // que los free no existan
    cy.get('[data-harmony-id="free coke"]').should('not.exist');

    picarboton("fresca + button", 3) //seleccionar 3 pizzas frescas para que llegue a $45s
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    cy.get('[data-harmony-id="free beer"]').should('be.visible'); // que los free sean visibles
    cy.get('[data-harmony-id="free coke"]').should('be.visible');

    picarboton("free beer", 1) //seleccionar una cerveza gratis

    cy.get('[data-harmony-id="free beer"]').should('not.exist'); //que los free dejen de existir
    cy.get('[data-harmony-id="free coke"]').should('not.exist');

    cy.contains('span', 'Free beer added').should('be.visible'); //que en el span aparezca solo la cerveza gratis agregada y no la coca-cola
    cy.contains('span', 'Free coke added').should('not.exist');

    picarboton("Next test", 1)

    //R4b y R5 con coca cola gratis
    cy.get('[data-harmony-id="free beer"]').should('not.exist'); // que los free no existan
    cy.get('[data-harmony-id="free coke"]').should('not.exist');

    picarboton("fresca + button", 3) //seleccionar 3 pizzas frescas para que llegue a $45
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    cy.get('[data-harmony-id="free coke"]').should('be.visible'); // que los free sean visibles
    cy.get('[data-harmony-id="free beer"]').should('be.visible');

    picarboton("free coke", 1) //seleccionar una cocacola

    cy.get('[data-harmony-id="free beer"]').should('not.exist'); //que los free dejen de existir
    cy.get('[data-harmony-id="free coke"]').should('not.exist');

    cy.contains('span', 'Free coke added').should('be.visible'); //que en el span aparezca solo la coca cola gratis agregada y no la cerveza
    cy.contains('span', 'Free beer added').should('not.exist');

    picarboton("Next test", 1)

    //R6
    picarboton("fresca + button", 1) //seleccionar 3 pizzas para que llegue a $45
    picarboton("pollo + button", 2)

    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 1);
    cy.get('[data-harmony-id="pollo number"]').should('have.text', 2);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 48);

    cy.get('[data-harmony-id="free coke"]').should('be.visible'); // que los free sean visibles
    cy.get('[data-harmony-id="free beer"]').should('be.visible');

    picarboton("fresca X button", 1) //sacar 1 pizza

    cy.get('[data-harmony-id="free beer"]').should('not.exist'); //que los free dejen de existir
    cy.get('[data-harmony-id="free coke"]').should('not.exist');
    cy.get('[data-harmony-id="Total price"]').should('have.text', 30);

    picarboton("fresca + button", 1) //volver a agregar la pizza
    cy.get('[data-harmony-id="free coke"]').should('be.visible'); // que los botones de free sean visibles
    cy.get('[data-harmony-id="free beer"]').should('be.visible');


    picarboton("Next test", 1)

    //R7
    picarboton("fresca + button", 3) //seleccionar 3 pizzas frescas para que llegue a $45
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    picarboton("free beer", 1) //seleccionar una cerveza gratis

    cy.contains('span', 'Free beer added').should('be.visible'); //que en el span aparezca solo la cerveza gratis agregada y no la coca-cola
    cy.contains('span', 'Free coke added').should('not.exist');

    picarboton("Beer X button", 1) //sacar la cerveza gratis

    cy.get('[data-harmony-id="Beer number"]').should('have.text', 0);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    picarboton("Beer + button", 1) //agregar la cerveza
    cy.contains('span', 'Free beer added').should('be.visible'); //verificar que este agregada gratis
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    picarboton("Next test", 1)

    //R8
    picarboton("fresca + button", 1) //agregar todos los articulos
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 1);
    picarboton("pollo + button", 1)
    cy.get('[data-harmony-id="pollo number"]').should('have.text', 1);
    picarboton("Beer + button", 1)
    cy.get('[data-harmony-id="Beer number"]').should('have.text', 1);
    picarboton("Coke + button", 1)
    cy.get('[data-harmony-id="Coke number"]').should('have.text', 1);

    picarboton("clear all", 1) //eliminar todos los articulos
  
    picarboton("fresca + button", 3) //seleccionar 3 pizzas frescas para que llegue a $45s
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    cy.get('[data-harmony-id="free beer"]').should('be.visible'); // que los free sean visibles
    cy.get('[data-harmony-id="free coke"]').should('be.visible');

    picarboton("free beer", 1) //seleccionar una cerveza gratis

    picarboton("clear all", 1) //eliminar todos los articulos

    picarboton("fresca + button", 3) //seleccionar 3 pizzas frescas para que llegue a $45s
    cy.get('[data-harmony-id="Fresca number"]').should('have.text', 3);
    cy.get('[data-harmony-id="Total price"]').should('have.text', 54);

    cy.get('[data-harmony-id="free beer"]').should('be.visible'); // que los free sean visibles
    cy.get('[data-harmony-id="free coke"]').should('be.visible');

    picarboton("free coke", 1) //seleccionar una coca cola gratis

    picarboton("Stop", 1)

  })
})

function picarboton(id, cantidad) {
  for (let i = 0; i < cantidad; i++)
    cy.get('[data-harmony-id="'+id+'"]').click();
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
