describe('Notas', () => {

  it('Notas', () => {
    cy.visit('https://exercises.test-design.org/university-grade/')

    let notas1 = [0, 24, 25, 26, 50];
    let notas2 = [0, 24, 25, 26, 50];
    let notas3 = [0, 24, 25, 26, 50];

    for (let nota1 of notas1) {
      cy.get('[data-harmony-id="BE"]').type(nota1);
      for (let nota2 of notas2) {
        cy.get('[data-harmony-id="LE"]').type(nota2);
        for (let nota3 of notas3) {
          cy.get('[data-harmony-id="WP"]').type(nota3);

          picarboton("Continue");

          cy.get('[data-harmony-id="cours result"]').should('have.text', suma(nota1, nota2, nota3));

          cy.get('[data-harmony-id="WP"]').clear();
        }
        cy.get('[data-harmony-id="LE"]').clear();
      }
      cy.get('[data-harmony-id="BE"]').clear();
    }
    picarboton("Stop");
  })

  function suma(nota1, nota2, nota3) {
    if (nota1 === 0 && nota2 === 0 && nota3 === 0)
      return "-"
    if (nota1 < 25 || nota2 < 25 || nota3 < 25)
      return "failed"

    let resultado = nota1 + nota2 + nota3

    if (resultado < 76)
      return "failed"

    if (resultado <= 100)
      return "satisfactory"

    if (resultado <= 125)
      return "good"

    return "very good"
  }
})

//failed/satisfactory/good/very good


function picarboton(id) {
  cy.get('[data-harmony-id="' + id + '"]').click();
}


