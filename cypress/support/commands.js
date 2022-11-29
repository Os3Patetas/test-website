let hostVood = "http://localhost:4200/";

Cypress.Commands.add("visitVood", () => {
  cy.visit(hostVood);
});
