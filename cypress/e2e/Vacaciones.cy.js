describe('Libreria', () => {

  it('Libreria', () => {
    cy.visit('https://exercises.test-design.org/paid-vacation-days/')

    let edades = [16, 18, 20, 44, 45, 46, 55, 59, 60, 61];
    let anios = [10, 14, 15, 16, 29, 30, 31];

    for (let edad of edades) {
      cy.get('[data-harmony-id="Age"]').type(edad);
      for (let anio of anios) {
        cy.get('[data-harmony-id="Service"]').type(anio);
        cy.get('[data-harmony-id="Continue"]').click();
        cy.get('[data-harmony-id="Vacation days"]').should('have.text', vacaciones(edad, anio));
        cy.get('[data-harmony-id="Service"]').clear();
      }
      cy.get('[data-harmony-id="Age"]').clear();
    }
    cy.get('[data-harmony-id="Stop"]').click();
  })

  function vacaciones(edad, anio) {
    let dias = 22
    if (edad < 18 || edad >= 60 || anio >= 30)
      dias = dias + 5
    if (edad >= 60 && anio >= 30)
      dias = dias + 3
    if ((anio >= 15 || edad >= 45) && dias==22)
      dias = 24

    return dias
  }
})
