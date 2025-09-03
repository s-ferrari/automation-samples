describe('University Grades', () => {

  it('University Grades', () => {
    cy.visit('https://exercises.test-design.org/university-grade/')

    let blackboardExercises = [0, 24, 25, 26, 50];
    let labExercises = [0, 24, 25, 26, 50];
    let writtenPart = [0, 24, 25, 26, 50];

    for (let beScore of blackboardExercises) {
      cy.get('[data-harmony-id="BE"]').type(beScore);
      for (let leScore of labExercises) {
        cy.get('[data-harmony-id="LE"]').type(leScore);
        for (let wpScore of writtenPart) {
          cy.get('[data-harmony-id="WP"]').type(wpScore);

          clickButton("Continue");

          cy.get('[data-harmony-id="cours result"]').should('have.text', calculateGrade(beScore, leScore, wpScore));

          cy.get('[data-harmony-id="WP"]').clear();
        }
        cy.get('[data-harmony-id="LE"]').clear();
      }
      cy.get('[data-harmony-id="BE"]').clear();
    }
    clickButton("Stop");
  })

  function calculateGrade(beScore, leScore, wpScore) {
    if (beScore === 0 && leScore === 0 && wpScore === 0)
      return "-";

    if (beScore < 25 || leScore < 25 || wpScore < 25)
      return "failed";

    let totalScore = beScore + leScore + wpScore;

    if (totalScore < 76)
      return "failed";

    if (totalScore <= 100)
      return "satisfactory";

    if (totalScore <= 125)
      return "good";

    return "very good";
  }
})

function clickButton(id) {
  cy.get('[data-harmony-id="' + id + '"]').click();
}