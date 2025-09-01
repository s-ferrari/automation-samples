describe('Vacations', () => {

  it('Vacations', () => {
    cy.visit('https://exercises.test-design.org/paid-vacation-days/')

    let ages = [16, 18, 20, 44, 45, 46, 55, 59, 60, 61];
    let yearsOfService = [10, 14, 15, 16, 29, 30, 31];

    for (let age of ages) {
      cy.get('[data-harmony-id="Age"]').type(age);
      for (let serviceYear of yearsOfService) {
        cy.get('[data-harmony-id="Service"]').type(serviceYear);
        cy.get('[data-harmony-id="Continue"]').click();
        cy.get('[data-harmony-id="Vacation days"]').should('have.text', calculateVacationDays(age, serviceYear));
        cy.get('[data-harmony-id="Service"]').clear();
      }
      cy.get('[data-harmony-id="Age"]').clear();
    }
    cy.get('[data-harmony-id="Stop"]').click();
  })

  function calculateVacationDays(age, serviceYear) {
    let vacationDays = 22;
    if (age < 18 || age >= 60 || serviceYear >= 30) {
      vacationDays += 5;
    }
    if (age >= 60 && serviceYear >= 30) {
      vacationDays += 3;
    }
    if ((serviceYear >= 15 || age >= 45) && vacationDays === 22) {
      vacationDays = 24;
    }
    return vacationDays;
  }
})