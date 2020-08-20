describe("Navigates to activities and checks select usage", () => {
  it("Should visit root and navigate to activities", () => {
    cy.visit(Cypress.config().baseUrl);

    cy.server();

    cy.route("**/activities").as("getActivities");

    cy.get("[data-cy=hamburguer-menu]").click();

    cy.get("nav").should("be.visible");

    cy.get('[href="/activities"]').click();

    // cy.wait("@getActivities");
  });
});
