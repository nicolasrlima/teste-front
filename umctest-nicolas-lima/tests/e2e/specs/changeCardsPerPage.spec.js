describe("Change the selected activity and then check the cards list", () => {
  before(() => {
    cy.navigateToActivities();
  });

  it('Should select "3" in cardsPerPage and check the list"', () => {
    cy.get("#results-per-page")
      .select("3")
      .should("have.value", "3");

    cy.get(".patient-name").should("have.length", 3);
  });

  it('Should select "6" in cardsPerPage and check the list"', () => {
    cy.get("#results-per-page")
      .select("6")
      .should("have.value", "6");

    cy.get(".patient-name").should("have.length", 6);
  });

  it('Should select "9" in cardsPerPage and check the list"', () => {
    cy.get("#results-per-page")
      .select("9")
      .should("have.value", "9");

    cy.get(".patient-name").should("have.length", 9);
  });
});
