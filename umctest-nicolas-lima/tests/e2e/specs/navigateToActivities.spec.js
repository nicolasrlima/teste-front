describe("Navigates to activities and checks select usage", () => {
  it("Should visit baseUrl and navigate to activities", () => {
    cy.visit(Cypress.config().baseUrl);

    cy.get("[data-cy=hamburguer-menu]").click();

    cy.get("nav").should("be.visible");

    cy.findByText("Minhas atividades").click();

    cy.contains("Sudanka Bakalowits").should("be.visible");
  });
});
