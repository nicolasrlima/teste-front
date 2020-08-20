describe("Change the selected activity and then check the cards list", () => {
  before(() => {
    cy.navigateToActivities();
  });

  it('Should select "Unidade de internação II and check the list"', () => {
    cy.get("#activities")
      .select("Unidade de internação II")
      .should("have.value", "2");

    cy.contains("Salazar Frances").should("be.visible");
  });
});
